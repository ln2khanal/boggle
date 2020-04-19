Rails.application.routes.draw do
  root 'home#index'
  get 'getdata', to: 'fetch_data#boggle_data'
  match '*path', to: 'home#index', via: :all
end
