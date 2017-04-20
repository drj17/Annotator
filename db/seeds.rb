# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create(username: "demo_user", password: "password")
Song.create(title: "DNA", lyrics: "I GOT I GOT I GOT", artist: "Kendrick Lamar", author_id: User.first.id)
Song.create(title: "HUMBLE", lyrics: "BE HUMBLE", artist: "Kendrick Lamar", author_id: User.first.id)
Song.create(title: "XXX", lyrics: "AMERICA GOD BLESS YOU", artist: "Kendrick Lamar", author_id: User.first.id)
