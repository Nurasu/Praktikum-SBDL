-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2022 at 10:28 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_mhs_sif`
--

-- --------------------------------------------------------

--
-- Table structure for table `mhs_2021`
--

CREATE TABLE `mhs_2021` (
  `nim` int(11) NOT NULL,
  `nama` char(50) NOT NULL,
  `kdprodi` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mhs_2021`
--

INSERT INTO `mhs_2021` (`nim`, `nama`, `kdprodi`) VALUES
(2020087013, 'RIVALSYACH ADINANTO', 'SIF'),
(2021081001, 'RAJASA RUSMANA', 'SIF'),
(2021081002, 'YESSY', 'SIF'),
(2021081005, 'HAFID ROIHAN', 'SIF'),
(2021081024, 'LOLA ADRIANI PUTRI', 'SIF'),
(2021081025, 'GLORYS', 'SIF');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
