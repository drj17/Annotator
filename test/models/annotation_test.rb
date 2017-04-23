# == Schema Information
#
# Table name: annotations
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  score       :integer          not null
#  description :text             not null
#  song_id     :integer          not null
#  start_index :integer          not null
#  end_index   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
