'use client';

import { useState } from 'react';
import RazorpayButton from '@/components/RazorpayButton';

export default function PaymentDemoPage() {
  const [amount, setAmount] = useState(100);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'pending' | 'success' | 'failed'>('idle');

  const handleSuccess = (response: any) => {
    console.log('✅ Payment successful:', response);
    setPaymentStatus('success');
    // Optional: Could also redirect here or show success message
  };

  const handleFailure = (error: any) => {
    console.error('❌ Payment failed:', error);
    setPaymentStatus('failed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Payment Demo
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Test Razorpay integration
          </p>
        </div>

        {paymentStatus === 'success' && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-green-600 text-2xl">✓</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Payment Successful!
                </h3>
                <p className="mt-2 text-sm text-green-700">
                  Your payment has been processed successfully.
                </p>
                <button
                  onClick={() => {
                    setPaymentStatus('idle');
                    setAmount(100);
                  }}
                  className="mt-3 text-sm font-medium text-green-600 hover:text-green-500"
                >
                  Make another payment
                </button>
              </div>
            </div>
          </div>
        )}

        {paymentStatus === 'failed' && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-600 text-2xl">✕</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Payment Failed!
                </h3>
                <p className="mt-2 text-sm text-red-700">
                  Your payment could not be processed. Please try again.
                </p>
                <button
                  onClick={() => setPaymentStatus('idle')}
                  className="mt-3 text-sm font-medium text-red-600 hover:text-red-500"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        )}

        {paymentStatus === 'idle' && (
          <div className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount (INR)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                min="1"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Payment Details</h3>
              <dl className="space-y-1">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Amount:</dt>
                  <dd className="text-sm font-medium text-gray-900">₹{amount}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Currency:</dt>
                  <dd className="text-sm font-medium text-gray-900">INR</dd>
                </div>
              </dl>
            </div>

            <RazorpayButton
              amount={amount}
              name="Your Company"
              description="Payment for services"
              buttonText={`Pay ₹${amount}`}
              buttonClassName="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              prefill={{
                name: 'Test User',
                email: 'test@example.com',
                contact: '9999999999',
              }}
              notes={{
                description: 'Demo payment',
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-xs text-yellow-800">
                <strong>Test Cards:</strong><br/>
                Success: 4111 1111 1111 1111<br/>
                CVV: Any 3 digits | Expiry: Any future date
              </p>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-xs text-blue-800">
                <strong>Check Console:</strong> Open browser DevTools (F12) → Console tab to see payment workflow logs
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
