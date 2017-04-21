json.array! @songs do |song|
  json.extract! song, :id, :title, :artist
  json.image_url asset_path(song.image.url)
end
