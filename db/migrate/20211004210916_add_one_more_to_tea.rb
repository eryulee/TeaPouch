class AddOneMoreToTea < ActiveRecord::Migration[6.1]
  def change
    add_column :teas, :image_url, :string
  end
end
