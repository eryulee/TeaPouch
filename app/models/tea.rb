class Tea < ApplicationRecord
  belongs_to :user
  belongs_to :flavor
end
