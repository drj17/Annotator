
json.extract! song, :id, :title, :lyrics, :author_id, :artist
json.comments song.comment_ids
json.image_url asset_path(song.image.url)
