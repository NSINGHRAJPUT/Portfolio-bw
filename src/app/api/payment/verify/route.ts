import { NextRequest, NextResponse } from 'next/server';
import { verifyPaymentSignature } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, paymentId, signature } = body;

    // Validate required fields
    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify payment signature
    const isValid = verifyPaymentSignature(orderId, paymentId, signature);

    if (isValid) {
      // Here you can add additional logic like:
      // - Update database with payment status
      // - Send confirmation email
      // - Fulfill the order

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId,
        orderId,
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
