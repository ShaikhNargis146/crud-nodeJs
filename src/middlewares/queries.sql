DROP DATABASE IF EXISTS devicedb;
CREATE DATABASE devicedb;

CREATE TABLE devices
(
    id SERIAL PRIMARY KEY,
	name  text,
	device_code  text,
	model text,
	status text DEFAULT 'OFF',
	isactive  Boolean DEFAULT TRUE,
	created_at  TIMESTAMPTZ DEFAULT Now(),
	updated_at  TIMESTAMPTZ DEFAULT Now()
);
