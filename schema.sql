mysqldump: [Warning] Using a password on the command line interface can be insecure.
-- MySQL dump 10.13  Distrib 9.2.0, for Linux (aarch64)
--
-- Host: localhost    Database: mydatabase
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
mysqldump: Error: 'Access denied; you need (at least one of) the PROCESS privilege(s) for this operation' when trying to dump tablespaces

--
-- Table structure for table `CF`
--

DROP TABLE IF EXISTS `CF`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CF` (
  `cf_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `cfv_id` int DEFAULT NULL,
  `factor_id` int DEFAULT NULL,
  `total_emission` decimal(15,4) DEFAULT NULL,
  `quantity` decimal(15,4) DEFAULT NULL,
  `record_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cf_id`),
  KEY `product_id` (`product_id`),
  KEY `cfv_id` (`cfv_id`),
  KEY `factor_id` (`factor_id`),
  CONSTRAINT `CF_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `CF_ibfk_2` FOREIGN KEY (`cfv_id`) REFERENCES `CFV` (`cfv_id`) ON DELETE CASCADE,
  CONSTRAINT `CF_ibfk_3` FOREIGN KEY (`factor_id`) REFERENCES `EmissionFactor` (`factor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CFV`
--

DROP TABLE IF EXISTS `CFV`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CFV` (
  `cfv_id` int NOT NULL AUTO_INCREMENT,
  `cfv_name` varchar(255) DEFAULT NULL,
  `cfv_scope` varchar(255) DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `start_time` timestamp NULL DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cfv_id`),
  KEY `company_id` (`company_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `CFV_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `Company` (`company_id`) ON DELETE CASCADE,
  CONSTRAINT `CFV_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Company`
--

DROP TABLE IF EXISTS `Company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `industry` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EmissionFactor`
--

DROP TABLE IF EXISTS `EmissionFactor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EmissionFactor` (
  `factor_id` int NOT NULL AUTO_INCREMENT,
  `factor_name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `value` decimal(10,2) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`factor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_type` varchar(100) DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `Product_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `Company` (`company_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Report`
--

DROP TABLE IF EXISTS `Report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Report` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `report_name` varchar(255) DEFAULT NULL,
  `cfv_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`report_id`),
  KEY `cfv_id` (`cfv_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Report_ibfk_1` FOREIGN KEY (`cfv_id`) REFERENCES `CFV` (`cfv_id`) ON DELETE CASCADE,
  CONSTRAINT `Report_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `account` (`account`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `Company` (`company_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-26 13:23:52
