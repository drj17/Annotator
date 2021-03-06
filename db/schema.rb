# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170427153934) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "author_id",               null: false
    t.integer  "score",       default: 0, null: false
    t.text     "description",             null: false
    t.integer  "song_id",                 null: false
    t.integer  "start_index",             null: false
    t.integer  "end_index",               null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["start_index", "end_index", "song_id"], name: "index_annotations_on_start_index_and_end_index_and_song_id", unique: true, using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",        null: false
    t.integer  "commentable_id",   null: false
    t.text     "body",             null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "commentable_type"
    t.index ["body"], name: "index_comments_on_body", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",              null: false
    t.text     "lyrics",             null: false
    t.integer  "author_id",          null: false
    t.string   "artist",             null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["title", "artist"], name: "index_songs_on_title_and_artist", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                    null: false
    t.string   "password_digest",             null: false
    t.string   "session_token",               null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "iq",              default: 0
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "user_id",                   null: false
    t.integer  "annotation_id",             null: false
    t.integer  "value",         default: 1
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.index ["user_id", "annotation_id", "value"], name: "index_votes_on_user_id_and_annotation_id_and_value", unique: true, using: :btree
  end

end
