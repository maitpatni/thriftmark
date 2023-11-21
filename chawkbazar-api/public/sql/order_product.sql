INSERT INTO
	`order_product` (
		`id`,
		`order_id`,
		`product_id`,
		`variation_option_id`,
		`order_quantity`,
		`unit_price`,
		`subtotal`,
		`deleted_at`,
		`created_at`,
		`updated_at`
	)
VALUES
	(
		1,
		10,
		28,
		NULL,
		'2',
		10,
		20,
		NULL,
		'2023-05-30 17:06:05',
		'2023-05-30 17:06:07'
	),
	(
		2,
		10,
		20,
		NULL,
		'6',
		5,
		30,
		NULL,
		'2023-05-30 17:06:05',
		'2023-05-30 17:06:07'
	);