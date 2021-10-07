class Job < ApplicationRecord
  belongs_to :user
  has_many :job_materials
  has_many :materials, through: :job_materials
end
