# frozen_string_literal: true

class AddPhotoToCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :photo, :string
  end
end
