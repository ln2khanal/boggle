# frozen_string_literal: true

require 'oxford_dictionary'

# oxford dictionary API credentials
$app_id = '3baa1c65'
$app_key = '6863c2298870221c0ff76e15753589e3'
$language_check = 'en-gb'

$word_length_minimum = 3

$client = OxfordDictionary::Client.new(app_id: $app_id, app_key: $app_key)

def existing_word_score(word)
  return word.length
end

def word_existence(word)
  return $client.entry(word: word, dataset: $language_check, params: {})
end

def process_result(words)
  # return {
  #   score: 16,
  #   list_of_words: [
  #     {
  #       word: 'hello',
  #       score: 7,
  #       message: 'default message'
  #     },
  #     {
  #       word: 'world',
  #       score: 9,
  #       message: 'specific message message'
  #     },
  #     {
  #       word: 'non-existing-word',
  #       score: 0,
  #       invalid: true,
  #       message: 'the word doesnt exist'
  #     }
  #   ],
  #   invalid_words: []
  # }
  score = 0
  list_of_words = []
  words.each do |word|
    # if word.length < $word_length_minimum
    score += existing_word_score(word)
    if word.length
      list_of_words.push({
                           word: word,
                           message: '',
                           invalid: Integer(rand(2)).even?,
                           score: existing_word_score(word)
                         })
      next
    end
    # entry = word_existence(word)
    # if entry.error.nil?
    #   score += existing_word_score(word)
    # else
    #   invalid_words.push(word)
  end
  return { score: score, list_of_words: list_of_words }
end