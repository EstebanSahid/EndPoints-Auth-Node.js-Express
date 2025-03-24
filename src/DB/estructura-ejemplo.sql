-- Crear de base de datos
-- Nota: Creamos la tabla si no existe y la usamos, si se hace un cambio de nombre de la base de datos
-- debes cambiar también en el archivo de configuración .env
CREATE DATABASE IF NOT EXISTS `ejemplo_auth`;
USE `ejemplo_auth`;

-- crear la tabla ejemplo_auth.auth
CREATE TABLE IF NOT EXISTS `auth` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insert de datos para la tabla ejemplo_auth
-- Los datos son ficticios, las contraseñas son: 123456 para esac@esteban.com y admin123 para esjo@hotmail.com
INSERT INTO `auth` (`id`, `usuario`, `password`) VALUES
	(2, 'esac@esteban.com', '$2b$05$y8BXojiJXFtp6EH/kbbXgucjTsLcA82MHAqxX1va0B82wBvcjGFG6'),
	(3, 'esjo@hotmail.com', '$2b$05$seoxVYhZmN2rzAycdq.JBuXrY2k3r12qWclXDF0OlawVZCB7Bm7W2');

-- crear la tabla usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `activo` int NOT NULL,
  `edad` int DEFAULT NULL,
  `profesion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insert de datos para la tabla usuarios
INSERT INTO `usuarios` (`id`, `nombre`, `activo`, `edad`, `profesion`) VALUES
	(2, 'esteban sahid', 1, 23, NULL),
	(3, 'steven josue', 1, 25, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
