# == Schema Information
#
# Table name: annotations
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  score       :integer          default("0"), not null
#  description :text             not null
#  song_id     :integer          not null
#  start_index :integer          not null
#  end_index   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Annotation < ApplicationRecord
  validates :author, :song, :description, :start_index, :end_index, presence: true

  has_many :votes,
    primary_key: :id,
    foreign_key: :annotation_id,
    class_name: "Vote"

  belongs_to :song
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  def user_votes
    self.votes.sum(:value)
  end
end
