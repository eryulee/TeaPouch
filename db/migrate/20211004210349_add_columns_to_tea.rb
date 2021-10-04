class AddColumnsToTea < ActiveRecord::Migration[6.1]
  def change
    add_column :teas, :price, :integer
    add_column :teas, :description, :text
    add_column :teas, :flavor, :string
  end
end
