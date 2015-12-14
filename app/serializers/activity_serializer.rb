class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :action, :trackable_id, :trackable_type, :trackable_name, :trackable_source, :user_id

end
