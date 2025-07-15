import { House, Info, SquaresFour, type IconProps, PlusCircle } from 'phosphor-react'

type MenuItem = {
  name: string;
  route: string;
  icon: React.FC<IconProps>,
  showOnAuth: boolean
}

export const navItem: MenuItem[] = [
  { 
    name: 'Home', 
    route: '/home', 
    icon: House,
    showOnAuth: true 
  },
  { 
    name: 'Gallery', 
    route: '/gallery', 
    icon: SquaresFour,
    showOnAuth: false
  },
  {
    name: 'Create',
    route: '/new-memories',
    icon: PlusCircle,
    showOnAuth: false
  },
  { 
    name: 'About', 
    route: '/about', 
    icon: Info,
    showOnAuth: true
  },
]