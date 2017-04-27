# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  author_id     :integer          not null
#  song_id       :integer
#  annotation_id :integer
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Comment < ApplicationRecord
  validates :author, :body, presence: true

  belongs_to :commentable, polymorphic: true

  belongs_to :author,
   primary_key: :id,
   foreign_key: :author_id,
   class_name: "User"

end
