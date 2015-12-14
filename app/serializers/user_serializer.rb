class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :closets
  has_many :activities
  embed :ids
end
