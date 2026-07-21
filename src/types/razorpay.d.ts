declare module 'razorpay' {
  interface RazorpayConfig {
    key_id: string;
    key_secret: string;
  }

  interface OrderOptions {
    amount: number;
    currency: string;
    receipt?: string;
    notes?: Record<string, any>;
  }

  interface Order {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: string;
    receipt: string;
    status: string;
    attempts: number;
    notes: Record<string, any>;
    created_at: number;
  }

  interface Orders {
    create(options: OrderOptions): Promise<Order>;
    fetch(orderId: string): Promise<Order>;
    fetchAll(options?: any): Promise<{ items: Order[] }>;
  }

  interface Payment {
    id: string;
    entity: string;
    amount: number;
    currency: string;
    status: string;
    order_id: string;
    method: string;
    captured: boolean;
    email: string;
    contact: string;
    created_at: number;
  }

  interface Payments {
    fetch(paymentId: string): Promise<Payment>;
    capture(paymentId: string, amount: number, currency: string): Promise<Payment>;
    refund(paymentId: string, options?: any): Promise<any>;
  }

  class Razorpay {
    constructor(config: RazorpayConfig);
    orders: Orders;
    payments: Payments;
  }

  export default Razorpay;
}
