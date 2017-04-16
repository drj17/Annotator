# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `DELETE /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### SONGS

- `GET /api/songs`
  - Songs index/search
  - accepts `tag_name` query param to list songs by tag
- `POST /api/songs`
- `GET /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`

### Annotation

- `GET /api/songs/:songId/annotations/:annotationId`
- `POST /api/songs/:songId/annotations/`
- `GET /api/songs/:songId/annotations/`
- `DELETE /api/songs/:songId/annotations/:annotationId`
- `GET /api/songs/:songId/annotations/:annotationId/comments` //Possible un-nest here
  - Return all comments for specific annotation

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/songs/:songId/tags`: add tag to song by name
- `DELETE /api/songs/:songId/tags/:tag_name`: remove tag from song by
  name
