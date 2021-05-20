CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';

GRANT ALL PRIVILEGES ON * . * TO 'usuario'@'localhost';

GRANT ALL PRIVILEGES ON `BDUsuarios` . * TO 'usuario'@'localhost';

FLUSH PRIVILEGES;
