-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: server_configuration_db
-- ------------------------------------------------------
-- Server version	8.0.33

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

--
-- Table structure for table `cpu_inventory`
--

DROP TABLE IF EXISTS `cpu_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpu_inventory` (
  `cpu_id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `cpu_name` varchar(50) NOT NULL,
  `num_cores` int DEFAULT NULL,
  `num_threads` int DEFAULT NULL,
  `clock_speed` float DEFAULT NULL,
  `turbo_boost_freq` float DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `setup_cost` decimal(10,2) DEFAULT NULL,
  `price_unit` varchar(20) NOT NULL,
  `payment_frequency` varchar(20) NOT NULL,
  `units_left` int NOT NULL,
  `delivery_time` int DEFAULT NULL,
  `special_offer_active` tinyint(1) DEFAULT '0',
  `disk_limit` varchar(50) NOT NULL,
  `imagesPath` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cpu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpu_inventory`
--

LOCK TABLES `cpu_inventory` WRITE;
/*!40000 ALTER TABLE `cpu_inventory` DISABLE KEYS */;
INSERT INTO `cpu_inventory` VALUES (1,'Ryzen','5 5600x',6,12,3.7,4.6,48.00,21.00,'30','monatlitch',10,10,1,'4','/assets/images/ryzen.png'),(2,'Ryzen','5 5900X',12,24,3.7,4.6,48.00,21.00,'30','monatlitch',1,2,1,'4','/assets/images/ryzen.png'),(3,'EPYC','7443P',24,48,2.8,4.8,128.00,0.00,'80','monatlitch',25,9,0,'10','/assets/images/epyc.webp'),(4,'EPYC','9654P',96,192,2.4,3.35,128.00,0.00,'80','monatlitch',0,4,0,'10','/assets/images/epyc.webp');
/*!40000 ALTER TABLE `cpu_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disk_inventory`
--

DROP TABLE IF EXISTS `disk_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disk_inventory` (
  `disk_id` int NOT NULL AUTO_INCREMENT,
  `cpu_id` int NOT NULL,
  `form_factor` varchar(400) DEFAULT NULL,
  `storage_size` int NOT NULL,
  `storage_unit` varchar(10) NOT NULL,
  `has_raid_configuration` tinyint(1) DEFAULT '0',
  `is_premium` tinyint(1) DEFAULT '0',
  `price` decimal(10,2) NOT NULL,
  `price_unit` varchar(10) NOT NULL,
  `payment_frequency` varchar(20) NOT NULL,
  `units_left` int NOT NULL,
  `imagesPath` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`disk_id`),
  KEY `cpu_id` (`cpu_id`),
  CONSTRAINT `disk_inventory_ibfk_1` FOREIGN KEY (`cpu_id`) REFERENCES `cpu_inventory` (`cpu_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disk_inventory`
--

LOCK TABLES `disk_inventory` WRITE;
/*!40000 ALTER TABLE `disk_inventory` DISABLE KEYS */;
INSERT INTO `disk_inventory` VALUES (1,1,'Kein Raid',960,'GB',0,0,34.00,'€','4€ monatlitch',4,'/assets/images/hdd.png'),(2,1,'Kein Raid',1920,'GB',0,1,34.00,'€','7€ monatlitch',4,'/assets/images/hdd.png'),(3,1,'Kein Raid',3840,'GB',0,1,34.00,'€','12€ monatlitch',4,'/assets/images/hdd.png'),(4,1,'Kein Raid',960,'GB',0,0,34.00,'€','5€ monatlitch',2,'/assets/images/ssd.png'),(5,1,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,1,34.00,'€','10€ monatlitch',2,'/assets/images/ssd.png'),(6,1,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,1,34.00,'€','20€ monatlitch',2,'/assets/images/ssd.png'),(7,2,'Kein Raid',960,'GB',0,0,34.00,'€','4€ monatlitch',4,'/assets/images/hdd.png'),(8,2,'Kein Raid',1920,'GB',0,1,34.00,'€','7€ monatlitch',4,'/assets/images/hdd.png'),(9,2,'Kein Raid',3840,'GB',0,1,34.00,'€','12€ monatlitch',4,'/assets/images/hdd.png'),(10,2,'Kein Raid',960,'GB',0,0,34.00,'€','5€ monatlitch',2,'/assets/images/ssd.png'),(11,2,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,1,34.00,'€','10€ monatlitch',2,'/assets/images/ssd.png'),(12,2,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,1,34.00,'€','20€ monatlitch',2,'/assets/images/ssd.png'),(13,3,'Kein Raid',960,'GB',0,0,34.00,'€','20€ monatlitch',10,'/assets/images/hdd.png'),(14,3,'Kein Raid',1920,'GB',0,0,34.00,'€','7€ monatlitch',10,'/assets/images/hdd.png'),(15,3,'Kein Raid',3840,'GB',0,0,34.00,'€','12€ monatlitch',10,'/assets/images/hdd.png'),(16,3,'Kein Raid',960,'GB',0,0,34.00,'€','5€ monatlitch',2,'/assets/images/ssd.png'),(17,3,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,0,34.00,'€','10€ monatlitch',2,'/assets/images/ssd.png'),(18,3,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,1,34.00,'€','20€ monatlitch',2,'/assets/images/ssd.png'),(19,4,'Kein Raid',960,'GB',0,0,34.00,'€','20€ monatlitch',10,'/assets/images/hdd.png'),(20,4,'Kein Raid',1920,'GB',0,0,34.00,'€','7€ monatlitch',10,'/assets/images/hdd.png'),(21,4,'Kein Raid',3840,'GB',0,0,34.00,'€','12€ monatlitch',10,'/assets/images/hdd.png'),(22,4,'Kein Raid',960,'GB',0,0,34.00,'€','5€ monatlitch',2,'/assets/images/ssd.png'),(23,4,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,0,34.00,'€','10€ monatlitch',2,'/assets/images/ssd.png'),(24,4,'Kein Raid,Reid 0,Reid 1,Reid 2',1920,'GB',1,0,34.00,'€','20€ monatlitch',2,'/assets/images/ssd.png');
/*!40000 ALTER TABLE `disk_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `cpu` varchar(50) NOT NULL,
  `disks` varchar(100) NOT NULL,
  `ram` varchar(50) NOT NULL,
  `os` varchar(50) NOT NULL,
  `uplink` varchar(50) DEFAULT NULL,
  `setup_cost` decimal(10,2) NOT NULL,
  `monthly_cost` decimal(10,2) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `discount_level` varchar(50) NOT NULL,
  `contract_type` varchar(50) NOT NULL,
  `contract_duration` int NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `comments` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `os_inventory`
--

DROP TABLE IF EXISTS `os_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `os_inventory` (
  `os_id` int NOT NULL AUTO_INCREMENT,
  `os_name` varchar(50) NOT NULL,
  `os_version` varchar(50) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `price_unit` varchar(10) DEFAULT NULL,
  `units_left` int NOT NULL,
  `imagesPath` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`os_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `os_inventory`
--

LOCK TABLES `os_inventory` WRITE;
/*!40000 ALTER TABLE `os_inventory` DISABLE KEYS */;
INSERT INTO `os_inventory` VALUES (1,'CentOs','CentOs 8,CentOs 7',34.00,'23',12,'/assets/images/centos.png'),(2,'Debian','Debian11,Debian10',50.00,'23',12,'/assets/images/debian.png'),(3,'Free Bsd','FreeBSD 13.0,FreeBSD 12.2',50.00,'23',12,'/assets/images/freebsd.png'),(4,'Ubuntu','Ubuntu 20.04,Ubuntu 18.04',50.00,'23',12,'/assets/images/ubuntu.png'),(5,'OpenSUSE','OpenSUSE Leap 15.3,OpenSUSE Leap 15.2',50.00,'23',12,'/assets/images/opensuse.png'),(6,'Proxmox','Proxmox VE 7.3,Proxmox VE 6.4',50.00,'23',12,'/assets/images/proxmox.png'),(7,'VMware','VMware ESXi 7.0,VMware ESXi 6.7',50.00,'23',12,'/assets/images/vmware.png'),(8,'Windows','Windows Server 2022,Windows Server 2019',50.00,'23',12,'/assets/images/windows.png');
/*!40000 ALTER TABLE `os_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram_inventory`
--

DROP TABLE IF EXISTS `ram_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram_inventory` (
  `ram_id` int NOT NULL AUTO_INCREMENT,
  `cpu_id` int NOT NULL,
  `ram_name` varchar(50) NOT NULL,
  `storage_size` int NOT NULL,
  `storage_unit` varchar(10) NOT NULL,
  `storage_configuration` varchar(20) DEFAULT NULL,
  `is_ECC` tinyint(1) DEFAULT '0',
  `price` decimal(10,2) NOT NULL,
  `price_unit` varchar(10) NOT NULL,
  `payment_frequency` varchar(20) NOT NULL,
  `units_left` int NOT NULL,
  `imagesPath` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ram_id`),
  KEY `cpu_id` (`cpu_id`),
  CONSTRAINT `ram_inventory_ibfk_1` FOREIGN KEY (`cpu_id`) REFERENCES `cpu_inventory` (`cpu_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram_inventory`
--

LOCK TABLES `ram_inventory` WRITE;
/*!40000 ALTER TABLE `ram_inventory` DISABLE KEYS */;
INSERT INTO `ram_inventory` VALUES (1,1,'64GB DDR4-3200',64,'GB','DDR4-3200',0,28.00,'€','40 € monatlitch',10,'/assets/images/ram.png'),(2,1,'128GB DDR4-3200',128,'GB','DDR4-3200',0,68.00,'€','80 € monatlitch',10,'/assets/images/ram.png'),(3,1,'64GB DDR4-3200 ECC',64,'GB','DDR4-3200 ECC',1,36.00,'€','50 € monatlitch',3,'/assets/images/ram.png'),(4,1,'128GB DDR4-3200 ECC',128,'GB','DDR4-3200 ECC',1,88.00,'€','100 € monatlitch',10,'/assets/images/ram.png'),(5,2,'64GB DDR4-3200',64,'GB','DDR4-3200',0,28.00,'€','40 € monatlitch',10,'/assets/images/ram.png'),(6,2,'128GB DDR4-3200',128,'GB','DDR4-3200',0,68.00,'€','80 € monatlitch',10,'/assets/images/ram.png'),(7,2,'64GB DDR4-3200 ECC',64,'GB','DDR4-3200 ECC',1,36.00,'€','50 € monatlitch',10,'/assets/images/ram.png'),(8,2,'128GB DDR4-3200 ECC',128,'GB','DDR4-3200 ECC',1,88.00,'€','100 € monatlitch',10,'/assets/images/ram.png'),(9,3,'64GB DDR4-3200 reg.ECC',64,'GB','DDR4-3200reg.ECC',1,88.00,'€','100 € monatlitch',10,'/assets/images/ram.png'),(10,3,'128GB DDR4-3200 reg.ECC',128,'GB','DDR4-3200reg.ECC',1,88.00,'€','100 € monatlitch',10,'/assets/images/ram.png'),(11,3,'256GB DDR4-3200 reg.ECC',256,'GB','DDR4-3200reg.ECC',1,88.00,'€','100 € monatlitch',10,'/assets/images/ram.png'),(12,3,'512GB DDR4-3200 reg.ECC',512,'GB','DDR4-3200reg.ECC',1,88.00,'€','100 € monatlitch',10,'/assets/images/ram.png'),(13,4,'384GB DDR5-4800 reg.ECC',384,'GB','DDR5-4800reg.ECC',1,88.00,'€','100 € monatlitch',6,'/assets/images/ram.png'),(14,4,'768GB DDR5-4800 reg.ECC',768,'GB','DDR5-4800reg.ECC',1,88.00,'€','100 € monatlitch',12,'/assets/images/ram.png'),(15,4,'1536GB DDR5-4800 reg.ECC',1536,'GB','DDR5-4800reg.ECC',1,88.00,'€','100 € monatlitch',24,'/assets/images/ram.png');
/*!40000 ALTER TABLE `ram_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uplink_inventory`
--

DROP TABLE IF EXISTS `uplink_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uplink_inventory` (
  `uplink_id` int NOT NULL AUTO_INCREMENT,
  `transfer_speed` varchar(10) NOT NULL,
  `data_capacity` varchar(100) NOT NULL,
  `data_unit` varchar(10) NOT NULL,
  `price` varchar(100) NOT NULL,
  `price_unit` varchar(10) NOT NULL,
  `units_left` int NOT NULL,
  `limit` int NOT NULL,
  PRIMARY KEY (`uplink_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uplink_inventory`
--

LOCK TABLES `uplink_inventory` WRITE;
/*!40000 ALTER TABLE `uplink_inventory` DISABLE KEYS */;
INSERT INTO `uplink_inventory` VALUES (1,'1Gbit/s','50TB-22€,','2','22.00','10',20,2),(2,'10Gbit/s','10TB-22€,20TB-39€,50TB-69€','2','22,39,69','10',20,2);
/*!40000 ALTER TABLE `uplink_inventory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-03 22:05:11
