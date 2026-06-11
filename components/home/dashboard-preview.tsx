'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Receipt, ShoppingCart, Boxes, Users,
  BarChart3, Search, Bell, TrendingUp, TrendingDown,
  ArrowUpRight, CreditCard, Package, Monitor, FileText,
  AlertTriangle, CheckCircle2,
} from 'lucide-react'

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'pos', label: 'POS', icon: Monitor },
  { id: 'customers', label: 'Customers', icon: Users },
]

const stats = [
  { label: 'Total Sales', value: '₹12,45,890', change: '+12.5%', up: true, icon: Receipt },
  { label: 'Orders Today', value: '1,247', change: '+8.2%', up: true, icon: ShoppingCart },
  { label: 'Products', value: '3,842', change: '+24', up: true, icon: Boxes },
  { label: 'Customers', value: '8,621', change: '-2.1%', up: false, icon: Users },
]

const transactions = [
  { id: '#ORD-7842', customer: 'Rajesh K.', amount: '₹4,250', status: 'Completed', sc: 'bg-emerald-500/10 text-emerald-500' },
  { id: '#ORD-7841', customer: 'Priya S.', amount: '₹1,899', status: 'Processing', sc: 'bg-amber-500/10 text-amber-500' },
  { id: '#ORD-7840', customer: 'Amit P.', amount: '₹7,650', status: 'Completed', sc: 'bg-emerald-500/10 text-emerald-500' },
  { id: '#ORD-7839', customer: 'Sunita M.', amount: '₹3,200', status: 'Pending', sc: 'bg-blue-500/10 text-blue-500' },
]

const invoices = [
  { id: 'INV-2301', party: 'Sharma & Co.', amount: '₹45,600', date: 'Today', paid: true },
  { id: 'INV-2300', party: 'Mehta Traders', amount: '₹12,300', date: 'Yesterday', paid: true },
  { id: 'INV-2299', party: 'Kumar Agencies', amount: '₹78,500', date: '11 Jun', paid: false },
  { id: 'INV-2298', party: 'Patel Stores', amount: '₹9,450', date: '10 Jun', paid: true },
]

const stock = [
  { product: 'LED Bulb 9W', qty: 124, min: 50, ok: true },
  { product: 'Wireless Mouse', qty: 32, min: 40, ok: false },
  { product: 'A4 Paper Ream', qty: 890, min: 100, ok: true },
  { product: 'USB Cable Type-C', qty: 18, min: 30, ok: false },
]

const posItems = [
  { name: 'Fresh Paneer 200g', qty: 1, price: '₹95' },
  { name: 'Basmati Rice 1kg', qty: 2, price: '₹340' },
  { name: 'Organic Dal 500g', qty: 1, price: '₹125' },
]

const customersList = [
  { name: 'Rahul Sharma', phone: '98765 43210', visits: 48, spent: '₹2,45,000', badge: 'Gold' },
  { name: 'Priya Patel', phone: '98765 12345', visits: 32, spent: '₹1,89,000', badge: 'Silver' },
  { name: 'Amit Kumar', phone: '98765 67890', visits: 67, spent: '₹3,78,000', badge: 'Gold' },
  { name: 'Sunita Mehta', phone: '98765 11122', visits: 15, spent: '₹89,000', badge: 'Bronze' },
]

function DonutChart() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.15" />
      <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="94 126" strokeLinecap="round" transform="rotate(-90 24 24)" />
    </svg>
  )
}

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('dashboard')
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Glow behind */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl" />

      <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-foreground/5">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-400/80" />
            <div className="h-3 w-3 rounded-full bg-amber-400/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="mx-auto flex w-full max-w-xs items-center gap-2 rounded-md bg-background/80 px-3 py-1 text-xs text-muted-foreground">
            <Search className="h-3 w-3" />
            {`tezzpos.in/${activeTab}`}
          </div>
          <div className="flex gap-2">
            <Bell className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-36 border-r border-border/50 bg-muted/30 p-3 sm:block">
            <div className="flex items-center gap-2 pb-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <LayoutDashboard className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-bold">TezzPOS</span>
            </div>
            <nav className="space-y-0.5">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'}`}
                  >
                    <tab.icon className={`h-3 w-3 ${isActive ? 'text-primary' : 'text-muted-foreground/50'}`} />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 p-3 min-h-[380px]">
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && (
                <motion.div key="d" initial={{opacity:0,x:8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-8}} transition={{duration:0.2}}>
                  <div className="mb-2 flex items-center justify-between">
                    <div><h3 className="text-xs font-bold">Dashboard</h3><p className="text-[8px] text-muted-foreground">Welcome back, Rahul!</p></div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary text-[8px] font-bold text-primary-foreground">R</div>
                  </div>
                  <div className="mb-2 grid grid-cols-2 gap-2">
                    {stats.map((s)=>(
                      <div key={s.label} className="rounded-lg border border-border/50 bg-background/80 p-2">
                        <div className="flex items-center justify-between"><s.icon className="h-3 w-3 text-muted-foreground"/><span className={`flex items-center gap-0.5 text-[7px] font-semibold ${s.up?'text-emerald-500':'text-rose-500'}`}>{s.up?<TrendingUp className="h-2.5 w-2.5"/>:<TrendingDown className="h-2.5 w-2.5"/>}{s.change}</span></div>
                        <p className="mt-0.5 text-xs font-bold">{s.value}</p><p className="text-[7px] text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-2 grid grid-cols-3 gap-2">
                    <div className="col-span-2 rounded-lg border border-border/50 bg-background/80 p-2">
                      <div className="mb-1 flex items-center justify-between"><span className="text-[8px] font-semibold">Revenue Overview</span><ArrowUpRight className="h-2.5 w-2.5 text-muted-foreground"/></div>
                      <div className="flex items-end gap-0.5">{[40,65,45,80,55,90,70,85,60,95,75,88].map((h,i)=>(<div key={i} className="w-full rounded-t-sm bg-gradient-to-t from-primary/60 to-primary/20" style={{height:`${h*0.25}px`}}/>))}</div>
                      <div className="mt-0.5 flex justify-between text-[6px] text-muted-foreground"><span>Jan</span><span>Dec</span></div>
                    </div>
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2">
                      <span className="text-[8px] font-semibold">Top Category</span>
                      <div className="mt-1 text-primary"><DonutChart/></div>
                      <p className="mt-0.5 text-xs font-bold">Electronics</p><p className="text-[7px] text-muted-foreground">42% of sales</p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-background/80 p-2">
                    <div className="mb-1 flex items-center justify-between"><span className="text-[8px] font-semibold">Recent Orders</span><BarChart3 className="h-2.5 w-2.5 text-muted-foreground"/></div>
                    <div className="space-y-1">{transactions.map((t)=>(
                      <div key={t.id} className="flex items-center justify-between text-[8px]">
                        <div className="flex items-center gap-1.5"><div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[7px] font-bold">{t.customer.split(' ').map((n)=>n[0]).join('')}</div><div><p className="font-medium">{t.id}</p><p className="text-muted-foreground">{t.customer}</p></div></div>
                        <div className="text-right"><p className="font-semibold">{t.amount}</p><span className={`inline-block rounded-full px-1.5 py-0.5 text-[6px] font-medium ${t.sc}`}>{t.status}</span></div>
                      </div>
                    ))}</div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'billing' && (
                <motion.div key="b" initial={{opacity:0,x:8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-8}} transition={{duration:0.2}}>
                  <div className="mb-2 flex items-center justify-between">
                    <div><h3 className="text-xs font-bold">Billing</h3><p className="text-[8px] text-muted-foreground">4 invoices this week</p></div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary text-[8px] font-bold text-primary-foreground">R</div>
                  </div>
                  <div className="mb-2 grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">Total</p><p className="text-xs font-bold text-emerald-500">₹2,14,500</p></div>
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">Paid</p><p className="text-xs font-bold">₹1,82,350</p></div>
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">Pending</p><p className="text-xs font-bold text-amber-500">₹32,150</p></div>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-background/80 p-2">
                    <div className="mb-1 flex items-center justify-between"><span className="text-[8px] font-semibold">Recent Invoices</span><FileText className="h-2.5 w-2.5 text-muted-foreground"/></div>
                    <div className="space-y-1">{invoices.map((inv)=>(
                      <div key={inv.id} className="flex items-center justify-between text-[8px]">
                        <div><p className="font-medium">{inv.id}</p><p className="text-muted-foreground">{inv.party}</p></div>
                        <div className="text-right"><p className="font-semibold">{inv.amount}</p><span className={`inline-block rounded-full px-1.5 py-0.5 text-[6px] font-medium ${inv.paid?'bg-emerald-500/10 text-emerald-500':'bg-amber-500/10 text-amber-500'}`}>{inv.paid?'Paid':'Unpaid'}</span></div>
                      </div>
                    ))}</div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'inventory' && (
                <motion.div key="i" initial={{opacity:0,x:8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-8}} transition={{duration:0.2}}>
                  <div className="mb-2 flex items-center justify-between">
                    <div><h3 className="text-xs font-bold">Inventory</h3><p className="text-[8px] text-muted-foreground">Low stock alerts available</p></div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary text-[8px] font-bold text-primary-foreground">R</div>
                  </div>
                  <div className="mb-2 grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">Total Items</p><p className="text-xs font-bold">3,842</p></div>
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">In Stock</p><p className="text-xs font-bold text-emerald-500">3,650</p></div>
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">Low Stock</p><p className="text-xs font-bold text-rose-500">12</p></div>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-background/80 p-2">
                    <div className="mb-1 flex items-center justify-between"><span className="text-[8px] font-semibold">Stock Levels</span><Package className="h-2.5 w-2.5 text-muted-foreground"/></div>
                    <div className="space-y-1">
                      {stock.map((s)=>(
                        <div key={s.product} className="flex items-center justify-between text-[8px]">
                          <div className="flex items-center gap-1.5">
                            {!s.ok ? <AlertTriangle className="h-2.5 w-2.5 text-amber-500" /> : <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />}
                            <span className="font-medium">{s.product}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-10 overflow-hidden rounded-full bg-muted"><div className={`h-full rounded-full ${s.ok ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{width:`${Math.min((s.qty/s.min)*100,100)}%`}} /></div>
                            <span className="font-semibold">{s.qty}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'pos' && (
                <motion.div key="p" initial={{opacity:0,x:8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-8}} transition={{duration:0.2}}>
                  <div className="mb-2 flex items-center justify-between">
                    <div><h3 className="text-xs font-bold">Point of Sale</h3><p className="text-[8px] text-muted-foreground">Quick billing counter</p></div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary text-[8px] font-bold text-primary-foreground">R</div>
                  </div>
                  <div className="mb-2 rounded-lg border border-border/50 bg-background/80 p-2">
                    <div className="mb-2 flex items-center gap-2"><Search className="h-2.5 w-2.5 text-muted-foreground"/><span className="text-[7px] text-muted-foreground">Scan barcode or search...</span></div>
                    <div className="space-y-1">{posItems.map((it)=>(
                      <div key={it.name} className="flex items-center justify-between rounded-md bg-muted/40 px-2 py-1 text-[8px]">
                        <span className="font-medium">{it.name}</span><div className="flex items-center gap-2"><span className="rounded bg-primary/10 px-1 text-primary">x{it.qty}</span><span className="font-semibold">{it.price}</span></div>
                      </div>
                    ))}</div>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-2">
                    <div className="flex items-center justify-between text-[8px]"><span className="font-semibold">Total</span><span className="text-xs font-bold text-primary">₹560</span></div>
                    <div className="mt-1 flex gap-1">
                      <button className="flex-1 rounded bg-primary py-1 text-[7px] font-semibold text-primary-foreground">Cash</button>
                      <button className="flex-1 rounded border border-border py-1 text-[7px] font-medium">UPI</button>
                      <button className="flex-1 rounded border border-border py-1 text-[7px] font-medium">Card</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'customers' && (
                <motion.div key="c" initial={{opacity:0,x:8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-8}} transition={{duration:0.2}}>
                  <div className="mb-2 flex items-center justify-between">
                    <div><h3 className="text-xs font-bold">Customers</h3><p className="text-[8px] text-muted-foreground">8,621 total customers</p></div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary text-[8px] font-bold text-primary-foreground">R</div>
                  </div>
                  <div className="mb-2 grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">Total</p><p className="text-xs font-bold">8,621</p></div>
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">New (30d)</p><p className="text-xs font-bold text-emerald-500">+342</p></div>
                    <div className="rounded-lg border border-border/50 bg-background/80 p-2 text-center"><p className="text-[7px] text-muted-foreground">Avg. Spend</p><p className="text-xs font-bold">₹12,400</p></div>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-background/80 p-2">
                    <div className="mb-1 flex items-center justify-between"><span className="text-[8px] font-semibold">Top Customers</span><Users className="h-2.5 w-2.5 text-muted-foreground"/></div>
                    <div className="space-y-1">
                      {customersList.map((c)=>(
                        <div key={c.name} className="flex items-center justify-between text-[8px]">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary/70 to-primary text-[7px] font-bold text-primary-foreground">{c.name.split(' ').map((n)=>n[0]).join('')}</div>
                            <div><p className="font-medium">{c.name}</p><p className="text-muted-foreground">{c.phone}</p></div>
                          </div>
                          <div className="text-right"><p className="font-semibold">{c.spent}</p><span className={`inline-block rounded-full px-1.5 py-0.5 text-[6px] font-medium ${c.badge==='Gold'?'bg-amber-500/10 text-amber-500':c.badge==='Silver'?'bg-gray-400/10 text-gray-500':'bg-orange-700/10 text-orange-700'}`}>{c.badge}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute -bottom-3 -left-3 rounded-xl border border-border/60 bg-card/95 p-3 shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-bold">Revenue +42%</p>
            <p className="text-[10px] text-muted-foreground">vs last month</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute -right-3 top-8 rounded-xl border border-border/60 bg-card/95 p-3 shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
            <Bell className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-bold">GST Filed</p>
            <p className="text-[10px] text-muted-foreground">Auto-computed</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute -right-2 bottom-12 rounded-xl border border-border/60 bg-card/95 p-3 shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-bold">+128 New</p>
            <p className="text-[10px] text-muted-foreground">Customers today</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
