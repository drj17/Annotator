
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body
    json.author_id comment.author.id
    json.username comment.author.username
    # json.created_at comment.created_at
  end
end
