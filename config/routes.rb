Rails.application.routes.draw do
  
  resources :job_materials
  resources :materials
  resources :jobs
  resources :users, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
