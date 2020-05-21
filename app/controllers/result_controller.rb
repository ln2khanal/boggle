# frozen_string_literal: true

# there must be another better way of requiring a module!
require File.join(Rails.root, 'lib/assets/word_processor')

# Handles the result
# Params: request payload should be a string white space as a word separator
class ResultController < ApplicationController

  def index
    # Rails.logger.info client.search(language: 'en-gb', params: { q: 'vapid' })
    # Rails.logger.info entry.error if entry.error
    result_dat = process_result(params[:words])
    # Rails.logger.info params[:words].split
    @result_data = 'dummy data available in it\'s view. Not using it for now'
    render json: result_dat
  end
end
