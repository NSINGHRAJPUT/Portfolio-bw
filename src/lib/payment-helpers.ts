/**
 * Payment Helper Functions
 * Utility functions for handling Razorpay payments
 */

export interface PaymentData {
  orderId: string;
  paymentId: string;
  signature: string;
  amount: number;
  currency: string;
}

/**
 * Format amount for display
 */
export function formatAmount(amount: number, currency: string = 'INR'): string {
  const currencySymbols: Record<string, string> = {
    INR: '₹',
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  const symbol = currencySymbols[currency] || currency;
  return `${symbol}${amount.toLocaleString()}`;
}

/**
 * Convert rupees to paise (smallest currency unit)
 */
export function rupeesToPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

/**
 * Convert paise to rupees
 */
export function paiseToRupees(paise: number): number {
  return paise / 100;
}

/**
 * Create payment options for Razorpay
 */
export interface CreatePaymentOptionsParams {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
  name: string;
  description: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, any>;
  theme?: {
    color?: string;
    backdrop_color?: string;
  };
}

export function createPaymentOptions(params: CreatePaymentOptionsParams) {
  return {
    key: params.keyId,
    amount: params.amount,
    currency: params.currency,
    name: params.name,
    description: params.description,
    order_id: params.orderId,
    prefill: params.prefill || {},
    notes: params.notes || {},
    theme: params.theme || {
      color: '#3B82F6',
    },
  };
}

/**
 * Payment status types
 */
export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

/**
 * Get user-friendly payment status message
 */
export function getPaymentStatusMessage(status: PaymentStatus): string {
  const messages: Record<PaymentStatus, string> = {
    [PaymentStatus.PENDING]: 'Payment is being processed...',
    [PaymentStatus.SUCCESS]: 'Payment completed successfully!',
    [PaymentStatus.FAILED]: 'Payment failed. Please try again.',
    [PaymentStatus.CANCELLED]: 'Payment was cancelled.',
  };

  return messages[status];
}

/**
 * Validate payment amount
 */
export function validateAmount(amount: number, min: number = 1): { valid: boolean; error?: string } {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return { valid: false, error: 'Amount must be a valid number' };
  }

  if (amount < min) {
    return { valid: false, error: `Amount must be at least ${formatAmount(min)}` };
  }

  if (amount > 1000000) {
    return { valid: false, error: 'Amount exceeds maximum limit' };
  }

  return { valid: true };
}

/**
 * Validate email for payment
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Indian format)
 */
export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

/**
 * Generate unique receipt ID
 */
export function generateReceiptId(prefix: string = 'receipt'): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}_${timestamp}_${random}`;
}

/**
 * Parse Razorpay error
 */
export interface RazorpayError {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
  metadata: Record<string, any>;
}

export function parseRazorpayError(error: any): string {
  if (error.description) return error.description;
  if (error.error?.description) return error.error.description;
  if (error.message) return error.message;
  return 'An unexpected error occurred';
}

/**
 * Calculate platform fee or tax (if applicable)
 */
export function calculateTotal(
  baseAmount: number,
  taxPercent: number = 0,
  feePercent: number = 0
): {
  baseAmount: number;
  tax: number;
  fee: number;
  total: number;
} {
  const tax = (baseAmount * taxPercent) / 100;
  const fee = (baseAmount * feePercent) / 100;
  const total = baseAmount + tax + fee;

  return {
    baseAmount,
    tax: Math.round(tax * 100) / 100,
    fee: Math.round(fee * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
}

/**
 * Store payment in localStorage (for demo/testing purposes)
 */
export function storePaymentLocally(payment: PaymentData): void {
  try {
    const payments = getLocalPayments();
    payments.push({
      ...payment,
      timestamp: Date.now(),
    });
    localStorage.setItem('razorpay_payments', JSON.stringify(payments));
  } catch (error) {
    console.error('Failed to store payment locally:', error);
  }
}

/**
 * Get locally stored payments
 */
export function getLocalPayments(): any[] {
  try {
    const stored = localStorage.getItem('razorpay_payments');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to retrieve local payments:', error);
    return [];
  }
}

/**
 * Clear locally stored payments
 */
export function clearLocalPayments(): void {
  try {
    localStorage.removeItem('razorpay_payments');
  } catch (error) {
    console.error('Failed to clear local payments:', error);
  }
}
