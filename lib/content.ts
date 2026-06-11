import {
  Receipt,
  Boxes,
  ShoppingCart,
  FileText,
  Calculator,
  Users,
  TrendingUp,
  BarChart3,
  Store,
  UtensilsCrossed,
  Wrench,
  Sprout,
  Warehouse,
  Wine,
  Truck,
  Building2,
  type LucideIcon,
} from 'lucide-react'

export type Feature = {
  title: string
  description: string
  Icon: LucideIcon
}

export const features: Feature[] = [
  {
    title: 'Billing & Invoicing',
    description:
      'Create GST-ready invoices in seconds, print or share digitally, and get paid faster with professional billing tailored to your industry.',
    Icon: Receipt,
  },
  {
    title: 'Inventory Management',
    description:
      'Track stock in real time, set low-stock alerts, and manage batches, units, and warehouses effortlessly across all locations.',
    Icon: Boxes,
  },
  {
    title: 'Point of Sale (POS)',
    description:
      'A fast, touch-friendly POS that works across counters and devices, with barcode scanning, quick checkout, and offline mode.',
    Icon: ShoppingCart,
  },
  {
    title: 'GST & Tax Management',
    description:
      'Stay 100% compliant with automated GST calculations, tax reports, and ready-to-file summaries built for Indian businesses.',
    Icon: FileText,
  },
  {
    title: 'Accounting & Bookkeeping',
    description:
      'Maintain ledgers, track expenses, manage cash flow, and keep your books accurate without an accounting degree.',
    Icon: Calculator,
  },
  {
    title: 'Customers & Suppliers',
    description:
      'Manage contacts, credit limits, outstanding balances, and build stronger business relationships with smart CRM tools.',
    Icon: Users,
  },
  {
    title: 'Sales & Purchase Tracking',
    description:
      'Record every sale and purchase, monitor margins, and never lose track of a transaction again with real-time visibility.',
    Icon: TrendingUp,
  },
  {
    title: 'Reports & Analytics',
    description:
      'Make confident decisions with intelligent dashboards covering revenue, profit, top products, trends, and business health.',
    Icon: BarChart3,
  },
]

export type Industry = {
  title: string
  description: string
  Icon: LucideIcon
}

export const industries: Industry[] = [
  {
    title: 'TezzPOS Retail',
    description: 'End-to-end retail POS with barcode billing, inventory, loyalty programs, and multi-store management.',
    Icon: Store,
  },
  {
    title: 'TezzPOS Restro',
    description: 'Complete restaurant management with table orders, KOT, menu engineering, and fast settlements.',
    Icon: UtensilsCrossed,
  },
  {
    title: 'TezzPOS Garage',
    description: 'Automotive workshop management with job cards, spare parts inventory, and service tracking.',
    Icon: Wrench,
  },
  {
    title: 'TezzPOS Krishi',
    description: 'Agriculture business billing for seeds, fertilizers, equipment, and farmer credit management.',
    Icon: Sprout,
  },
  {
    title: 'TezzPOS Mandi',
    description: 'Market yard management with auction support, weighing integration, and trader accounting.',
    Icon: Warehouse,
  },
  {
    title: 'TezzPOS Liquor',
    description: 'Specialized liquor store POS with age verification, excise compliance, and bottle-level tracking.',
    Icon: Wine,
  },
  {
    title: 'TezzPOS Distributor',
    description: 'Multi-route distribution with beat planning, van sales, credit tracking, and bulk order management.',
    Icon: Truck,
  },
  {
    title: 'TezzPOS Enterprise',
    description: 'Scalable business management for chains and franchises with centralized control and reporting.',
    Icon: Building2,
  },
]
