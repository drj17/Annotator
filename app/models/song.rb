# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  lyrics             :text             not null
#  author_id          :integer          not null
#  artist             :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Song < ApplicationRecord
  include PgSearch

  validates :title, :lyrics, :author_id, :artist, presence: true
  validates_uniqueness_of :title, scope: :artist
  has_attached_file :image, default_url: "pacific_myth.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  pg_search_scope :search_title_for, against: :title, using: { tsearch: { any_word: true, prefix: true } }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :annotations
  has_many :comments, as: :commentable






end
