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
INSERT INTO Artist (name) VALUES ('RAWAND'), ('reem');
INSERT INTO Painting (artist_name,painting_name,image_url) VALUES ('reem','SUNSHINE','WWW');

COMMIT;