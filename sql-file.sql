CREATE TABLE `assistants`.`assistant` (
  `assistant_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `address` varchar(25) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `department` varchar(15) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `country` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`assistant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `assistants`.`assistant` VALUES 
(1,'Mohammad', 'Zabiullah', 'xabis00099@gmail.com', 8624008511, 'Kharadi', 'SDE 3', 'Software', '100000', 'Pune', 'India'),
(2,'Rakesh', 'Sharma', 'acb@gmail.com', 3468637823, 'Ajni', 'Software Engg', 'Computer', 1000000,'Nagpur','India');
