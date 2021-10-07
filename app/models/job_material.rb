class JobMaterial < ApplicationRecord
  belongs_to :job
  belongs_to :material
end
