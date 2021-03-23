class MeasurementsController < ApplicationController
  before_action :doorkeeper_authorize!

  def index
    user=User.find(current_resource_owner.id)
    measurements=user.measurements.order(created_at: :desc)

    render json: measurements
  end

  def create
    user=measurements_params[:user]
    measurements_params.each do |index, measure|
      if ["Carbohydrates", "Proteins", "Fats"].include?(index)
        measurement = Measurement.new
        category = Category.find_by(name: index)
        measurement.user_id = user
        measurement.category_id = category.id
        measurement.value = measure
        measurement.save
      end
    end

    render json: { message: "Success" }
    
  rescue
    render json: { status: :unprocessable_entity }
  end

  private
 # Find the user that owns the access token
  def current_resource_owner
    User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
  end

  def measurements_params
    params.require(:measurement).permit(:user, :Carbohydrates, :Fats, :Proteins)
  end
end
