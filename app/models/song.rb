# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  lyrics     :text             not null
#  author_id  :integer          not null
#  artist     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :lyrics, :author_id, :artist, presence: true
  validates_uniqueness_of :title, scope: :artist

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User






end
