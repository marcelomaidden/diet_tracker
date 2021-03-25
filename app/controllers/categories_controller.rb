class CategoriesController < ApplicationController
  def index
    render json: Category.all.order(name: :asc)
  end

  def show
    category = Category.find(categories_params[:id])

    render json: { category: category }
  rescue StandardError
    render json: { error: '', status: :unprocessable_entity }
  end

  private

  def categories_params
    params.permit(:id)
  end
end
