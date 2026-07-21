'use client';

import { useState } from 'react';
import Script from 'next/script';
import toast from 'react-hot-toast';

interface RazorpayButtonProps {
  amount: number; // Amount in rupees
  currency?: string;
  name?: string;
  description?: string;
  buttonText?: string;
  buttonClassName?: string;
  onSuccess?: (response: any) => void;
  onFailure?: (error: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, any>;
  redirectUrl?: string; // URL to redirect after success
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayButton({
  amount,
  currency = 'INR',
  name = 'Your Company',
  description = 'Payment',
  buttonText = 'Pay Now',
  buttonClassName = 'px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  onSuccess,
  onFailure,
  prefill,
  notes,
  
}: RazorpayButtonProps) {
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      toast.error('Payment system is loading. Please try again.');
      return;
    }

    setLoading(true);

    try {
      // Step 1: Create order on backend
      console.log('📝 Creating order...');
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency,
          notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order');
      }

      console.log('✅ Order created:', data.orderId);

      // Step 2: Initialize Razorpay checkout
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name,
        description,
        order_id: data.orderId,
        prefill: prefill || {},
        notes: notes || {},
        theme: {
          color: '#3B82F6',
        },
        // Success handler
        handler: async function (response: any) {
          try {
            console.log('🔄 Verifying payment...');
            console.log('Payment ID:', response.razorpay_payment_id);
            console.log('Order ID:', response.razorpay_order_id);

            // Step 3: Verify payment on backend
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyResponse.ok && verifyData.success) {
              console.log('✅ Payment verified successfully!');
              toast.success('Payment successful!');
              
              // Call success callback if provided
              onSuccess?.(response);
              
              // Redirect after successful payment
              
            } else {
              throw new Error(verifyData.error || 'Payment verification failed');
            }
          } catch (error: any) {
            console.error('❌ Payment verification error:', error);
            toast.error(error.message || 'Payment verification failed');
            onFailure?.(error);
            setLoading(false);
          }
        },
        
        // Modal dismiss handler
        modal: {
          ondismiss: function () {
            console.log('⚠️ Payment modal dismissed by user');
            setLoading(false);
            toast.error('Payment cancelled');
            onFailure?.({ code: 'CANCELLED', description: 'Payment cancelled by user' });
          },
        },
      };

      console.log('🔓 Opening Razorpay checkout...');
      const razorpay = new window.Razorpay(options);

      // Payment failed handler
      razorpay.on('payment.failed', function (response: any) {
        console.error('❌ Payment failed:', response.error);
        const errorDescription = response.error.description || 'Payment failed';
        toast.error(errorDescription);
        
        // Redirect to failure page if it's an international card error
        if (errorDescription.includes('International')) {
          setTimeout(() => {
            window.location.href = '/payment-failed?reason=international_cards';
          }, 1000);
        }
        
        onFailure?.(response.error);
        setLoading(false);
      });

      razorpay.open();
    } catch (error: any) {
      console.error('❌ Payment error:', error);
      toast.error(error.message || 'Payment initialization failed');
      onFailure?.(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => {
          console.log('✅ Razorpay script loaded');
          setRazorpayLoaded(true);
        }}
        onError={() => {
          console.error('❌ Failed to load Razorpay script');
          toast.error('Failed to load payment system');
          setRazorpayLoaded(false);
        }}
      />
      <button
        onClick={handlePayment}
        disabled={loading || !razorpayLoaded}
        className={buttonClassName}
      >
        {loading ? 'Processing...' : buttonText}
      </button>
    </>
  );
}
