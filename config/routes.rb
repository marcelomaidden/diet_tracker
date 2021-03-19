Rails.application.routes.draw do
  get 'users/create'
  use_doorkeeper do
    skip_controllers :authorizations, :applications, :authorized_applications
  end
  devise_for :users
  post 'create', to: 'users#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Frontend routes
  root 'frontend#index'
  get 'login', to: 'frontend#index'
  get 'sign-up', to: 'frontend#index'
end
