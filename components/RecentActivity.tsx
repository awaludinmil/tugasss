'use client'

import { Activity, User, ShoppingCart, DollarSign } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'user',
    message: 'New user registered',
    time: '2 minutes ago',
    icon: User,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    type: 'order',
    message: 'Order #1234 completed',
    time: '5 minutes ago',
    icon: ShoppingCart,
    color: 'bg-green-500'
  },
  {
    id: 3,
    type: 'revenue',
    message: 'Payment of $299 received',
    time: '10 minutes ago',
    icon: DollarSign,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    type: 'activity',
    message: 'System backup completed',
    time: '1 hour ago',
    icon: Activity,
    color: 'bg-orange-500'
  },
  {
    id: 5,
    type: 'user',
    message: 'User profile updated',
    time: '2 hours ago',
    icon: User,
    color: 'bg-blue-500'
  }
]

export default function RecentActivity() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
