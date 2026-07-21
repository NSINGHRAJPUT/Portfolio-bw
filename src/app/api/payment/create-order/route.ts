import { NextRequest, NextResponse } from 'next/server';
import { razorpayInstance } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR', receipt, notes, redirectUrl } = body;

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Get the origin from request headers (this will be the ngrok URL)
    let origin = request.headers.get('origin') || request.headers.get('x-forwarded-proto') + '://' + request.headers.get('x-forwarded-host');
    
    // Fallback to localhost if no origin header
    if (!origin || origin === 'null') {
      origin = 'http://localhost:3000';
    }

    const paymentRedirectUrl = redirectUrl ? `${origin}${redirectUrl}` : `${origin}/payment-success`;

    // Create Razorpay order
    const options = {
      amount: amount * 100, // Razorpay expects amount in smallest currency unit (paise)
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    };

    console.log('📝 Creating order');
    console.log('   Amount:', amount);

    
    const order = await razorpayInstance.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error: any) {
    console.error('❌ Razorpay order creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}
