CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users` (`id`, `username`, `code`, `is_admin`, `created_at`, `updated_at`) VALUES ('1', 'dpearson', '0000', '1', '2019-04-06 10:03:57', '2019-04-06 10:03:57'),
('2', 'json', '3434', '1', '2019-04-06 10:03:57', '2019-04-06 10:03:57'),
('3', 'tmiko', '1111', '1', '2019-04-06 10:05:48', '2019-04-06 10:05:48'),
('4', 'wmeyer', '2222', '0', '2019-04-06 10:06:13', '2019-04-06 10:06:13');
