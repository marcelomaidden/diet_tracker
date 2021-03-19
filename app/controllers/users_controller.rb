class UsersController < ApplicationController
  before_action :doorkeeper_authorize!, except: [:create, :me]
  def create
    user = User.new(user_params)

    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # GET /me.json
  def me
    render json: current_resource_owner
  end

  private

  # Find the user that owns the access token
  def current_resource_owner
    User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :photo)
  end
end
