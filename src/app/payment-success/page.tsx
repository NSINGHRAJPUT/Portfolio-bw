'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Payment Successful! 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>

        {paymentId && (
          <div className="bg-gray-50 p-4 rounded-md mb-6 text-left">
            <p className="text-sm text-gray-600 mb-1">Payment ID:</p>
            <p className="font-mono text-sm text-gray-900 break-all">{paymentId}</p>
          </div>
        )}

        <div className="space-y-3">
          <Link
            href="/payment-demo"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Make Another Payment
          </Link>

          <Link
            href="/"
            className="block w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-6 text-xs text-gray-500 space-y-2">
          <p>✓ Payment confirmed</p>
          <p>✓ A confirmation email will be sent shortly</p>
          <p>✓ You can track your order in your account</p>
        </div>
      </div>
    </div>
  );
}
