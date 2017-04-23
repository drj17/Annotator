class CreateAnnotations < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false
      t.integer :score, null: false
      t.text :description, null: false
      t.integer :song_id, null: false
      t.integer :start_index, null: false
      t.integer :end_index, null: false

      t.timestamps
    end

    add_index :annotations, [:start_index, :end_index], unique: true
  end
end
