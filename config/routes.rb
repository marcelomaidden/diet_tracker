Rails.application.routes.draw do
  get 'categories/index'
  get 'categories/show'
  get 'users/create'
  use_doorkeeper do
    skip_controllers :authorizations, :applications, :authorized_applications
  end
  devise_for :users
  post 'create', to: 'users#create'
  get 'users/me', to: 'users#me'

  resources :categories, only: %w[show index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Frontend routes
  root 'frontend#index'
  get 'login', to: 'frontend#index'
  get 'sign-up', to: 'frontend#index'
end
