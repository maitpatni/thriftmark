INSERT INTO `orders` (`id`, `tracking_number`, `customer_id`, `customer_contact`, `customer_name`, `amount`, `sales_tax`, `paid_total`, `total`, `cancelled_amount`, `language`, `coupon_id`, `parent_id`, `shop_id`, `discount`, `payment_gateway`, `shipping_address`, `billing_address`, `logistics_provider`, `delivery_fee`, `delivery_time`, `order_status`, `payment_status`, `deleted_at`, `created_at`, `updated_at`) VALUES 
(
  1, '20230320840260', 3, '19365141641631', 
  'Customer', 80, 0, 0, 0, 131.60, 'en', 
  NULL, NULL, NULL, 0, 'STRIPE', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 0, 'Express Delivery', 'order-cancelled', 
  'payment-success', NULL, 
  '2023-03-20 04:47:16', '2023-03-20 04:51:04'
), 
(
  2, '20230320294163', 3, '19365141641631', 
  'Customer', 80, 0, 0, 0, 80.00, 'en', 
  NULL, 1, 2, 0, 'STRIPE', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 0, 'Express Delivery', 'order-cancelled', 
  'payment-success', NULL, 
  '2023-03-20 04:47:16', '2023-03-20 04:51:10'
), 
(
  3, '20230320475952', 3, '19365141641631', 
  'Customer', 1040, 20.8, 1110.8, 1110.8, 
  0.00, 'en', NULL, NULL, NULL, 0, 'CASH_ON_DELIVERY', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 50, 'Express Delivery', 'order-out-for-delivery', 
  'payment-cash-on-delivery', NULL, 
  '2023-03-20 04:48:10', '2023-03-20 04:50:38'
), 
(
  4, '20230320561778', 3, '19365141641631', 
  'Customer', 1040, 0, 1040, 1040, 0.00, 
  'en', NULL, 3, 2, 0, 'CASH_ON_DELIVERY', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 0, 'Express Delivery', 'order-processing', 
  'payment-cash-on-delivery', NULL, 
  '2023-03-20 04:48:10', '2023-03-20 04:48:10'
), 
(
  5, '20230320452040', 3, '19365141641631', 
  'Customer', 1350, 27, 1427, 1427, 0.00, 
  'en', NULL, NULL, NULL, 0, 'STRIPE', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 50, 'Express Delivery', 'order-completed', 
  'payment-success', NULL, 
  '2023-03-20 04:48:33', '2023-03-20 04:51:00'
), 
(
  6, '20230320629701', 3, '19365141641631', 
  'Customer', 1350, 0, 1350, 1350, 0.00, 
  'en', NULL, 5, 2, 0, 'STRIPE', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 0, 'Express Delivery', 'order-processing', 
  'payment-success', NULL, 
  '2023-03-20 04:48:33', '2023-03-20 04:48:33'
), 
(
  7, '20230320375159', 3, '19365141641631', 
  'Customer', 2300, 46, 2396, 2396, 0.00, 
  'en', NULL, NULL, NULL, 0, 'CASH_ON_DELIVERY', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 50, 'Express Delivery', 'order-processing', 
  'payment-cash-on-delivery', NULL, 
  '2023-03-20 04:48:59', '2023-03-20 04:48:59'
), 
(
  8, '20230320699706', 3, '19365141641631', 
  'Customer', 2300, 0, 2300, 2300, 0.00, 
  'en', NULL, 7, 2, 0, 'CASH_ON_DELIVERY', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 0, 'Express Delivery', 'order-processing', 
  'payment-cash-on-delivery', NULL, 
  '2023-03-20 04:48:59', '2023-03-20 04:48:59'
), 
(
  9, '20230320716973', 3, '19365141641631', 
  'Customer', 1200, 24, 1274, 1274, 0.00, 
  'en', NULL, NULL, NULL, 0, 'CASH_ON_DELIVERY', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 50, 'Express Delivery', 'order-out-for-delivery', 
  'payment-cash-on-delivery', NULL, 
  '2023-03-20 04:49:31', '2023-03-20 04:50:34'
), 
(
  10, '20230320274223', 3, '19365141641631', 
  'Customer', 1200, 0, 1200, 1200, 0.00, 
  'en', NULL, 9, 2, 0, 'CASH_ON_DELIVERY', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 0, 'Express Delivery', 'order-processing', 
  'payment-cash-on-delivery', NULL, 
  '2023-03-20 04:49:31', '2023-03-20 04:49:31'
), 
(
  11, '20230320801834', 3, '19365141641631', 
  'Customer', 250, 5, 305, 305, 0.00, 
  'en', NULL, NULL, NULL, 0, 'PAYPAL', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 50, 'Express Delivery', 'order-at-local-facility', 
  'payment-success', NULL, 
  '2023-03-20 04:50:08', '2023-03-20 04:50:31'
), 
(
  12, '20230320950826', 3, '19365141641631', 
  'Customer', 250, 0, 250, 250, 0.00, 
  'en', NULL, 11, 2, 0, 'PAYPAL', 
  '{\"zip\": \"10022\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"1780 Angus Road\"}', 
  '{\"zip\": \"10001\", \"city\": \"New York\", \"state\": \"New York\", \"country\": \"US\", \"street_address\": \"260 Terry Lane\"}', 
  NULL, 0, 'Express Delivery', 'order-processing', 
  'payment-success', NULL, 
  '2023-03-20 04:50:08', '2023-03-20 04:50:08'
);