json.extract! @comment, :id, :author, :body
json.author_id @comment.author_id
json.username @comment.author.username
