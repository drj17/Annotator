
@comments.each do |comment|
  json.extract! comment, :id, :body
  json.author_id comment.author.id
  json.username comment.author.username
end
