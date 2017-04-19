class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.text :lyrics, null: false
      t.integer :author_id, null: false
      t.string :artist, null: false

      t.timestamps
    end
    add_index :songs, [:title, :artist], unique: true
  end
end
