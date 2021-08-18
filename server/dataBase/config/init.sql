BEGIN;
DROP TABLE IF EXISTs Artist,Painting;
CREATE TABLE Artist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE
);
CREATE TABLE Painting(
    id SERIAL PRIMARY KEY,
    artist_name VARCHAR REFERENCES Artist(name),
    painting_name VARCHAR(200),
    image_url TEXT
);

COMMIT;