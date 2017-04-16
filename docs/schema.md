# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
artist      | string    | not null, indexed
archived    | boolean   | not null, default: false

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
score       | integer   | not null, default: 0
description | string    | not null
song_id     | integer   | not null, foreign key (references song), indexed
start_index | integer   | not null
end_index   | integer   | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
author_id   | integer   | not null, foreign key (references users)

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
