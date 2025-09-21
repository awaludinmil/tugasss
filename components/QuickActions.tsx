'use client'

import { Plus, Download, Upload, Settings, Eye, BarChart3 } from 'lucide-react'

const actions = [
  {
    title: 'Add Product',
    description: 'Create a new product',
    icon: Plus,
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    title: 'Export Data',
    description: 'Download reports',
    icon: Download,
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    title: 'Import Data',
    description: 'Upload CSV file',
    icon: Upload,
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    title: 'View Reports',
    description: 'Analytics dashboard',
    icon: BarChart3,
    color: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    title: 'Settings',
    description: 'Configure system',
    icon: Settings,
    color: 'bg-gray-500 hover:bg-gray-600'
  },
  {
    title: 'Preview',
    description: 'View live site',
    icon: Eye,
    color: 'bg-indigo-500 hover:bg-indigo-600'
  }
]

export default function QuickActions() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <button
              key={index}
              className={`${action.color} text-white p-4 rounded-lg transition-all duration-200 hover:scale-105 transform`}
            >
              <Icon className="h-5 w-5 mb-2" />
              <p className="text-sm font-medium">{action.title}</p>
              <p className="text-xs opacity-90">{action.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
