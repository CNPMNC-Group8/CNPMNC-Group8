-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 06, 2021 lúc 09:20 AM
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
(2, 'Nguyễn Trần Hoàng', 'hoang1', '123123', '2000-04-11', 'abc@dounets.com', '1636104062815--hoang2.JPG', 'Leader', 'Admin', NULL);

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
  `EFFORT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  MODIFY `EMPLOYEE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 10, 2021 lúc 04:46 PM
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
(6, 'Nguyễn Thị Thu Quyên', 'quyen', '*****', '2000-01-01', 'quyenntt8@uef.edu.vn', '1636529637709--quoi.jpg', 'Leader', 'Admin', NULL),
(7, 'Nguyễn Hoàng Long', 'long', '	*****', '2000-01-01', 'longnt18@uef,edu.vn', '1636529771968--140962701_1784042098431729_6866337980522035164_n.jpg', 'Developer', 'User', NULL);

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
(2, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, 'Hoang Nguyen Tran', 'Hoang Nguyen Tran', '2021-11-07', '2021-11-15', 30, 'Very Important', 'Fix bug UI', '1636276348877--review.docx', 'Hoang Nguyen Tran', 'Hoang Nguyen Tran', 'Hoang Nguyen Tran', '', 'Hoang Nguyen Tran', 1),
(4, 'Bug Fixing', 'In Processing', 'KFC', '', 10, '', '', '2021-11-08', '0000-00-00', 30, 'Very Important', '', '', '4', '', '', '', '', 1),
(5, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '4', '4', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636373568449--review.docx', '4', '4', '4', '4', '4', 1),
(6, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '2', '4', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636373576860--review.docx', '4', '4', '4', '4', '4', 1),
(7, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug UI', 10, '2', '2', '2021-11-08', '2021-11-09', 30, 'Very Important', 'Fix bug UI', '1636376414555--review.docx', '2', '4', '4', '2', '4', 1),
(8, 'Bug Fixing', 'In Processing', 'CYBER', 'Fix bugs UI', 10, '5', '5', '2021-11-10', '2021-10-24', 30, 'Important', 'Fix bugs UI', 'undefined', '7', '7', '5', '5', '6', 1),
(9, 'Bug Fixing', 'In Processing', 'CYBER', 'Fix bugs UI', 10, '5', '5', '2021-11-10', '2021-10-24', 30, 'Important', 'Fix bugs UI', 'undefined', '7', '7', '5', '5', '6', 1),
(10, 'Bug Fixing', 'In Processing', 'KFC', 'Fix bug back-end', 10, '5', '5', '2021-11-10', '0000-00-00', 30, 'Very Important', 'Fix bug back-end descipttion', '1636555409698--review.docx', '5', '5', '5', '7', '6', 1);

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
  MODIFY `EMPLOYEE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
