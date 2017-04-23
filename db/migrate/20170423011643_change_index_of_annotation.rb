class ChangeIndexOfAnnotation < ActiveRecord::Migration[5.0]
  def change
    remove_index :annotations, [:start_index, :end_index]
    add_index :annotations, [:start_index, :end_index, :song_id], unique: true
  end
end
