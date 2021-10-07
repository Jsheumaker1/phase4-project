class CreateMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :materials do |t|
      t.string :item
      t.integer :price

      t.timestamps
    end
  end
end
