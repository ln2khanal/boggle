# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'
  get 'getdata', to: 'fetch_data#game_dataset'
  post 'result', to: 'result#index'
  match '*path', to: 'home#index', via: :all
end
