# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all
User.create(username: "demo_user", password: "password")

Song.create(title: "Tidal", lyrics:
"Awake, unfazed
Morning light tells of the dawning day
Just like any other day
Brush off sleep's touch
Clear midnight's haze
There's nothing extraordinary here
A flaccid world, unfit, unclear
Desperate for something more
Something more than getting by
Empty faces on the sidewalk
Listless and limping to a lie
Of a bright and pleasant future
Of a blue and cloudless sky
A phantom whisper sounds deceiving
It brings in the question \"why?\"
We work until we are unable
Then locked away until we die

But then it happened
Everything changed in but an instant
A violent burst of brilliant colour
Somehow close and somehow distant
From a whisper
To a scream
To a hoarse, distorted laugh
There is no hope of restitution
There is no ever going back

In dreamless sleep
One ponders death
Hold back the fleeting final breath
Knuckle white, slipping grip
Jaw clenched tight, and quivering lip
This cannot happen
This cannot be
Escape a life of anonymity
To be a drop into the sea
Whose ripple turns to tidal wave
That sweeps the shores it once forgave
But crashing down upon the shore
The sea is silent evermore

Awake, unfazed
Morning light tells of the dawning day
Just like any other day
Brush off sleep's touch
Clear midnight's haze
There's nothing extraordinary here
A flaccid world, unfit, unclear
Desperate for something more
Something more than getting by
There's got to be something more than this
It sounds so deceiving
Begging the question \"why?\"
Begging the question \"why?\"
Why do we work until we are unable?
Why do we work until we die?

A drop into the sea
Whose ripple turns to tidal wave
That sweeps the shores it once forgave

The sun, the moon, the Earth
Conversed and agreed
The people of the world must pay for its atrophy
But crashing down upon the shore
The sea is silent evermore

But then it happened
Everything changed in but an instant
A violent burst of brilliant colour
Somehow close and somehow distant

What unknow face now breaks the silence?
What tipping force disturbs the balance?
Swift and sober comes a voice
Offering a bitter choice", artist: "Protest The Hero", author_id: User.first.id);

Song.create(title: "DNA", lyrics: "I GOT I GOT I GOT", artist: "Kendrick Lamar", author_id: User.first.id)
Song.create(title: "HUMBLE", lyrics: "BE HUMBLE", artist: "Kendrick Lamar", author_id: User.first.id)
Song.create(title: "XXX", lyrics: "AMERICA GOD BLESS YOU", artist: "Kendrick Lamar", author_id: User.first.id)
