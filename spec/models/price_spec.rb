# == Schema Information
#
# Table name: prices
#
#  id         :integer          not null, primary key
#  price      :string
#  item_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Price, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
