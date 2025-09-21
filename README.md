# 📊 React Dashboard - Tugas

Dashboard modern yang sederhana namun elegan, dibangun dengan React.js, Vite, dan Tailwind CSS. Perfect untuk aplikasi bisnis, admin panel, atau monitoring sistem.

![Dashboard Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Modern+Dashboard+Preview)

## ✨ Fitur Utama

- 🎨 **UI Modern & Clean** - Desain yang minimalis dan profesional
- 📱 **Fully Responsive** - Optimal di semua device (mobile, tablet, desktop)
- 📊 **Interactive Charts** - Grafik interaktif dengan Recharts
- ⚡ **Vite** - Build tool yang cepat dan modern
- 💨 **Tailwind CSS** - Styling yang cepat dan konsisten
- 📈 **Real-time Data** - Visualisasi data real-time
- 🎯 **Quick Actions** - Tombol shortcut untuk aksi cepat
- 📱 **Mobile Sidebar** - Sidebar yang responsive dengan animasi smooth
- 🔍 **Search Functionality** - Fitur pencarian di header
- 🔔 **Notification System** - Sistem notifikasi dengan indicator

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Library |
| **Vite** | 4.5.0 | Build Tool |
| **Tailwind CSS** | 3.3.5 | Styling |
| **Recharts** | 2.8.0 | Data Visualization |
| **Lucide React** | 0.294.0 | Icons |
| **Inter Font** | Latest | Typography |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. **Clone repository**
```bash
git clone https://github.com/awaludinmil/tugasss.git
cd tugasss
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Run development server**
```bash
npm run dev
# atau
yarn dev
```

4. **Buka browser**
```
http://localhost:3000
```

## 📁 Struktur Project

```
tugasss/
├── 📁 src/                          # Source code
│   ├── 📁 components/               # React components
│   │   ├── 📄 ChartCard.jsx         # Revenue chart component
│   │   ├── 📄 QuickActions.jsx      # Quick action buttons
│   │   ├── 📄 RecentActivity.jsx   # Activity feed component
│   │   └── 📄 StatsCard.jsx        # Statistics card component
│   ├── 📄 App.jsx                   # Main App component
│   ├── 📄 main.jsx                  # Entry point
│   └── 📄 index.css                 # Global styles & Tailwind imports
├── 📄 index.html                    # HTML template
├── 📄 package.json                  # Dependencies & scripts
├── 📄 vite.config.js                # Vite configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 postcss.config.js             # PostCSS configuration
└── 📄 README.md                     # Project documentation
```

## 🧩 Komponen Detail

### 📊 StatsCard Component
```jsx
// src/components/StatsCard.jsx
const StatsCard = ({ title, value, change, changeType, icon: Icon, color }) => {
  // Component implementation
}
```

**Fitur:**
- Menampilkan metric utama dengan icon
- Indicator trend (naik/turun)
- Hover effect dengan animasi
- Responsive design

### 📈 ChartCard Component
```jsx
// src/components/ChartCard.jsx
// Menggunakan Recharts untuk visualisasi data
```

**Fitur:**
- Line chart interaktif untuk revenue
- Filter periode (7D, 30D, 90D)
- Tooltip dengan styling custom
- Responsive container
- Data sample yang realistis

### 🎯 QuickActions Component
```jsx
// src/components/QuickActions.jsx
// Grid 2x3 untuk tombol aksi cepat
```

**Aksi yang tersedia:**
- ➕ Add Product
- 📥 Export Data  
- 📤 Import Data
- 📊 View Reports
- ⚙️ Settings
- 👁️ Preview

### 📱 RecentActivity Component
```jsx
// src/components/RecentActivity.jsx
// Feed aktivitas real-time
```

**Fitur:**
- List aktivitas dengan icon
- Timestamp relatif
- Color coding untuk tipe aktivitas
- Scrollable content

## 🎨 Customization

### Mengubah Warna Theme
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',   // Light blue
        500: '#3b82f6',  // Main blue
        600: '#2563eb',  // Dark blue
      }
    }
  }
}
```

### Menambah Data Sample
Edit data di `src/App.jsx`:
```jsx
const stats = [
  {
    title: 'Your Metric',
    value: 'Your Value',
    change: '+10%',
    changeType: 'positive',
    icon: YourIcon,
    color: 'bg-your-color'
  }
]
```

### Mengubah Chart Data
Edit data di `src/components/ChartCard.jsx`:
```jsx
const data = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  // Tambah data sesuai kebutuhan
]
```

## 📱 Responsive Design

Dashboard ini fully responsive dengan breakpoints:

- **Mobile**: < 768px - Sidebar collapsible
- **Tablet**: 768px - 1024px - Grid 2 kolom
- **Desktop**: > 1024px - Grid 4 kolom, sidebar fixed

## 🔧 Available Scripts

```bash
npm run dev      # Development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## 🌟 Fitur Advanced

### Animasi & Transitions
- Smooth hover effects pada cards
- Slide animations untuk sidebar
- Fade-in animations untuk components
- Transform effects pada buttons

### Accessibility
- Semantic HTML structure
- ARIA labels untuk screen readers
- Keyboard navigation support
- High contrast color scheme

### Performance
- Vite fast build & HMR
- Code splitting
- Tree shaking
- Optimized bundle size

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Awaludin** - [@awaludinmil](https://github.com/awaludinmil) - awaludinmil@example.com

Project Link: [https://github.com/awaludinmil/tugasss](https://github.com/awaludinmil/tugasss)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The UI Library
- [Vite](https://vitejs.dev/) - Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Recharts](https://recharts.org/) - Composable charting library
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

---

⭐ **Jika project ini membantu, jangan lupa berikan star!** ⭐
