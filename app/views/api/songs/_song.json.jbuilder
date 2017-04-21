json.extract! song, :id, :title, :lyrics, :author_id, :artist
json.image_url asset_path(song.image.url)
