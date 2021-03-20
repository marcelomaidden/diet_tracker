class CreateMeasurements < ActiveRecord::Migration[6.1]
  def change
    create_table :measurements do |t|
      t.float :value
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
