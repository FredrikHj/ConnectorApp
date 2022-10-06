-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 06 okt 2022 kl 16:22
-- Serverversion: 10.4.24-MariaDB
-- PHP-version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `budgetplanner`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `categoryexpenditure`
--

CREATE TABLE `categoryexpenditure` (
  `id` int(11) NOT NULL,
  `name_sv` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `categoryexpenditure`
--

INSERT INTO `categoryexpenditure` (`id`, `name_sv`) VALUES
(1, 'Affärsnätverk'),
(2, 'Badrum/Hall'),
(3, 'Bank Uttag'),
(4, 'Bostad Övrigt'),
(5, 'Bredband, TV & Telefon'),
(6, 'El'),
(7, 'Fika / Lunch / Restaurang'),
(8, 'Förbrukningsartiklar'),
(9, 'Hemelektronik'),
(10, 'Hemförsäkring / Trygghet'),
(11, 'Hemsidor/Webbhotell/Affärsnätverk Övrigt'),
(12, 'Hobbies'),
(13, 'Hyra / Avgifter'),
(14, 'Hämtmat'),
(15, 'ICA Kundkort'),
(16, 'IT Nätverk'),
(17, 'Kablar'),
(18, 'Kläder / Skor'),
(19, 'Kollektivt'),
(20, 'Komponenter'),
(21, 'Kontor'),
(22, 'Kringutrstning'),
(23, 'Kök'),
(24, 'Litteratur'),
(25, 'Lån från eget konto'),
(26, 'Mat/Dryck & Livsmedel Övrigt'),
(27, 'Media/Bok/Kultur Övrigt'),
(28, 'Mobil'),
(29, 'Månadssparande'),
(30, 'Nöjen / Shopping Övrigt'),
(31, 'PC Mediaarbeten'),
(32, 'PC Spel'),
(33, 'PC Säkerhetsprogram'),
(34, 'Riksbyggen'),
(35, 'Kommunikation');

-- --------------------------------------------------------

--
-- Tabellstruktur `categoryincome`
--

CREATE TABLE `categoryincome` (
  `id` int(11) NOT NULL,
  `name_sv` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `categoryincome`
--

INSERT INTO `categoryincome` (`id`, `name_sv`) VALUES
(1, 'Lån från eget konto'),
(2, 'Lön'),
(3, 'Statliga Bidrag'),
(4, 'Tillfällig Överföring mellan konton'),
(5, 'Återbetalning - Skuld till mig'),
(6, 'Återbetalningar'),
(7, 'Övriga Inkomster');

-- --------------------------------------------------------

--
-- Tabellstruktur `paymentoptions`
--

CREATE TABLE `paymentoptions` (
  `id` int(11) NOT NULL,
  `name_sv` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `paymentoptions`
--

INSERT INTO `paymentoptions` (`id`, `name_sv`) VALUES
(1, 'Autogiro'),
(2, 'Bankkort'),
(3, 'Interna Transaktioner'),
(4, 'Klarna'),
(5, 'Kontant'),
(6, 'Månadsöverföring'),
(7, 'Paypal / SEB Mastercard'),
(8, 'Payson'),
(9, 'SEB - Internetbank'),
(10, 'Visakort');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `categoryexpenditure`
--
ALTER TABLE `categoryexpenditure`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `categoryincome`
--
ALTER TABLE `categoryincome`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `paymentoptions`
--
ALTER TABLE `paymentoptions`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
