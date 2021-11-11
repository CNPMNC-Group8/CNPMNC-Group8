-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 11, 2021 lúc 03:12 PM
-- Phiên bản máy phục vụ: 10.4.20-MariaDB
-- Phiên bản PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `group8_sql`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `staff`
--

CREATE TABLE `staff` (
  `EMPLOYEE_ID` int(11) NOT NULL,
  `FULL_NAME` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USER_NAME` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PASSWORD` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BIRTH_DAY` date DEFAULT NULL,
  `EMAIL` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IMAGE` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `POSITION` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ROLL` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DELETE_FLAG` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `staff`
--

INSERT INTO `staff` (`EMPLOYEE_ID`, `FULL_NAME`, `USER_NAME`, `PASSWORD`, `BIRTH_DAY`, `EMAIL`, `IMAGE`, `POSITION`, `ROLL`, `DELETE_FLAG`) VALUES
(5, 'Trần Tấn Quới', 'quoi', '*****', '2000-01-01', 'quoitt18@uef.edu.vn', '1636529496359--quoi.jpg', 'Developer', 'User', NULL),
(6, 'Nguyễn Thị Thu Quyên', 'quyen', '*****', '0000-00-00', 'quyenntt8@uef.edu.vn', '1636592694987--Quyen.jpg', 'Leader', 'Admin', NULL),
(7, 'Nguyễn Hoàng Long', 'long', '	*****', '2000-01-01', 'longnt18@uef,edu.vn', '1636529771968--140962701_1784042098431729_6866337980522035164_n.jpg', 'Developer', 'User', NULL),
(9, 'Phút Phan', 'phut', '*****', '2000-01-01', 'phutp18@uef.edu.vn', '1636569257813--Phut.jpg', 'Leader', 'Admin', NULL),
(10, 'Nguyễn Trần Hoàng', 'hoang', '*****', '2000-04-11', 'hoangnt18@uef.edu.vn', '1636569360773--hoang1-removebg-preview.jpg', 'Developer', 'Admin', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task`
--

CREATE TABLE `task` (
  `TASK_ID` int(11) NOT NULL,
  `JOB` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `STATUS` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CATEGORY` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TITLE` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PROGRESS` int(11) DEFAULT NULL,
  `ASSIGNEE` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `REGISTER_USER` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `START_DATE` date DEFAULT NULL,
  `END_DATE` date DEFAULT NULL,
  `EFFORT` int(11) DEFAULT NULL,
  `IMPORTANT` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DESCRIPTION` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FILE` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CONFIRMATION` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IMPLEMENTATION` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TEST` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `APPROVAL` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FINISH` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `STEP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `task`
--

INSERT INTO `task` (`TASK_ID`, `JOB`, `STATUS`, `CATEGORY`, `TITLE`, `PROGRESS`, `ASSIGNEE`, `REGISTER_USER`, `START_DATE`, `END_DATE`, `EFFORT`, `IMPORTANT`, `DESCRIPTION`, `FILE`, `CONFIRMATION`, `IMPLEMENTATION`, `TEST`, `APPROVAL`, `FINISH`, `STEP`) VALUES
(5, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '4', '4', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636373568449--review.docx', '4', '4', '4', '4', '4', 1),
(6, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '2', '4', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636373576860--review.docx', '4', '4', '4', '4', '4', 1),
(7, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '2', '2', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636376414555--review.docx', '2', '4', '4', '2', '4', 1),
(8, 'Bug Fixing', 'In Processing', 'CYBER', 'Fix bugs UI', 10, '5', '5', '2021-11-10', '2021-10-24', 30, 'Important', 'Fix bugs UI', 'undefined', '7', '7', '5', '5', '6', 1),
(9, 'Bug Fixing', 'In Processing', 'CYBER', 'Fix bugs UI', 10, '5', '5', '2021-11-10', '2021-10-24', 30, 'Important', 'Fix bugs UI', 'undefined', '7', '7', '5', '5', '6', 1),
(10, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug back-end', 10, '5', '5', '2021-11-10', '0000-00-00', 30, 'Very Important', 'Fix bug back-end descipttion', '1636555409698--review.docx', '5', '5', '5', '7', '6', 1),
(11, 'Documentation', 'In Processing', 'KFC', 'Document of webiste', 10, '5', '5', '2021-11-11', '2021-11-25', 30, 'Very Important', 'Document of the website to use', '1636592660109--review.docx', '6', '7', '9', '10', '9', 1),
(12, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-11-06', 30, 'Very Important', 'Develop System and result', '1636611557471--review.docx', '6', '7', '9', '10', '5', 1),
(13, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-11-10', 30, 'Very Important', 'Develop System and result', '1636611563180--review.docx', '6', '7', '9', '10', '5', 1),
(14, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-10-15', 30, 'Very Important', 'Develop System and result', '1636611566765--review.docx', '6', '7', '9', '10', '5', 1),
(15, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611573768--review.docx', '6', '7', '9', '10', '5', 1),
(16, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611574191--review.docx', '6', '7', '9', '10', '5', 1),
(17, 'Develope', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611574352--review.docx', '6', '7', '9', '10', '5', 1),
(18, 'New Request', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611578220--review.docx', '6', '7', '9', '10', '5', 1),
(19, 'New Request', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-25', 30, 'Very Important', 'Develop System and result', '1636611578525--review.docx', '6', '7', '9', '10', '5', 1),
(20, 'Research', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-10', 30, 'Very Important', 'Develop System and result', '1636611582714--review.docx', '6', '7', '9', '10', '5', 1),
(21, 'Research', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-28', 30, 'Very Important', 'Develop System and result', '1636611586219--review.docx', '6', '7', '9', '10', '5', 1),
(22, 'Set Up Environments', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-28', 30, 'Very Important', 'Develop System and result', '1636611588921--review.docx', '6', '7', '9', '10', '5', 1),
(23, 'Testing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611594456--review.docx', '6', '7', '9', '10', '5', 1),
(24, 'Training', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611598681--review.docx', '6', '7', '9', '10', '5', 1),
(25, 'Training', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611598824--review.docx', '6', '7', '9', '10', '5', 1),
(26, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Very Important', 'Develop System and result', '1636611601472--review.docx', '6', '7', '9', '10', '5', 1),
(27, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611604071--review.docx', '6', '7', '9', '10', '5', 1),
(28, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611605364--review.docx', '6', '7', '9', '10', '5', 1),
(29, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611605505--review.docx', '6', '7', '9', '10', '5', 1),
(30, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611607695--review.docx', '6', '7', '9', '10', '5', 1),
(31, 'Bug Fixing', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611607850--review.docx', '6', '7', '9', '10', '5', 1),
(32, 'Bug Fixing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611609877--review.docx', '6', '7', '9', '10', '5', 1),
(33, 'Bug Fixing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611610015--review.docx', '6', '7', '9', '10', '5', 1),
(34, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611614429--review.docx', '6', '7', '9', '10', '5', 1),
(35, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611614567--review.docx', '6', '7', '9', '10', '5', 1),
(36, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611617076--review.docx', '6', '7', '9', '10', '5', 1),
(37, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Low', 'Develop System and result', '1636611617227--review.docx', '6', '7', '9', '10', '5', 1),
(38, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611619497--review.docx', '6', '7', '9', '10', '5', 1),
(39, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611619640--review.docx', '6', '7', '9', '10', '5', 1),
(40, 'Reporting', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611621545--review.docx', '6', '7', '9', '10', '5', 1),
(41, 'Reporting', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611621696--review.docx', '6', '7', '9', '10', '5', 1),
(42, 'Modification', 'In Processing', 'KFC', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611624248--review.docx', '6', '7', '9', '10', '5', 1),
(43, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611632123--review.docx', '6', '7', '9', '10', '5', 1),
(44, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611632272--review.docx', '6', '7', '9', '10', '5', 1),
(45, 'Reporting', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611635989--review.docx', '6', '7', '9', '10', '5', 1),
(46, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639232--review.docx', '6', '7', '9', '10', '5', 1),
(47, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639361--review.docx', '6', '7', '9', '10', '5', 1),
(48, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639496--review.docx', '6', '7', '9', '10', '5', 1),
(49, 'Testing', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611639644--review.docx', '6', '7', '9', '10', '5', 1),
(50, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611643760--review.docx', '6', '7', '9', '10', '5', 1),
(51, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611643905--review.docx', '6', '7', '9', '10', '5', 1),
(52, 'Documentation', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611646496--review.docx', '6', '7', '9', '10', '5', 1),
(53, 'Documentation', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611646639--review.docx', '6', '7', '9', '10', '5', 1),
(54, 'Training', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611649044--review.docx', '6', '7', '9', '10', '5', 1),
(55, 'Training', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611649183--review.docx', '6', '7', '9', '10', '5', 1),
(56, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611651893--review.docx', '6', '7', '9', '10', '5', 1),
(57, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611652037--review.docx', '6', '7', '9', '10', '5', 1),
(58, 'Modification', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611652196--review.docx', '6', '7', '9', '10', '5', 1),
(59, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611654656--review.docx', '6', '7', '9', '10', '5', 1),
(60, 'Support', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611654797--review.docx', '6', '7', '9', '10', '5', 1),
(61, 'Set Up Environments', 'In Processing', 'CYBER', 'Develop System', 10, '5', '5', '2021-11-11', '2021-12-12', 30, 'Normal', 'Develop System and result', '1636611657290--review.docx', '6', '7', '9', '10', '5', 1),
(62, 'Documentation', 'In Processing', 'CYBER', 'Wirite doccument', 10, '5', '5', '2021-11-11', '2021-11-18', 30, 'Important', 'Wirite doccument', '1636616680149--review.docx', '6', '7', '9', '10', '5', 1),
(63, 'Documentation', 'In Processing', 'CYBER', 'Wirite doccument', 10, '5', '5', '2021-11-11', '2021-11-18', 30, 'Important', 'Wirite doccument', '1636616687701--review.docx', '6', '7', '9', '10', '5', 1),
(64, 'Documentation', 'In Processing', 'CYBER', 'Wirite doccument', 10, '5', '5', '2021-11-11', '2021-11-18', 30, 'Important', 'Wirite doccument', '1636616692672--review.docx', '6', '7', '9', '10', '5', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`EMPLOYEE_ID`);

--
-- Chỉ mục cho bảng `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`TASK_ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `staff`
--
ALTER TABLE `staff`
  MODIFY `EMPLOYEE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
