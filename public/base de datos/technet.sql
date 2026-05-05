CREATE DATABASE IF NOT EXISTS escuela_ventas_internet
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE escuela_ventas_internet;

CREATE TABLE IF NOT EXISTS planes (
  id_plan INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL,
  velocidad_mbps INT NOT NULL,
  precio_mensual DECIMAL(10,2) NOT NULL,
  descripcion VARCHAR(200),
  activo TINYINT(1) NOT NULL DEFAULT 1,
  CHECK (velocidad_mbps > 0),
  CHECK (precio_mensual >= 0)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS solicitudes (
  id_solicitud INT AUTO_INCREMENT PRIMARY KEY,

  id_plan INT NOT NULL,              -- plan elegido en la página (FK)
  nombre_completo VARCHAR(120) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  email VARCHAR(120) NOT NULL,
  direccion_servicio VARCHAR(180) NOT NULL,
  mensaje_adicional VARCHAR(300),

  fecha_envio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  estado ENUM('pendiente','contactado','aprobado','rechazado') NOT NULL DEFAULT 'pendiente',

  FOREIGN KEY (id_plan) REFERENCES planes(id_plan)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB;

INSERT INTO planes (nombre, velocidad_mbps, precio_mensual, descripcion) VALUES
('Básico 30', 30, 249.00, 'Navegación y redes sociales'),
('Hogar 60', 60, 349.00, 'Streaming HD y videollamadas'),
('Familiar 100', 100, 449.00, 'Conexión estable para varios dispositivos'),
('Gamer 200', 200, 599.00, 'Baja latencia para juegos online'),
('Ultra 500', 500, 999.00, 'Alta velocidad para trabajo y streaming 4K');

INSERT INTO solicitudes
(id_plan, nombre_completo, telefono, email, direccion_servicio, mensaje_adicional, estado) VALUES
(1, 'Ana Pérez López', '555-1010', 'ana@gmail.com', 'Calle 1 #10, Col. Centro', 'Me pueden instalar por la mañana', 'pendiente'),
(2, 'Luis Gómez Rivera', '555-2020', 'luis@gmail.com', 'Av. Principal #22, Col. Norte', '¿Tienen promoción por primer mes?', 'contactado'),
(3, 'María Torres Díaz', '555-3030', 'maria@gmail.com', 'Calle 8 #15, Col. Sur', 'Trabajo desde casa, necesito estabilidad', 'aprobado'),
(4, 'Carlos Hernández Silva', '555-4040', 'carlos@gmail.com', 'Blvd. Central #99, Col. Jardines', 'Me interesa plan gamer por latencia', 'pendiente'),
(5, 'Sofía Ramírez Ortega', '555-5050', 'sofia@gmail.com', 'Calle 4 #77, Col. Vista', '¿Instalan los fines de semana?', 'pendiente');

SELECT id_plan, nombre, velocidad_mbps, precio_mensual
FROM planes
WHERE activo = 1
ORDER BY precio_mensual ASC;

SELECT s.id_solicitud, s.nombre_completo, s.telefono, s.email,
       p.nombre AS plan_elegido, p.velocidad_mbps, p.precio_mensual,
       s.estado, s.fecha_envio
FROM solicitudes s
JOIN planes p ON s.id_plan = p.id_plan
ORDER BY s.fecha_envio DESC;

SELECT estado, COUNT(*) AS total_solicitudes
FROM solicitudes
GROUP BY estado;