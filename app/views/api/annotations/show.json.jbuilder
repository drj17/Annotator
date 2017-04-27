
json.extract! @annotation, :id, :author, :author_id, :song_id, :description, :score
json.comments @annotation.commend_ids
json.did_vote @did_vote
json.direction @direction
