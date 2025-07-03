import { House, Info, Image, type IconProps, PlusCircle } from 'phosphor-react'

type MenuItem = {
  name: string;
  route: string;
  icon: React.FC<IconProps>
}

export const navItem: MenuItem[] = [
  { 
    name: 'Home', 
    route: '/home', 
    icon: House 
  },
  { 
    name: 'Gallery', 
    route: '/gallery', 
    icon: Image
  },
  { 
    name: 'About', 
    route: '/about', 
    icon: Info
  },
  {
    name: 'Create',
    route: '/new_memories',
    icon: PlusCircle
  }
]