class JobSerializer < ActiveModel::Serializer
  attributes :id, :customer, :address, :date, :description, :subtotal, :tax, :grand_total
  has_one :user
end
