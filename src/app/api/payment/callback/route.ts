import { NextRequest, NextResponse } from 'next/server';
import { verifyPaymentSignature } from '@/lib/razorpay';

/**
 * This endpoint handles Razorpay's server-side redirect after payment
 * Razorpay sends payment details here via POST redirect
 */
export async function POST(request: NextRequest) {
  try {
    console.log('🔄 Payment callback received from Razorpay');
    
    const body = await request.formData();
    
    // Razorpay sends these as form data
    const razorpayOrderId = body.get('razorpay_order_id') as string;
    const razorpayPaymentId = body.get('razorpay_payment_id') as string;
    const razorpaySignature = body.get('razorpay_signature') as string;

    console.log('Order ID:', razorpayOrderId);
    console.log('Payment ID:', razorpayPaymentId);

    // Validate required fields
    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      console.error('❌ Missing payment details');
      return NextResponse.redirect(
        `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-failed?reason=missing_details`
      );
    }

    // Verify payment signature
    const isValid = verifyPaymentSignature(
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    );

    if (isValid) {
      console.log('✅ Payment verified successfully via callback');
      // Redirect to success page with payment ID
      return NextResponse.redirect(
        `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-success?payment_id=${razorpayPaymentId}&status=success`
      );
    } else {
      console.error('❌ Invalid payment signature');
      return NextResponse.redirect(
        `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-failed?reason=invalid_signature`
      );
    }
  } catch (error: any) {
    console.error('❌ Callback processing error:', error);
    return NextResponse.redirect(
      `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-failed?reason=server_error`
    );
  }
}
