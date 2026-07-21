'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function PaymentFailedPage() {
  const searchParams = useSearchParams();
  const reason = searchParams.get('reason');

  const getErrorMessage = (reason: string | null) => {
    switch (reason) {
      case 'invalid_signature':
        return 'Payment signature verification failed';
      case 'missing_details':
        return 'Payment details are missing';
      case 'server_error':
        return 'Server error during payment processing';
      case 'international_cards':
        return 'International cards are not supported at this time';
      case 'user_cancelled':
        return 'You cancelled the payment';
      default:
        return 'Payment could not be completed';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Payment Failed ❌
        </h1>

        <p className="text-gray-600 mb-6">
          {getErrorMessage(reason)}
        </p>

        {reason && (
          <div className="bg-red-50 p-4 rounded-md mb-6 text-left">
            <p className="text-sm text-red-600 mb-1">Error Code:</p>
            <p className="font-mono text-sm text-red-900">{reason}</p>
          </div>
        )}

        <div className="space-y-3">
          <Link
            href="/payment-demo"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Try Again
          </Link>

          <Link
            href="/"
            className="block w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-6 text-xs text-gray-500 space-y-2">
          <p>💳 Payment was not charged</p>
          <p>🔄 You can try again anytime</p>
          <p>📞 Contact support if issue persists</p>
        </div>
      </div>
    </div>
  );
}
