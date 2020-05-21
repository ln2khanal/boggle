# frozen_string_literal: true

require 'matrix'
# provides data set for the game
# api call
class FetchDataController < ApplicationController
  def game_dataset
    render json: {
      data: Matrix.build(4) { Array('A'..'Z').sample }
    }
  end
end
