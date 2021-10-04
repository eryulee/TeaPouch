class AddIdToTeas < ActiveRecord::Migration[6.1]
  def change
    remove_column :teas, :flavor, :string
    add_reference :teas, :flavor, foreign_key: true

  end
end
