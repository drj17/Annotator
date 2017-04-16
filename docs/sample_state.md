```js
{
  currentUser: {
    id: 1,
    username: "kdot"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSong: {errors: [
      "title can't be blank",
      "artist can't be blank "
    ]}
  },
  songs: {
    1: {
      title: "POWER",
      body: "No one man should have all that power",
      artist: "Kanye West"
      user_id: 1,
      tags: {
        1: {
          id: 1
          name: "Hip Hop"
        }
      }
    }
  },
  annotations: {
    1: {
      body: "What power means to Kanye"
      author_id: 1,
      lyrics: "No one man should have all that power" //Not sure yet how I am going to select/store the lyrics.  Possible a start/end index would work better
    }
  }
  tagFilters: [1] //filter songs by tag
}
```
