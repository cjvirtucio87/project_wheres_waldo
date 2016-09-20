Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "tags#index"
  resources :tags, only: [:index]
  resources :people, only: [:index]
  resources :tags, only: [:index]
end
