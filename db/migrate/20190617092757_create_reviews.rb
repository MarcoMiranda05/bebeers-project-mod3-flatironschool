class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :beer_id
      t.integer :country_id
      t.text :review
      t.float :rating

      t.timestamps
    end
  end
end
