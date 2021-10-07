class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :customer
      t.string :address
      t.string :date
      t.text :description
      t.integer :subtotal
      t.integer :tax
      t.integer :grand_total

      t.timestamps
    end
  end
end
