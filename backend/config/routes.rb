Rails.application.routes.draw do
  resources :styles
  resources :reviews
  resources :beers
  resources :countries
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
