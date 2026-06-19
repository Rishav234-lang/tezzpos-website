export type BillingPeriod = 'monthly' | 'yearly' | 'three-years'

export type PlanId = 'starter' | 'growth' | 'main-course' | 'enterprise'

export type Plan = {
  id: PlanId
  name: string
  tagline: string
  description: string
  prices: Record<BillingPeriod, number>
  deviceAccess: string
  highlights: string[]
  recommended?: boolean
}

export type ComparisonFeature = {
  name: string
  category: string
  availability: Record<PlanId, boolean>
}

export const billingOptions: { id: BillingPeriod; label: string; suffix: string }[] = [
  { id: 'monthly', label: 'Monthly', suffix: 'month' },
  { id: 'yearly', label: 'Yearly', suffix: 'year' },
  { id: 'three-years', label: '3 Years', suffix: '3 years' },
]

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Small cafes & new restaurants',
    description: 'Core billing, orders, and reports to get your restaurant running on day one.',
    prices: { monthly: 199, yearly: 1999, 'three-years': 5499 },
    deviceAccess: '1 desktop device',
    highlights: [
      'Takeaway orders & billing',
      'Order & sales reports',
      'Menu management',
      'Customer details',
      'Shift & user history',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Growing restaurants',
    description: 'Full dine-in operations with tables, floors, and complete inventory control.',
    prices: { monthly: 399, yearly: 4499, 'three-years': 12999 },
    deviceAccess: '1 desktop device',
    highlights: [
      'Everything in Starter',
      'Table, floor & section management',
      'Inventory & stock tracking',
      'Vendor & purchase management',
      'Low stock alerts',
    ],
    recommended: true,
  },
  {
    id: 'main-course',
    name: 'Main Course',
    tagline: 'Busy & multi-outlet restaurants',
    description: 'Kitchen workflows, staff roles, and multi-device access for high-volume service.',
    prices: { monthly: 599, yearly: 6499, 'three-years': 18999 },
    deviceAccess: 'Mobile + desktop devices',
    highlights: [
      'Everything in Growth',
      'Kitchen display system (KDS)',
      'Live order status & KOT',
      'Staff roles & waiter management',
      'Priority support & auto backup',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Chains & franchises',
    description: 'Multi-outlet control, QR self-ordering, centralized reporting, and dedicated onboarding for scale.',
    prices: { monthly: 999, yearly: 11499, 'three-years': 33999 },
    deviceAccess: 'Unlimited devices',
    highlights: [
      'Everything in Main Course',
      'QR scan ordering system (digital menu & self-order)',
      'Multi-outlet dashboard',
      'Centralized analytics',
      'Dedicated account manager',
    ],
  },
]

export const comparisonFeatures: ComparisonFeature[] = [
  { name: 'Desktop device login', category: 'Core', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Takeaway orders & billing', category: 'Core', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Order & takeaway history', category: 'Core', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Customer details', category: 'Core', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Menu management', category: 'Core', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Sales & daily reports', category: 'Reports', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Admin dashboard', category: 'Reports', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Shift & user history', category: 'Reports', availability: { starter: true, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Table management', category: 'Operations', availability: { starter: false, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Floor & section management', category: 'Operations', availability: { starter: false, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Inventory & stock management', category: 'Inventory', availability: { starter: false, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Vendor & purchase management', category: 'Inventory', availability: { starter: false, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Low stock alerts', category: 'Inventory', availability: { starter: false, growth: true, 'main-course': true, enterprise: true } },
  { name: 'Mobile + desktop login', category: 'Devices', availability: { starter: false, growth: false, 'main-course': true, enterprise: true } },
  { name: 'Kitchen display system (KDS)', category: 'Kitchen', availability: { starter: false, growth: false, 'main-course': true, enterprise: true } },
  { name: 'Live order status', category: 'Kitchen', availability: { starter: false, growth: false, 'main-course': true, enterprise: true } },
  { name: 'Staff roles & waiter management', category: 'Staff', availability: { starter: false, growth: false, 'main-course': true, enterprise: true } },
  { name: 'Advanced reports', category: 'Reports', availability: { starter: false, growth: false, 'main-course': true, enterprise: true } },
  { name: 'Priority support', category: 'Support', availability: { starter: false, growth: false, 'main-course': true, enterprise: true } },
  { name: 'Automatic data backup', category: 'Support', availability: { starter: false, growth: false, 'main-course': true, enterprise: true } },
  { name: 'Multi-outlet dashboard', category: 'Enterprise', availability: { starter: false, growth: false, 'main-course': false, enterprise: true } },
  { name: 'QR scan ordering system (digital menu & self-order)', category: 'Enterprise', availability: { starter: false, growth: false, 'main-course': false, enterprise: true } },
  { name: 'Centralized analytics', category: 'Enterprise', availability: { starter: false, growth: false, 'main-course': false, enterprise: true } },
  { name: 'Dedicated account manager', category: 'Enterprise', availability: { starter: false, growth: false, 'main-course': false, enterprise: true } },
]

export const planNotes = [
  'All plans work fully offline.',
  '1 year of free support & updates included.',
  'Manual backup on Starter & Growth; automatic on Main Course & Enterprise.',
  'Add more devices or services anytime.',
]

export function formatPrice(amount: number) {
  return amount.toLocaleString('en-IN')
}

export function getYearlySavings(plan: Plan) {
  const monthlyTotal = plan.prices.monthly * 12
  const yearly = plan.prices.yearly
  if (monthlyTotal <= yearly) return 0
  return Math.round(((monthlyTotal - yearly) / monthlyTotal) * 100)
}

export type LifetimePlanId = 'lifetime' | 'lifetime-plus'

export type LifetimePlan = {
  id: LifetimePlanId
  name: string
  tagline: string
  regularPrice: number
  offerPrice: number
  offerNote: string
  perks: string[]
  features: string[]
  accent: {
    border: string
    headerBg: string
    headerText: string
    badge: string
    check: string
    checkBg: string
  }
}

export const lifetimePlans: LifetimePlan[] = [
  {
    id: 'lifetime',
    name: 'Lifetime',
    tagline: 'Small cafes & new restaurants',
    regularPrice: 25000,
    offerPrice: 19999,
    offerNote: 'Limited launch offer · first 25 customers',
    perks: [
      '1 desktop device login',
      '100% offline software',
      '1 year free service & support',
    ],
    features: [
      '1 Desktop Device Login',
      'Takeaway Orders',
      'Billing (Invoices)',
      'Order History',
      'Takeaways History',
      'Customer Details',
      'Reports (Sales)',
      'Reports (Operations)',
      'Reports (Financials)',
      'Daily Report / Day End Reports',
      'Shift History',
      'Menu Management',
    ],
    accent: {
      border: 'border-emerald-200',
      headerBg: 'bg-emerald-700',
      headerText: 'text-white',
      badge: 'bg-emerald-100 text-emerald-800',
      check: 'text-emerald-700',
      checkBg: 'bg-emerald-50',
    },
  },
  {
    id: 'lifetime-plus',
    name: 'Lifetime Plus',
    tagline: 'Growing & full-service restaurants',
    regularPrice: 30000,
    offerPrice: 24999,
    offerNote: 'Limited launch offer · first 25 customers',
    perks: [
      '1 desktop device login',
      '100% offline software',
      '1 year free service & support',
    ],
    features: [
      'Takeaways Orders',
      'Table Management',
      'Floor Management',
      'Floor Sections Management',
      'Billing (Invoices)',
      'Order History',
      'Takeaways History',
      'Inventory / Stock Management',
      'Vendor Details Management',
      'Purchase History',
      'Stock In / Stock Out Tracking',
      'Admin Dashboard',
      'Reports (Sales, Operations, Financials)',
      'Daily / Day End Reports',
      'Customer Details and History',
      'YouTube Music Integrated (Play Music in App)',
    ],
    accent: {
      border: 'border-blue-200',
      headerBg: 'bg-blue-700',
      headerText: 'text-white',
      badge: 'bg-blue-100 text-blue-800',
      check: 'text-blue-700',
      checkBg: 'bg-blue-50',
    },
  },
]

export const lifetimeTrustPoints = [
  'Fully offline software',
  // 'Data stored locally on device',
  'No monthly subscription',
  'One-time payment, lifetime usage',
]

export const lifetimeMaintenance = {
  price: 499,
  period: 'year',
  startsAfter: '1 year of purchase',
  includes: ['Software updates', 'Bug fixes', 'Customer support', 'Maintenance assistance'],
}
