# Annotator

[Annotator Live Demo](https://annotator-aa.herokuapp.com/#/)

Annotator is a full-stack web application inspired by Genius. It allows
users to add annotations to lyrics and view other users explanations.

Annotator is built with a Ruby on Rails backend, which utilizes a PostgreSQL
database, and uses React.js with a Redux framework on the frontend.

## Features & Implementation

### Songs

Songs are stored in the database with columns for `id`, `lyrics`, `artist`
and `author_id`.  Any user may view the song lyrics, but to create or delete a song,
users must be signed-in.  Users may only delete songs that they have personally added
to Annotator.  Songs are shown on the homepage, with the top three songs having
a greater presence.

#### Viewing Songs

![index page](http://imgur.com/8H1SCfA)
![song show](http://imgur.com/qWB6qsh)

Users can view song lyrics either by clicking the song on the homepage,
or utilizing the search feature in the upper-left-hand corner of the page.

#### Adding Songs

Users can add songs by clicking the "New Song" button at the top of the page,
below the logo.  Songs require a title, an artist, and lyrics. Optionally,
users can upload album artwork for song that will be saved to Amazon Web Services.

### Annotations

Annotations are stored in the database with columns for `id`, `song_id`, `author_id`,
`score`, `start_index`, and `end_index`.  Any user may view annotations but to create,
edit, or delete annotations the user must be signed in.


#### Viewing Annotations

Lyrics that have associated annotations will show up with a grey highlighting.
Users can click on these lyrics to reveal an annotation on the right hand side of the page.

//img

Users can vote on annotations using the thumbs-up or thumbs-down icons.  Users can also
comment on annotations using the text-field below the annotation.  If the current user
created the annotation, there will be options to edit or delete the annotation.

#### Creating Annotations

Users can create annotations by selecting text that does not already include
an annotation.  This will prompt the user to start creating an annotation if
they are signed-in, otherwise, it will first prompt the user to login.


#### Comments

Comments are stored in the database with columns for `id`, `commentable_id`,
`commentable_type`, and `author_id`.

### Viewing Comments
Both songs and annotations have comment sections, where users can view the
messages let by others, newest first.

### Creating Comments
Both songs and annotations have a text field for users to add their comments.
On submission the comment will automatically be placed at the top of the comment
list
