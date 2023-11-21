<?php


namespace Marvel\Events;

use Illuminate\Contracts\Queue\ShouldQueue;
use Marvel\Database\Models\Order;

class OrderCreated implements ShouldQueue
{
    /**
     * @var Order
     */

    public Order $order;
    public array $invoiceData;

    /**
     * Create a new event instance.
     *
     * @param Order $order
     */
    public function __construct(Order $order, array $invoiceData)
    {
        $this->order = $order;
        $this->invoiceData = $invoiceData;
    }
}
