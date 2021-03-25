# frozen_string_literal: true

class AddPhotoToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :photo, :string
  end
end
