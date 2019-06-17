class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :brewery
      t.integer :country_id
      t.text :description
      t.float :abv
      t.string :image

      t.timestamps
    end
  end
end
