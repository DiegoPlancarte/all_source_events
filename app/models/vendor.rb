class Vendor < ApplicationRecord
  belongs_to :user
  acts_as_favoritable
  has_many_attached :images
end
