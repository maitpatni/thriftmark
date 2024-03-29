INSERT INTO `address` (
        `id`,
        `title`,
        `type`,
        `default`,
        `address`,
        `customer_id`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        'Billing',
        'billing',
        0,
        '{\"zip\": \"99614\", \"city\": \"Kipnuk\", \"state\": \"AK\", \"country\": \"United States\", \"street_address\": \"2231 Kidd Avenue\"}',
        1,
        '2021-08-18 13:18:03',
        '2021-08-18 13:18:03'
    ),
    (
        2,
        'Shipping',
        'shipping',
        0,
        '{\"zip\": \"40391\", \"city\": \"Winchester\", \"state\": \"KY\", \"country\": \"United States\", \"street_address\": \"2148  Straford Park\"}',
        1,
        '2021-08-18 13:18:12',
        '2021-08-18 13:18:12'
    ),
    (
        3,
        'Billing',
        'billing',
        0,
        '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}',
        3,
        '2021-11-25 06:23:04',
        '2021-11-25 06:23:04'
    ),
    (
        4,
        'Shipping',
        'shipping',
        0,
        '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}',
        3,
        '2021-11-25 06:23:28',
        '2021-11-25 06:23:28'
    );