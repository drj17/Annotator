# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all
Annotation.destroy_all
Comment.destroy_all

User.create(username: "demo_user", password: "password")
User.create(username: "david_janas", password: "appacademy")
User.create(username: "aa_student", password: "iamagod")

tidal = Song.create(title: "Tidal", lyrics:
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

tidal.image = File.open('app/assets/images/pacific_myth.jpg');
tidal.save!

god = Song.create(title: "33 \"GOD\"", artist: "Bon Iver", author_id: User.second.id, lyrics: "(When we leave this room it's gone)
Is the company stalling?
We had what we wanted: your eyes
(When we leave this room it's gone)
With no word from the former
I'd be happy as hell, if you stayed for tea
(I know so well that this is all there is)
This is how we grow now, woman
A child ignored
These will just be places to me now
The foreman is down
(When we leave this room it's gone)
We're rising the stairs

​i FIND GOD
AND RELIGIONS, TOO...

Staying at the Ace Hotel
If the calm would allow
Then I would just be floating to you now
It would make me pass to let it pass on
I'm climbing the dash, that skin

(Here in this room, this narrow room where life began when we were young last night)

Well we walked up on that bolt in the street
After you tied me in in the driveway of the apartment of his bede
Sent your sister home in a cab
Said I woulda walked across any thousand lands
(No not really if you can't)
I didn't need you that night
Not gonna need you anytime
Was gonna take it as it goes
I could go forward in the light
Well I better fold my clothes

(I’ll be looking through your eyes)
All my goodness
(I’ll be looking through your eyes)
(I’ll be looking through your eyes)
All my goodness to show
(Why are you so far from saving me?)
(Why are you so far from saving me?)")

god.image = File.open('app/assets/images/million.jpg')
god.save!

aeroplane = Song.create(title: "In The Aeroplane Over The Sea", lyrics: "[Verse 1]
What a beautiful face
I have found in this place
That is circling all round the sun
What a beautiful dream
That could flash on the screen
In a blink of an eye and be gone from me
Soft and sweet
Let me hold it close and keep it here with me, me

[Verse 2]
And one day we will die
And our ashes will fly from the aeroplane over the sea
But for now we are young
Let us lay in the sun
And count every beautiful thing we can see
Love to be
In the arms of all I'm keeping here with me, me

[Verse 3]
What a curious life we have found here tonight
There is music that sounds from the street
There are lights in the clouds
Anna's ghost all around
Hear her voice as it's rolling and ringing through me
Soft and sweet
How the notes all bend and reach above the trees, trees

[Verse 4]
Now how I remember you
How I would push my fingers through
Your mouth to make those muscles move
That made your voice so smooth and sweet
But now we keep where we don't know
All secrets sleep in winter clothes
With one you loved so long ago
Now he don't even know his name

[Verse 5]
What a beautiful face
I have found in this place
That is circling all 'round the sun
And when we meet on a cloud
I'll be laughing out loud
I'll be laughing with everyone I see
Can't believe how strange it is to be anything at all", artist: "Neutral Milk Hotel", author_id: User.first.id)

aeroplane.image = File.open('app/assets/images/aeroplane.jpg')
aeroplane.save!

presidents = Song.create(title: "These Few Presidents", artist: "Why?", lyrics: "[Verse 1]
At your house the smell of our still living human bodies and oven gas
You pray to nothing out loud
Two first names and an ampersand
Embroidered proudly on a kitchen towel
You're a beautiful and violent word
With a skinny neck of a chinese bird
In a fading ancient painting
And if you're in heaven waiting
You made it there fighting
The tightest kite string
In a bad storm with lightning

And now these few presidents
Frowning in my pocket
Can persuade no god
To let me let you talk, oh
These few presidents
Frowning in my pocket
Can persuade no god
To let me let you off

Even though I haven't seen you in years
Yours is a funeral I'd fly to from anywhere

I thought I had a pebble in my sock
I pulled it off and shook out a wasp
It stumbled out lost, and without a pause
Unstung as I was, still I stomped it
I thought, there is no paved street worthy
Of your perfect Scandanavian feet
My crooked chinese fingers groped
The machinery of your throat

And now these few presidents
Frowning in my pocket
Can persuade no god
To let me let you talk, oh
These few presidents
Drowning in my pocket
Can persuade no god
To let me let you off

Even though I haven't seen you in years
Yours is a funeral I'd fly to from anywhere", author_id: User.first.id)

presidents.image = File.open('app/assets/images/presidents.jpg')
presidents.save!

beam = Song.create(artist: "Kanye West", title: "Ultralight Beam", lyrics: "[Intro: Samoria Green & Natalie Green]
(Yes, God)
We don't want no devils in the house, God (Yes, Lord)
We want the lord (Yes, Jesus)
And that's it (Yes, God)
Hallej- hand over Satan (Yes, Jesus)
Jesus praise the Lord (Yes, God)
Hallelujah, God (Yes, God)
We don't want no devils in the house, God (Yes, Lord)
We want the lord (Yes, Jesus)
And that's it (Yes, God)
Hallej- hand over Satan (Yes, Jesus)
Jesus praise the Lord (Yes, God)

[Hook 1: Kanye West & The-Dream]
I'm tryna keep my faith
We on an ultralight beam
We on an ultralight beam
This is a God dream
This is a God dream
This is everything
This is everything
Deliver us serenity
Deliver us peace
Deliver us loving
We know we need it
You know we need it
You know we need it
That's why we need you now, oh, I
Pray for Paris
Pray for the parents
This is a God dream
This is a God dream
This is a God dream
We on an ultralight beam
We on an ultralight beam
This is a God dream
This is a God dream
This is everything
Everything (Thing, thing, thing)

[Chorus: The-Dream & Choir]
I'm tryna keep my faith
But I'm looking for more
Somewhere I can feel safe
And end my holy war
I'm tryna keep my faith

[Verse 1: Kelly Price (Choir)]
So why send oppression not blessings?
Why, oh why'd you do me wrong? (More)
You persecute the weak
Because it makes you feel so strong
(To save) Don't have much strength to fight
So I look to the light
(War) To make these wrongs turn right
Head up high, I look to the light
Hey, 'cause I know that you'll make everything alright
And I know that you'll take good care of your child
Oh, no longer am afraid of the night
'Cause I, I look to the light

[Verse 2: Chance The Rapper]
When they come for you, I will shield your name
I will field their questions, I will feel your pain
No one can judge
They don't, they don't know
They don't know
Foot on the Devil's neck 'til it drifted Pangaea
I'm moving all my family from Chatham to Zambia
Treat the demons just like Pam
I mean I fuck with your friends, but damn, Gina
I been this way since Arthur was anteater
Now they wanna hit me with the woo wap, the bam
Tryna snap photos of familia
My daughter look just like Sia, you can't see her
You can feel the lyrics, the spirit coming in braille
Tubman of the underground, come and follow the trail
I made Sunday Candy, I'm never going to hell
I met Kanye West, I'm never going to fail
He said let's do a good ass job with Chance three
I hear you gotta sell it to snatch the Grammy
Let's make it so free and the bars so hard
That there ain't one gosh darn part you can't tweet
This is my part, nobody else speak
This is my part, nobody else speak
This little light of mine
Glory be to God, yeah
I'ma make sure that they go where they can't go
If they don't wanna ride I'ma still give them raincoats
Know what God said when he made the first rainbow
Just throw this at the end if I'm too late for the intro
Ugh, I'm just having fun with it
You know that a nigga was lost
I laugh in my head
'Cause I bet that my ex looking back like a pillar of salt
Ugh, 'cause they'll flip the script on your ass like Wesley and Spike
You cannot mess with the light
Look at lil' Chano from 79th

[Hook 2: Kanye West]
We on an ultralight beam
We on an ultralight beam
This is a God dream
This is a God dream
This is everything
Everything

[Chorus: The-Dream (Natalie Is Great) & Choir]
Yes, God
Hallelujah
I'm tryna keep my faith
(Yes, Jesus)
But I'm looking for more
Somewhere I can feel safe
And end my holy war", author_id: User.first.id)

beam.image = File.open('app/assets/images/beam.jpg')
beam.save!

ivy = Song.create(artist: "Frank Ocean", title: "Ivy", lyrics: "[Chorus]
I thought that I was dreaming
When you said you loved me
It started from nothing
I had no chance to prepare
I couldn't see you coming
It started from nothing
I could hate you now
It's quite alright to hate me now
When we both know that deep down
The feeling still deep down is good

[Verse 1]
If I could see through walls
I could see you're faking
If you could see my thoughts
You would see our faces
Safe in my rental like an armored truck back then
We didn't give a fuck back then
I ain't a kid no more
We'll never be those kids again
We'd drive to Syd's, had the X6 back then
Back then
No matter what I did
My waves wouldn't dip back then
Everything sucked back then
We were friends

[Chorus]
I thought that I was dreaming
When you said you loved me
It started from nothing
I had no chance to prepare
I couldn't see you coming
It started from nothing
I could hate you now
It's quite alright to hate me now
But we both know that deep down
The feeling still deep down is good

[Verse 2]
In the halls of your hotel
Arm around my shoulder so I could tell
How much I meant to you... meant it sincere back then
We had time to kill back then
You ain't a kid no more
We'll never be those kids again
It's not the same, ivory's illegal
Don't you remember?
I broke your heart last week
You'll probably feel better by the weekend
Still remember, had you going crazy
Screaming my name
The feeling deep down is good

[Chorus]
I thought that I was dreaming
When you said you loved me
It started from nothing
I had no chance to prepare
Couldn't see you coming
And we started from nothing
I could hate you now
It's alright to hate me now
We both know that deep down
The feeling still deep down is good

[Outro]
All the things I didn't mean to say
I didn't mean to do
There were things you didn't need to say
Did you mean to? Me too
I've been dreaming of you
Dreaming of you
I've been dreaming of you
Dreaming of you
I've been dreaming
Dreaming", author_id: User.first.id)

ivy.image = File.open('app/assets/images/blond.jpg')
ivy.save!

dramamine = Song.new(artist: "Modest Mouse", title: "Dramamine", author_id: User.second.id, lyrics:
"[Verse 1]
Travelling swallowing Dramamine
Feeling spaced breathing out Listerine
I'd said what I'd said that I'd tell ya
And that you'd killed the better part of me
If you could just milk it for everything
I've said what I'd said and you know what I mean
But I still can't focus on anything
We kiss on the mouth but still cough down our sleeves

[Verse 2]
Travelling swallowing Dramamine
Look at your face like you're killed in a dream
And you think you've figured out everything
I think I know my geography pretty damn well
You say what you need so you'll get more
If you could just milk it for everything
I've said what I said and you know what I mean
But I can't still focus on anything")

dramamine.image = File.open('app/assets/images/dramamine.jpg')
dramamine.save!

welldressed = Song.new(artist: "Hop Along", title: "Well Dressed", author_id: User.third.id, lyrics:
"[Verse 1]
Well-dressed, but walking
In the wrong direction
Louisiana
My disordered road always led straight back into you

[Hook 1]
Ha ha ha, goes the train
I wanted to leave but here I am again
Louisiana!
I don't remember
I don't remember ever shaking hands with
You-know-who

[Verse 2]
When I was alive
I lived despite the law
Now the law has buried me many, many times
It’s built a freeway all around my bed
I saw it once open its great mouth wide
But it was so full of afflicted houses and buildings
I can't remember what it was saying

[Bridge]
Well-dressed
Well, some of us are, that is
The ones who know how, that is
Some of us are, that is
The ones who know how, that is, that is, that is, that is

[Verse 3]
I read about you and came home
To find my mother
Staring deep into the dark dark web
She started begging me not to
Give my social security number to anybody else
There goes the sound of the freeway

[Hook 2]
Ha ha ha ha ha goes the train
Ha ha ha ha ha goes the train
Well-dressed, but walking
Walking
I don't wanna go back, no no"
)

welldressed.image = File.open('app/assets/images/dressed.jpg')
welldressed.save!

easily = Song.new(artist: "Grimes", title: "Easily", author_id: User.second.id, lyrics:
 "[Verse 1]
Fly through the night, fly like everyone I know
Like everyone, I've been conceited
Fly through the night, doesn't matter where you go
When you leave, I feel so defeated

[Verse 2]
Oh, you don't know where you're from
And you got nowhere to go?
Don't taunt me with your story, cause I've got my own
Never better, just less immediate
You come and go, but I love you so (so)

[Chorus]
Easily, I'm the sweetest damn thing you ever saw
Easily, suddenly, you don't know me at all
Easily, three years later and now you wanna call
Easily-y-y-y yeah yeah yeah yeah

Easily (so, you)
Easily (so, you)
Easily (so, you)
Easily-y-y-y

[Breakdown]
(Oh, no-no-no-no-no)

[Chorus]
Easily, I'm the sweetest damn thing you ever saw
Easily, suddenly, you don't know me at all
Easily, three years later and now you wanna call
Easily-y-y-y")

easily.image = File.open('app/assets/images/easily.jpg')
easily.save!

way = Song.create(artist: "Red Hot Chili Peppers", title: "By The Way", author_id: User.first.id, lyrics:
"[Chorus]
Standing in line to see the show tonight
And there's a light on, heavy glow
By the way I tried to say
I'd be there waiting for
Dani the girl is singing songs to me
Beneath the marquee
Overload

[Verse 1]
Steak knife, card shark
Con job, boot cut
Skin that flick, she's such a little DJ
To get there quick by street but not the freeway
Turn that trick to make a little leeway
Beat that nic but not the way that we play
Dogtown, blood bath
Rib cage, soft tail

[Chorus]
Standing in line to see the show tonight
And there's a light on, heavy glow
By the way I tried to say
I'd be there waiting for

[Verse 2]
Black jack, dope dick
Pawn shop, quick pick
Kiss that dyke, I know you want to hold one
Not on strike but I'm about to bowl one
Bite that mic, I know you never stole one
Girls that like a story, so I told one
Song bird, main line
Cash back, hard top

[Chorus]
Standing in line to see the show tonight
And there's a light on, heavy glow
By the way I tried to say
I'd be there waiting for
Dani the girl is singing songs to me
Beneath the marquee
Oversalt
By the way I tried to say
I'd be there waiting for

[Bridge]
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah

[Chorus]
Standing in line to see the show tonight
And there's a light on, heavy glow
By the way I tried to say
I'd be there waiting for
Dani the girl is singing songs to me
Beneath the marquee
Of her soul
By the way I tried to say
I know you from before
Standing in line to see the show tonight
And there's a light on, heavy glow
By the way I tried to say
I'd be there waiting for")

way.image = File.open('app/assets/images/way.png')
way.save!

annotations = Annotation.create([
    {
      author_id: User.first.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"2kb2n\",\"text\":\"In this album-long ode to Anne Frank, he comments here upon how beautiful Anne was, even at such a young age, and how wonderful it is to share the same planet as she did. Even though the two were separated by decades, they both are humans on the same Earth, a fact that makes his connection to her even more real.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "In The Aeroplane Over The Sea").id,
      start_index: 10,
      end_index: 58,
    },
    {
      id: 109,
      author_id: User.second.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"282c4\",\"text\":\"His life and this relationship seem too good to be true, almost as if he was living in a romance movie.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "In The Aeroplane Over The Sea").id,
      start_index: 94,
      end_index: 147,
    },
    # {
    #   author_id: User.third.id,
    #   score: 0,
    #   description:
    #     "{\"entityMap\":{},\"blocks\":[{\"key\":\"bk8m1\",\"text\":\"He recognizes that every moment is fleeting and that this amazing relationship can be gone at any time. He realizes that he needs to cherish it and appreciate it while it lasts.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
    #   song_id: Song.find_by(title: "In The Aeroplane Over The Sea").id,
    #   start_index: 148,
    #   end_index: 253,
    # },
    {
      author_id: User.third.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"btil2\",\"text\":\"The morning is just like any other morning, i.e. meaningless.  The singer longs for something out of the ordinary\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "Tidal").id,
      start_index: 0,
      end_index: 77,
    },
    {
      author_id: User.first.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"7q2nf\",\"text\":\"Continuing with the theme of finding meaning in life, the singer wishes for something more than just going through the motions. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "Tidal").id,
      start_index: 124,
      end_index: 250,
    },
    {
      id: 107,
      author_id: User.second.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"c239e\",\"text\":\"As humans we work until we are no longer able, usually near between the ages of 60 and 70.  Then we are locked away in retirement homes until we ultimately pass away\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "Tidal").id,
      start_index: 437,
      end_index: 494,
    },
    {
      author_id: User.third.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"349do\",\"text\":\"Praying to nothing implies that the prayers are going unheard, and thus, unanswered.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ad3s7\",\"text\":\"There is nothing left to say. The relationship has gone stale, and there isn’t even anything left to hope for.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "These Few Presidents").id,
      start_index: 80,
      end_index: 108,
    },
    {
      author_id: User.first.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"8efi\",\"text\":\"These lines describe an artifact of your typical married/long-term couple: a kitchen towel (perhaps a wedding gift) with their names embroidered together, connected by an ampersand, as a kitschy symbol of their love. A domesticated relationship.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "These Few Presidents").id,
      start_index: 109,
      end_index: 180,
    },
    {
      author_id: User.third.id,
      score: 0,
      description:
       "{\"entityMap\":{},\"blocks\":[{\"key\":\"78i4e\",\"text\":\"It would’ve been as difficult for the addressed person to make it into heaven as it would’ve been to try to fly a kite in a bad storm.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dgces\",\"text\":\"Clearly, the narrator doesn’t think of this individual as having been a particularly good          person.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"84hne\",\"text\":\"The ‘waiting’ part of the line might imply that the narrator thinks that he has been good enough to deserve heaven, though it might also mean that the addressed is simply waiting for his death\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":73,\"length\":2,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "These Few Presidents").id,
      start_index: 283,
      end_index: 396,
    },
    {
      author_id: User.first.id,
      score: 0,
      description:
       "{\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://genius.com/Kanye-west-jesus-walks-lyrics\",\"url\":\"https://genius.com/Kanye-west-jesus-walks-lyrics\"}}},\"blocks\":[{\"key\":\"8bfm9\",\"text\":\"Kanye calls out to God to rid him of the negative energy preventing him from reaching his full potential.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"am1jb\",\"text\":\"This could resemble Kanye’s inner-child calling out to a higher power. Kanye’s devotion to Christianity and Jesus Christ is mentioned throughout his discography, e.g: “Jesus Walks.”\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":167,\"length\":14,\"key\":0}],\"data\":{}}]}",
      song_id: Song.find_by(title: "Ultralight Beam").id,
      start_index: 39,
      end_index: 434,
    },
    {
      author_id: User.second.id,
      score: 0,
      description:
       "{\"entityMap\":{},\"blocks\":[{\"key\":\"a993e\",\"text\":\"Frank describes a failed relationship. He was overwhelmed when his partner told him they loved him—he wasn’t emotionally prepared. Perhaps, this relationship blossomed from a long time friendship, and here the friend tells him that they intimately love him. It seems he too was once deeply in love earlier in the friendship and has since accepted the friendship as just that. The relationship “started from nothing,” then became more serious but they eventually separated all the same.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bq2ob\",\"text\":\"Although there’s enough negativity between Frank and his ex-lover to fuel a mutual hatred for one another, Frank still insists that the relationship was worthwhile.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "Ivy").id,
      start_index: 9,
      end_index: 290,
    },
    {
      author_id: User.third.id,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"3k3bc\",\"text\":\"The lyrics have both personal and group interpretations. In the personal sense, “your eyes” could refer to a lover’s eyes, with the partners enjoying the mutual adoration of gazing at one another. The group meaning: “we” is the singer and band, and “your” is the audience. The musicians are able to capture the attention of the audience for an exhilarating performance.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "33 \"GOD\"").id,
      start_index: 61,
      end_index: 129
    },
    {
      author_id: User.first.id,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"93ppc\",\"text\":\"The album’s theme of duality is present in this song. The lines look at the two sides of spurned love – the rejected man-“child” and the rejecter – and the pains on both sides that force us to grow as individuals (even if the two have a fling or deep connection). This parallels the maturity from living life without prayers answered. It also parallels the growth in our perspective on music and its creation process – intuiting the presence of a song but not fully discovering its beauty or potential.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "33 \"GOD\"").id,
      start_index: 246,
      end_index: 292,
    },
    {
      author_id: User.second.id,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"dhhgm\",\"text\":\"Taken literally this is the act of going upstairs together, seemingly for tea or a fling. The imagery appeals to the idea that friendships and relationships manifest a higher state of being, or reveal a way to connect on a higher existential level, perhaps toward a kind of transcendence or realization about us and each other.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "33 \"GOD\"").id,
      start_index: 385,
      end_index: 408,
    }
  ])
