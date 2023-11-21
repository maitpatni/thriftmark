<?php

namespace Marvel\Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class SettingsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // run your app seeder
        DB::table('settings')->insert([
            'options' => json_encode([
                "seo" => [
                    "ogImage" => null,
                    "ogTitle" => null,
                    "metaTags" => null,
                    "metaTitle" => null,
                    "canonicalUrl" => null,
                    "ogDescription" => null,
                    "twitterHandle" => null,
                    "metaDescription" => null,
                    "twitterCardType" => null
                ],
                "logo" => [
                    "id" => "258",
                    "original" => "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/258/logo-final2x.png",
                    "thumbnail" => "https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/258/conversions/logo-final2x-thumbnail.jpg"
                ],
                "useOtp" => false,
                "currency" => "USD",
                "taxClass" => "1",
                "siteTitle" => "ChawkBazar",
                "deliveryTime" => [
                    [
                        "title" => "Express Delivery",
                        "description" => "90 min express delivery"
                    ],
                    [
                        "title" => "Morning",
                        "description" => "8.00 AM - 11.00 AM"
                    ],
                    [
                        "title" => "Noon",
                        "description" => "11.00 AM - 2.00 PM"
                    ],
                    [
                        "title" => "Afternoon",
                        "description" => "2.00 PM - 5.00 PM"
                    ],
                    [
                        "title" => "Evening",
                        "description" => "5.00 PM - 8.00 PM"
                    ]
                ],
                "freeShipping" => false,
                "signupPoints" => 100,
                "siteSubtitle" => "Your next ecommerce",
                "useGoogleMap" => true,
                "shippingClass" => "1",
                "contactDetails" => [
                    "contact" => "+129290122122",
                    "socials" => [
                        [
                            "url" => "https://www.facebook.com/",
                            "icon" => "FacebookIcon"
                        ],
                        [
                            "url" => "https://twitter.com/home",
                            "icon" => "TwitterIcon"
                        ],
                        [
                            "url" => null,
                            "icon" => "InstagramIcon"
                        ]
                    ],
                    "website" => "https://redq.io",
                    "location" => [
                        "lat" => 42.9585979,
                        "lng" => -76.9087202,
                        "zip" => null,
                        "city" => null,
                        "state" => "NY",
                        "country" => "United States",
                        "formattedAddress" => "NY State Thruway, New York, USA"
                    ]
                ],
                "paymentGateway" => [
                    [
                        "name" => "stripe",
                        "title" => "Stripe"
                    ]
                ],
                "currencyOptions" => [
                    "formation" => "en-US",
                    "fractions" => 2
                ],
                "isProductReview" => false,
                "useEnableGateway" => true,
                "useCashOnDelivery" => true,
                "freeShippingAmount" => 0,
                "minimumOrderAmount" => 0,
                "useMustVerifyEmail" => false,
                "maximumQuestionLimit" => 5,
                "currencyToWalletRatio" => 3,
                "defaultPaymentGateway" => "stripe",
                "StripeCardOnly" => false,
                "guestCheckout" => true,
                ...$this->getSmsEmailEvents(),
                "server_info" => server_environment_info(),
                "useAi"         => true,
                "defaultAi" => "openai",
                "maxShopDistance" => 1000,
                "mailchimpSubscribeText" => "Thank you for subscribing",
            ]),
            "language" => "en",
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now(),
        ]);
    }

    /**
     * The function returns an array of SMS and email events with their corresponding recipients and
     * event types.
     * 
     * @return array An array containing events for SMS and email notifications for different user
     * roles (admin, vendor, and customer) related to order status changes, refunds, payments, creating
     * questions, creating reviews, and answering questions.
     */
    private function getSmsEmailEvents(): array
    {
        return [
            "smsEvent" => [
                "admin" => [
                    "statusChangeOrder" => true,
                    "refundOrder" => true,
                    "paymentOrder" => true
                ],
                "vendor" => [
                    "statusChangeOrder" => true,
                    "paymentOrder" => true,
                    "refundOrder" => true
                ],
                "customer" => [
                    "statusChangeOrder" => true,
                    "refundOrder" => true,
                    "paymentOrder" => true
                ]
            ],
            "emailEvent" => [
                "admin" => [
                    "statusChangeOrder" => true,
                    "refundOrder" => true,
                    "paymentOrder" => true
                ],
                "vendor" => [
                    "createQuestion" => true,
                    "statusChangeOrder" => true,
                    "refundOrder" => true,
                    "paymentOrder" => true,
                    "createReview" => true
                ],
                "customer" => [
                    "statusChangeOrder" => true,
                    "refundOrder" => true,
                    "paymentOrder" => true,
                    "answerQuestion" => true
                ]
            ],
        ];
    }
}
