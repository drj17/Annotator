class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :annotation_id, null: false
      t.integer :value, default: 1

      t.timestamps
    end
    add_index :votes, [:user_id, :annotation_id, :value], unique: true
  end
end
