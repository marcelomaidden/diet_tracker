class MeasurementsController < ApplicationController
  def index
    
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
  def measurements_params
    params.require(:measurement).permit(:user, :Carbohydrates, :Fats, :Proteins)
  end
end
