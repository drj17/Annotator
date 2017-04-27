# == Schema Information
#
# Table name: votes
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  annotation_id :integer          not null
#  value         :integer          default("1")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Vote < ApplicationRecord
  validates :user, :annotation, presence: true

  belongs_to :user
  belongs_to :annotation,
    primary_key: :id,
    foreign_key: :annotation_id,
    class_name: "Annotation"

  def comment_ids
    comments.map do |comment|
      comment.id
    end
  end
end
