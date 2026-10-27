import { Gauge, BarChart2, CreditCard, Settings, LogOut } from 'lucide-react';
const SidemenuRoutes = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: Gauge,
  },
  {
    name: 'Analytics',
    to: '/analytics',
    icon: BarChart2,
  },
  {
    name: 'Billing',
    to: '/billing',
    icon: CreditCard,
  },
  {
    name: 'Settings',
    to: '/settings',
    icon: Settings,
  },
  {
    name: 'logout',
    to: '/logout',
    icon: LogOut,
  }
  
]
export default SidemenuRoutes;