CREATE TABLE IF NOT EXISTS addresses (
  id SERIAL,
  cep VARCHAR NOT NULL,
  bairro VARCHAR NOT NULL,
  municipio VARCHAR,
  logradouro VARCHAR
);