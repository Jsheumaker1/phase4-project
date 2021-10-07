class CreateJobMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :job_materials do |t|
      t.belongs_to :job, null: false, foreign_key: true
      t.belongs_to :material, null: false, foreign_key: true
      t.integer :quantity
      t.integer :total

      t.timestamps
    end
  end
end
