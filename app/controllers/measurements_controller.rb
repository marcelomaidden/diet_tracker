class MeasurementsController < ApplicationController
  before_action :doorkeeper_authorize!

  def index
    user = User.find(current_resource_owner.id)
    measurements = user.measurements.where('created_at <= ?', DateTime.current.end_of_day)
    measurements = measurements.order(created_at: :desc)

    render json: measurements
  end

  def today
    user = User.find(current_resource_owner.id)
    measurements = user.measurements.where(created_at: Date.today.all_day)

    render json: measurements
  end

  def create
    user = measurements_params[:user]
    added_measurements = []
    measurements_params.each do |index, measure|
      next unless %w[Carbohydrates Proteins Fats].include?(index)

      measurement = Measurement.new
      category = Category.find_by(name: index)
      measurement.user_id = user
      measurement.category_id = category.id
      measurement.created_at = measurements_params[:createdAt]
      measurement.value = measure
      added_measurements.push(measurement) if measurement.save
    end

    render json: added_measurements
  rescue StandardError
    render json: { status: :unprocessable_entity }
  end

  private

  # Find the user that owns the access token
  def current_resource_owner
    User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
  end

  def measurements_params
    params.require(:measurement).permit(:user, :Carbohydrates, :Fats, :Proteins, :createdAt)
  end
end
