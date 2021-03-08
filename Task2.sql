-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 08, 2021 at 12:08 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Task2`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_reg`
--

CREATE TABLE `tb_reg` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_reg`
--

INSERT INTO `tb_reg` (`id`, `email`, `password`) VALUES
(1, 'li@gmail.com', 'addfff'),
(2, '', ''),
(3, 'litty4ever@gm.com', 'dgfbvf'),
(4, 'litty4ever@gm.com', 'dgfbvf'),
(5, '', ''),
(6, '', ''),
(7, 'sdfg', 'wesdfg'),
(8, 'litty4ever@gm.com', '2ba76fc357c80852441116d50eb9bc31'),
(9, 'litty4ever@gm.com', '2ba76fc357c80852441116d50eb9bc31'),
(10, 'litty4ever@gmail.com', 'a152e841783914146e4bcd4f39100686'),
(11, 'litty4ever@gm.com', '2ba76fc357c80852441116d50eb9bc31'),
(12, 'litty4', '2ba76fc357c80852441116d50eb9bc31'),
(13, 'litty4', '2ba76fc357c80852441116d50eb9bc31'),
(14, 'litty4', '2ba76fc357c80852441116d50eb9bc31'),
(15, 'siju@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(16, 'litty4', '2ba76fc357c80852441116d50eb9bc31'),
(17, 'litty4', '2ba76fc357c80852441116d50eb9bc31'),
(18, 'jaii@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(19, 'dfg', 'e332a76c29654fcb7f6e6b31ced090c7'),
(20, 'df', 'd41d8cd98f00b204e9800998ecf8427e'),
(21, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(22, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(23, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(24, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(25, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(26, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(27, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(28, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(29, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(30, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(31, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(32, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(33, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(34, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(35, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(36, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(37, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(38, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(39, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(40, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(41, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(42, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(43, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(44, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(45, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(46, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(47, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(48, 'litty@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(49, 'mom@gmail.com', 'a152e841783914146e4bcd4f39100686'),
(50, 'anu@gmail.com', 'a152e841783914146e4bcd4f39100686'),
(51, 'binu@gmail.com', 'bcb759b5b8ab63b06295c7434345d7a5'),
(52, 'ansa@gmail.com', 'b6547b68d7b80722eeba3ce5b46f072e');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_reg`
--
ALTER TABLE `tb_reg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_reg`
--
ALTER TABLE `tb_reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
