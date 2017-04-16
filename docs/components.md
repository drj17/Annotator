## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home

**NavBarContainer**
 -  Search
 -  Navigation

**SongContainer**
 - Lyrics

**AnnotationContainer**
 - Annotation

**SearchResultsContainer**
 - Search

**TagContainer**
 - Tags

**SongIndex**
 - SongIndexItem


**NewSongContainer**
 - NewSong
 - NewSongButton

**Search**

**NewSong**
 - NewSong

**NewTag**
 - NewTag

**SongSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/song/:songId" | "SongContainer" |
| "/home/tag/:tagId/song/:songId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-song" | "NewSongContainer" |
| "/search" | "Search" |
| "/new-annotation" | "NewAnnotationContainer" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
