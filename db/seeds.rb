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
User.create(username: "demo_user", password: "password")
User.create(username: "david_janas", password: "appacademy")
User.create(username: "kanye_west", password: "iamagod")

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

dna = Song.create(title: "DNA", lyrics: "[Verse 1]
I got, I got, I got, I got
Loyalty, got royalty inside my DNA
Cocaine quarter piece, got war and peace inside my DNA
I got power, poison, pain and joy inside my DNA
I got hustle though, ambition, flow, inside my DNA
I was born like this, since one like this
Immaculate conception
I transform like this, perform like this
Was Yeshua's new weapon
I don't contemplate, I meditate, then off your fucking head
This that put-the-kids-to-bed
This that I got, I got, I got, I got
Realness, I just kill shit 'cause it's in my DNA
I got millions, I got riches buildin' in my DNA
I got dark, I got evil, that rot inside my DNA
I got off, I got troublesome, heart inside my DNA
I just win again, then win again like Wimbledon, I serve
Yeah, that's him again, the sound that engine in is like a bird
You see fireworks and Corvette tire skrrt the boulevard
I know how you work, I know just who you are
See, you's a, you's a, you's a—
Bitch, your hormones prolly switch inside your DNA
Problem is, all that sucker shit inside your DNA
Daddy prolly snitched, heritage inside your DNA
Backbone don't exist, born outside a jellyfish, I gauge
See, my pedigree most definitely don't tolerate the front
Shit I've been through prolly offend you
This is Paula's oldest son
I know murder, conviction
Burners, boosters, burglars, ballers, dead, redemption
Scholars, fathers dead with kids
And I wish I was fed forgiveness
Yeah, yeah, yeah, yeah, soldier's DNA
Born inside the beast
My expertise checked out in second grade
When I was 9, on-sale motel, we didn't have nowhere to stay
At 29, I've done so well, hit cartwheel in my estate
And I'm gon' shine like I'm supposed to
Antisocial, extrovert
And excellent mean the extra work
And absentness what the fuck you heard
And pessimists never struck my nerve
And Nazareth gonna plead his case
The reason my power's here on earth
Salute the truth, when the prophet say

[Bridge]
I got loyalty, got royalty inside my DNA
This is why I say that hip hop has done more damage to young African Americans than racism in recent years
I got loyalty, got royalty inside my DNA
I live a better life, I'm rollin' several dice, fuck your life
I got loyalty, got royalty inside my DNA
I live a better, fuck your life
5, 4, 3, 2, 1
This is my heritage, all I'm inheritin'
Money and power, the mecca of marriages

[Verse 2]
Tell me somethin'
You mothafuckas can't tell me nothin'
I'd rather die than to listen to you
My DNA not for imitation
Your DNA an abomination
This how it is when you're in the Matrix
Dodgin' bullets, reapin' what you sow
And stackin' up the footage, livin' on the go
And sleepin' in a villa
Sippin' from a Grammy and walkin' in the buildin'
Diamond in the ceilin', marble on the floors
Beach inside the window, peekin' out the window
Baby in the pool, godfather goals
Only Lord knows, I've been goin' hammer
Dodgin' paparazzi, freakin' through the cameras
Eat at Four Daughters, Brock wearin' sandals
Yoga on a Monday, stretchin' to Nirvana
Watchin' all the snakes, curvin' all the fakes
Phone never on, I don't conversate
I don't compromise, I just penetrate
Sex, money, murder—these are the breaks
These are the times, level number 9
Look up in the sky, 10 is on the way
Sentence on the way, killings on the way
Motherfucker, I got winners on the way
You ain't shit without a body on your belt
You ain't shit without a ticket on your plate
You ain't sick enough to pull it on yourself
You ain't rich enough to hit the lot and skate
Tell me when destruction gonna be my fate
Gonna be your fate, gonna be our faith
Peace to the world, let it rotate
Sex, money, murder—our DNA

[Outro]
DNA
Gimme some ganja, gimme some ganja
DNA
Gimme some ganja
Real nigga in my DNA
Ain't no ho inside my DNA
Drippin' gold inside my DNA
Power shows in my DNA
DNA
Gimme some ganja, gimme some ganja
Real nigga in my DNA
Ain't no ho inside my DNA", artist: "Kendrick Lamar", author_id: User.first.id)

dna.image = File.open('app/assets/images/damn.jpg')
dna.save!

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
    {
      author_id: User.third.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"bk8m1\",\"text\":\"He recognizes that every moment is fleeting and that this amazing relationship can be gone at any time. He realizes that he needs to cherish it and appreciate it while it lasts.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "In The Aeroplane Over The Sea").id,
      start_index: 148,
      end_index: 253,
    },
    {
      author_id: User.second.id,
      score: 0,
      description:
        "{\"entityMap\":{},\"blocks\":[{\"key\":\"19rb5\",\"text\":\"The “royalty” in Kendrick’s DNA represents his pride as a black individual and his respect for his heritage. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
      song_id: Song.find_by(title: "DNA").id,
      start_index: 10,
      end_index: 36,
    },
    {
      author_id: User.first.id,
      score: 0,
      description:
        "{\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"http://www.vatican.va/archive/ccc_css/archive/catechism/p122a3p2.htm\",\"rel\":\"nofollow\",\"url\":\"http://www.vatican.va/archive/ccc_css/archive/catechism/p122a3p2.htm\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://jesusisajew.org/YESHUA.php\",\"rel\":\"nofollow\",\"url\":\"https://jesusisajew.org/YESHUA.php\"}},\"2\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://genius.com/artists/Dj-khaled\",\"url\":\"https://genius.com/artists/Dj-khaled\"}},\"3\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://genius.com/10139753\",\"url\":\"https://genius.com/10139753\"}}},\"blocks\":[{\"key\":\"aj6ti\",\"text\":\"Kendrick compares his birth to the Immaculate Conception of the Virgin Mary. Catholics believe that the Virgin Mary was free from sin since she had to give birth to Christ.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":35,\"length\":21,\"key\":0}],\"data\":{}},{\"key\":\"3r5h5\",\"text\":\"Yeshua (יֵשׁוּעַ) is Hebrew for Jesus. Kendrick discussed the return of Yeshua in his guest feature on DJ Khaled’s “Holy Key”\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":6,\"key\":1},{\"offset\":103,\"length\":9,\"key\":2},{\"offset\":115,\"length\":10,\"key\":3}],\"data\":{}}]}",
      song_id: Song.find_by(title: "DNA").id,
      start_index: 226,
      end_index: 354,
    },
    {
      author_id: User.third.id,
      score: 0,
      description:
       "{\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://genius.com/Kendrick-lamar-ronald-reagan-era-his-evils-lyrics\",\"url\":\"https://genius.com/Kendrick-lamar-ronald-reagan-era-his-evils-lyrics\"}},\"1\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"http://www.drugpolicy.org/blog/nancy-reagans-role-disastrous-war-drugs\",\"rel\":\"nofollow\",\"url\":\"http://www.drugpolicy.org/blog/nancy-reagans-role-disastrous-war-drugs\"}}},\"blocks\":[{\"key\":\"6p5p\",\"text\":\"Kendrick was born in 1987 during the tail end of the Ronald Reagan Era and witnessed the destruction that The War on Drugs brought upon his community. While Reagan was President, he passed aggressive legislation that saw the number of people behind bars for nonviolent drug law violations increase from 50,000 in 1980 to more than 400,000 by 1997.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":53,\"length\":17,\"key\":0},{\"offset\":289,\"length\":58,\"key\":1}],\"data\":{}}]}",
      song_id: Song.find_by(title: "DNA").id,
      start_index: 72,
      end_index: 126,
    },
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
      song_id: Song.find_by(title: "Ultralight Beam").id,
      start_index: 9,
      end_index: 290,
    }
  ])
