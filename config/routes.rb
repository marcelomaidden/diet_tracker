Rails.application.routes.draw do
  use_doorkeeper do
    skip_controllers :authorizations, :applications, :authorized_applications
  end
  devise_for :users
  post 'create', to: 'users#create'
  get 'users/me', to: 'users#me'

  resources :categories, only: %w[show index]

  resources :measurements, only: %w[index create]
  get 'measurements/today', to: 'measurements#today'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Frontend routes
  root 'frontend#index'
  get 'login', to: 'frontend#index'
  get 'sign-up', to: 'frontend#index'
  get 'measures', to: 'frontend#index'
  get 'menu', to: 'frontend#index'
  get 'progress', to: 'frontend#index'
  get 'dashboard', to: 'frontend#index'
  get 'menu', to: 'frontend#index'
  get 'profile', to: 'frontend#index'
end
