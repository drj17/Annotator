json.songs @songs do |song|
  json.extract! song, :id, :title, :artist
  json.image_url asset_path(song.image.url)
end

json.song_titles @song_titles do |song|
  json.extract! song, :id, :title, :artist
  json.image_url asset_path(song.image.url)
end

json.song_artists @song_artists do |song|
  json.extract! song, :id, :title, :artist
  json.image_url asset_path(song.image.url)
end
