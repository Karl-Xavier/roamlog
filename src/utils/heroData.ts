import { Globe, Image, MapPin, Pen, type IconProps } from "phosphor-react";
import profile1 from '../assets/Travel images/photo-1.jpeg'
import profile2 from '../assets/Travel images/photo-2.jpeg'
import profile3 from '../assets/Travel images/photo-3.jpeg'

type Card = {
  name: string;
  description: string;
  icon: React.FC<IconProps>;
}

type Journal = {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
}

export const cardItem: Card[] = [
  {
    name: 'Write & Reflect',
    description: 'Craft beautiful stories with word images and tags.',
    icon: Pen
  },
  {
    name: 'Map your Journey',
    description: 'Pin your travel location on interactive map.',
    icon: MapPin
  },
  {
    name: 'Upload Images',
    description: 'Bringing your trip to life with images.',
    icon: Image
  },
  {
    name: 'Go Public',
    description: 'Share your stories with the world.',
    icon: Globe
  },
]

export const journalSample: Journal[] = [
  {
    title: 'My Trip to India',
    description: 'From the bustling streets of Delhi to the serene backwaters of Kerala, every stop offered a new adventure.',
    date: 'June 3, 2024',
    author: 'Jennifer Moore',
    image: profile1
  },
  {
    title: 'Adrift with the wind',
    description: 'Alone on a small wooden boat 😊😊. With only the sound of water and the breeze as company, it was a moment of reflection peace and quiet strength.',
    date: 'June 3, 2024',
    author: 'Michelle Shaw',
    image: profile2
  },
  {
    title: 'Hot Air Ballon Event',
    description: 'The sky bloomed with colors as dozens of hot air balloons lifted in the morning light.',
    date: 'August 22, 2024',
    author: 'Mark Doe',
    image: profile3
  }
]