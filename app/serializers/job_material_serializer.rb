class JobMaterialSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :total
  has_one :job
  has_one :material
end
