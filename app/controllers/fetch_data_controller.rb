# frozen_string_literal: true
# provides data set for the game
# api call
class FetchDataController < ApplicationController
  def boggle_data
    render json: {
      data: [%w[L LLLL T P], %w[I D B R], %w[M C I O]]
    }
  end
end
