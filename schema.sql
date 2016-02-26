
\connect pgintro;

CREATE TABLE cities (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  country varchar(255),
  rating integer,
  CHECK (rating>0 AND rating<10)
  );