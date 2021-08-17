BEGIN;

CREATE TABLE Artist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200)
);
CREATE TABLE Painting(
    id SERIAL PRIMARY KEY,
    artist_id INTEGER REFERENCES Artist(id),
    painting_name VARCHAR(200),
    image_url TEXT
);
INSERT INTO Artist (name) VALUES ('RAWAND');
COMMIT;