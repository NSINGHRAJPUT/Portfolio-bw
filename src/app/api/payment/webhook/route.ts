import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Webhook to handle Razorpay payment events
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      console.warn('Missing webhook signature');
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature for security
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    if (webhookSecret) {
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(body)
        .digest('hex');

      if (expectedSignature !== signature) {
        console.error('Invalid webhook signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 400 }
        );
      }
    } else {
      console.warn('RAZORPAY_WEBHOOK_SECRET not configured');
    }

    const event = JSON.parse(body);
    const eventType = event.event;
    const payload = event.payload;

    console.log(`📨 Webhook received: ${eventType}`);

    // Handle different payment events
    switch (eventType) {
      // ============ PAYMENT EVENTS ============
      
      case 'payment.authorized':
        await handlePaymentAuthorized(payload);
        break;

      case 'payment.captured':
        await handlePaymentCaptured(payload);
        break;

      case 'payment.failed':
        await handlePaymentFailed(payload);
        break;

      // ============ ORDER EVENTS ============
      
      case 'order.paid':
        await handleOrderPaid(payload);
        break;

      // ============ REFUND EVENTS ============
      
      case 'refund.created':
        await handleRefundCreated(payload);
        break;

      case 'refund.processed':
        await handleRefundProcessed(payload);
        break;

      case 'refund.failed':
        await handleRefundFailed(payload);
        break;

      // ============ SETTLEMENT EVENTS ============
      
      case 'settlement.processed':
        await handleSettlementProcessed(payload);
        break;

      // Ignore unhandled events gracefully
      default:
        console.log(`⏭️  Unhandled event: ${eventType}`);
    }

    return NextResponse.json({ received: true, event: eventType });
  } catch (error: any) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { error: error.message || 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// ============ PAYMENT EVENT HANDLERS ============

async function handlePaymentAuthorized(payload: any) {
  const payment = payload.payment.entity;
  console.log(`✅ Payment authorized: ${payment.id}`);
  
  // TODO: Add your logic here
  // - Verify payment details
  // - Update transaction status in database
  // - You may NOT charge the customer until capture is confirmed
}

async function handlePaymentCaptured(payload: any) {
  const payment = payload.payment.entity;
  console.log(`💰 Payment captured: ${payment.id}`);
  console.log(`   Amount: ₹${payment.amount / 100}`);
  console.log(`   Order ID: ${payment.order_id}`);
  
  // TODO: Add your logic here
  // - Mark payment as complete in database
  // - Update order status to "Paid"
  // - Send confirmation email to customer
  // - Trigger fulfillment/delivery
  // - Update inventory
  // Example:
  // await db.payment.update({
  //   where: { razorpayId: payment.id },
  //   data: { 
  //     status: 'captured',
  //     capturedAt: new Date()
  //   }
  // });
  // await sendConfirmationEmail(payment.email);
}

async function handlePaymentFailed(payload: any) {
  const payment = payload.payment.entity;
  console.log(`❌ Payment failed: ${payment.id}`);
  console.log(`   Reason: ${payment.description}`);
  
  // TODO: Add your logic here
  // - Mark payment as failed in database
  // - Update order status to "Failed"
  // - Send failure notification to customer
  // - Log for debugging
  // Example:
  // await db.payment.update({
  //   where: { razorpayId: payment.id },
  //   data: { 
  //     status: 'failed',
  //     failureReason: payment.description
  //   }
  // });
  // await notifyCustomerPaymentFailed(payment.email);
}

// ============ ORDER EVENT HANDLERS ============

async function handleOrderPaid(payload: any) {
  const order = payload.order.entity;
  console.log(`📦 Order paid: ${order.id}`);
  console.log(`   Amount: ₹${order.amount / 100}`);
  
  // TODO: Add your logic here
  // - Mark order as paid in database
  // - Trigger order fulfillment
  // - Send order confirmation
  // - Generate invoice
  // Example:
  // await db.order.update({
  //   where: { razorpayOrderId: order.id },
  //   data: { status: 'paid' }
  // });
}

// ============ REFUND EVENT HANDLERS ============

async function handleRefundCreated(payload: any) {
  const refund = payload.refund.entity;
  console.log(`🔄 Refund created: ${refund.id}`);
  console.log(`   Amount: ₹${refund.amount / 100}`);
  
  // TODO: Add your logic here
  // - Log refund initiation
  // - Update payment record
  // - Notify customer
  // Example:
  // await db.refund.create({
  //   data: {
  //     razorpayId: refund.id,
  //     paymentId: refund.payment_id,
  //     amount: refund.amount / 100,
  //     status: 'pending'
  //   }
  // });
}

async function handleRefundProcessed(payload: any) {
  const refund = payload.refund.entity;
  console.log(`✅ Refund processed: ${refund.id}`);
  console.log(`   Amount: ₹${refund.amount / 100}`);
  
  // TODO: Add your logic here
  // - Mark refund as completed
  // - Update payment status
  // - Send refund confirmation email
  // - Update inventory if applicable
  // Example:
  // await db.refund.update({
  //   where: { razorpayId: refund.id },
  //   data: { 
  //     status: 'completed',
  //     processedAt: new Date()
  //   }
  // });
  // await sendRefundConfirmationEmail(refund.receipt);
}

async function handleRefundFailed(payload: any) {
  const refund = payload.refund.entity;
  console.log(`❌ Refund failed: ${refund.id}`);
  
  // TODO: Add your logic here
  // - Mark refund as failed
  // - Alert admin for manual intervention
  // - Send failure notification
  // - Retry logic if applicable
  // Example:
  // await db.refund.update({
  //   where: { razorpayId: refund.id },
  //   data: { 
  //     status: 'failed',
  //     failedAt: new Date()
  //   }
  // });
  // await alertAdminRefundFailed(refund.id);
}

// ============ SETTLEMENT EVENT HANDLERS ============

async function handleSettlementProcessed(payload: any) {
  const settlement = payload.settlement.entity;
  console.log(`💵 Settlement processed: ${settlement.id}`);
  console.log(`   Amount: ₹${settlement.amount / 100}`);
  console.log(`   Period: ${settlement.period}`);
  
  // TODO: Add your logic here (for accounting)
  // - Record settlement in database
  // - Update financial records
  // - Log for reconciliation
  // Example:
  // await db.settlement.create({
  //   data: {
  //     razorpayId: settlement.id,
  //     amount: settlement.amount / 100,
  //     period: settlement.period,
  //     status: settlement.status
  //   }
  // });
}
