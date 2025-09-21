import React, { useState } from 'react'
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Search,
  Menu,
  X,
  Activity,
  ShoppingCart,
  Eye,
  Download
} from 'lucide-react'
import StatsCard from './components/StatsCard'
import ChartCard from './components/ChartCard'
import RecentActivity from './components/RecentActivity'
import QuickActions from './components/QuickActions'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+15.3%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+8.2%',
      changeType: 'positive',
      icon: ShoppingCart,
      color: 'bg-purple-500'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-2.1%',
      changeType: 'negative',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <nav className="flex-1 px-4 py-6 space-y-2">
              <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg">
                <BarChart3 className="mr-3" size={20} />
                Dashboard
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Users className="mr-3" size={20} />
                Users
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="mr-3" size={20} />
                Orders
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Activity className="mr-3" size={20} />
                Analytics
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
              <p className="text-gray-600">Here's what's happening with your business today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Charts and Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <ChartCard />
              </div>
              <div className="space-y-6">
                <QuickActions />
                <RecentActivity />
              </div>
            </div>

            {/* Additional Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View all
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Product A', sales: 1234, percentage: 35 },
                    { name: 'Product B', sales: 856, percentage: 24 },
                    { name: 'Product C', sales: 642, percentage: 18 },
                    { name: 'Product D', sales: 423, percentage: 12 },
                    { name: 'Product E', sales: 311, percentage: 9 }
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900">{product.name}</span>
                          <span className="text-sm text-gray-500">{product.sales} sales</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${product.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View all
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { id: '#1234', customer: 'John Doe', amount: '$299.00', status: 'Completed' },
                    { id: '#1235', customer: 'Jane Smith', amount: '$156.00', status: 'Processing' },
                    { id: '#1236', customer: 'Bob Johnson', amount: '$89.00', status: 'Completed' },
                    { id: '#1237', customer: 'Alice Brown', amount: '$234.00', status: 'Pending' },
                    { id: '#1238', customer: 'Charlie Wilson', amount: '$445.00', status: 'Completed' }
                  ].map((order, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-500">{order.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App
