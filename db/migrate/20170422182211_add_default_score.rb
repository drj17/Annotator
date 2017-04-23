class AddDefaultScore < ActiveRecord::Migration[5.0]
  def change
    change_column :annotations, :score, :integer, default: 0
  end
end
