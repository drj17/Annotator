
json.extract! @annotation, :id, :author, :author_id, :song_id, :description, :score
json.author @annotation.author.username
json.comments @annotation.comment_ids
json.did_vote @did_vote
json.direction @direction
