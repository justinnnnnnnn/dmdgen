Rails.application.routes.draw do
  # resources :frogs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :frogs
  end

  get '*path', to: "static_pages#frontend_index"
end
