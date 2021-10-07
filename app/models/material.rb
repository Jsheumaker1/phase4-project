class Material < ApplicationRecord
    has_many :job_materials
    has_many :jobs, through: :job_materials
end
