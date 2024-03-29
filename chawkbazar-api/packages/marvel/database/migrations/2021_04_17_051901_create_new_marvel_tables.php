<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Marvel\Enums\WithdrawStatus;

class CreateNewMarvelTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('variation_options', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('price');
            $table->string('sale_price')->nullable();
            $table->unsignedBigInteger('quantity');
            $table->boolean('is_disable')->default(false);
            $table->string('sku')->nullable();
            $table->json('options');
            $table->unsignedBigInteger('product_id')->nullable();
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('icon')->nullable();
            $table->json('image')->nullable();
            $table->text('details')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('product_tag', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('tag_id');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
        Schema::table('products', function (Blueprint $table) {
            $table->float('min_price')->after('sale_price')->nullable();
            $table->float('max_price')->after('min_price')->nullable();
            $table->json('video')->after('image')->nullable();
        });

        Schema::table('order_product', function (Blueprint $table) {
            $table->unsignedBigInteger('variation_option_id')->after('product_id')->nullable();
            $table->foreign('variation_option_id')->references('id')->on('variation_options');
        });

        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('owner_id');
            $table->foreign('owner_id')->references('id')->on('users');
            $table->string('name')->nullable();
            $table->string('slug')->nullable();
            $table->text('description')->nullable();
            $table->json('cover_image')->nullable();
            $table->json('logo')->nullable();
            $table->boolean('is_active')->default(false);
            $table->json('address')->nullable();
            $table->json('settings')->nullable();
            $table->timestamps();
        });
        Schema::create('balances', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shop_id');
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
            $table->double('admin_commission_rate')->nullable();
            $table->double('total_earnings')->default(0);
            $table->double('withdrawn_amount')->default(0);
            $table->double('current_balance')->default(0);
            $table->json('payment_info')->nullable();
            $table->timestamps();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('shop_id')->nullable();
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
        });

        Schema::create('user_shop', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('shop_id');
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('category_shop', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shop_id');
            $table->unsignedBigInteger('category_id');
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });

        Schema::create('withdraws', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shop_id');
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
            $table->float('amount');
            $table->string('payment_method')->nullable();
            $table->enum('status', WithdrawStatus::getValues())->default(WithdrawStatus::PENDING);
            $table->text('details')->nullable();
            $table->text('note')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('attributes', function (Blueprint $table) {
            $table->unsignedBigInteger('shop_id')->nullable()->after('name');
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
        });

        Schema::table('attribute_values', function (Blueprint $table) {
            $table->string('meta')->after('value')->nullable();
        });

        Schema::table('types', function (Blueprint $table) {
            $table->json('settings')->after('name')->nullable();
        });

        Schema::table('products', function (Blueprint $table) {
            $table->unsignedBigInteger('shop_id')->after('price')->nullable();
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
        });
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('shop_id')->after('coupon_id')->nullable();
            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
            $table->unsignedBigInteger('parent_id')->after('coupon_id')->nullable();
            $table->foreign('parent_id')->references('id')->on('orders')->onDelete('cascade');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->string('password')->nullable()->change();
        });

        Schema::create('providers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('provider_user_id');
            $table->string('provider');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('type_id');
            $table->text('title');
            $table->text('description')->nullable();
            $table->json('image')->nullable();
            $table->timestamps();
            $table->foreign('type_id')->references('id')->on('types')->onDelete('cascade');
        });

        Schema::create('payment_gateways', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('customer_id');
            $table->string('gateway_name')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });


        Schema::create('payment_methods', function (Blueprint $table) {
            $table->id();
            $table->string('method_key')->unique();
            $table->unsignedBigInteger('payment_gateway_id')->nullable();
            $table->boolean('default_card')->nullable()->default(false);
            $table->string('fingerprint')->unique();
            $table->string('owner_name')->nullable();
            $table->string('network')->nullable();
            $table->string('type')->nullable();
            $table->string('last4')->nullable();
            $table->string('expires')->nullable();
            $table->string('origin')->nullable();
            $table->string('verification_check')->nullable();
            $table->foreign('payment_gateway_id')->references('id')->on('payment_gateways')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });


        Schema::create('payment_intents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id')->nullable();
            $table->string('tracking_number')->nullable();
            $table->string('payment_gateway')->nullable();
            $table->json('payment_intent_info')->nullable();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('withdraws');
        Schema::dropIfExists('store_settings');
        Schema::dropIfExists('variation_options');
        Schema::dropIfExists('product_tag');
        Schema::dropIfExists('tags');
        Schema::dropIfExists('payment_gateways');
        Schema::dropIfExists('cards');
        Schema::dropIfExists('payment_intents');
    }
}
