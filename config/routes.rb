Rails.application.routes.draw do
  
  resources :job_materials
  resources :materials
  resources :jobs, only: [:index]
  resources :users, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/login', to: 'sessions#destroy'
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
