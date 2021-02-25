class Vendor < ApplicationRecord
  belongs_to :user
  acts_as_favoritable
  has_one_attached :photo
end
