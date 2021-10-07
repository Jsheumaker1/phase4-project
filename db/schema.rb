# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_05_215358) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "job_materials", force: :cascade do |t|
    t.bigint "job_id", null: false
    t.bigint "material_id", null: false
    t.integer "quantity"
    t.integer "total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id"], name: "index_job_materials_on_job_id"
    t.index ["material_id"], name: "index_job_materials_on_material_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "customer"
    t.string "address"
    t.string "date"
    t.text "description"
    t.integer "subtotal"
    t.integer "tax"
    t.integer "grand_total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_jobs_on_user_id"
  end

  create_table "materials", force: :cascade do |t|
    t.string "item"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "job_materials", "jobs"
  add_foreign_key "job_materials", "materials"
  add_foreign_key "jobs", "users"
end
