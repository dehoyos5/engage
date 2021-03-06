Engage::Application.routes.draw do
  resources :posts


  mount StripeEvent::Engine => '/stripe'
  get "content/gold"
  get "content/silver"
  get "content/platinum"
  match "curly" => "users#curly"
  match "topbar" => "topbars#topbar"
  match "test" => "users#test"
  match "dashboard" => "users#dashboard"

  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users, :controllers => { :registrations => 'registrations' }
  devise_scope :user do
    put 'update_plan', :to => 'registrations#update_plan'
    put 'update_card', :to => 'registrations#update_card'
  end
  resources :users
end