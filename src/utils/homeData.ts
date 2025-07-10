import profile1 from '../assets/Travel images/photo-1.jpeg'
import profile2 from '../assets/Travel images/photo-2.jpeg'
import profile3 from '../assets/Travel images/photo-3.jpeg'
import profile4 from '../assets/Travel images/photo-4.jpeg'
import profile5 from '../assets/Travel images/photo-5.jpeg'
import profile6 from '../assets/Travel images/photo-6.jpeg'
import avatar from '../assets/avatar.jpg'

export type HomeData = {
  cover: string;
  title: string;
  id: number | string;
  description: string;
  profileURL: string;
  author: string;
  tags: string[];
  other_images: string[]
  lat: number;
  lon: number;
  location: string;
}

export const homeData: HomeData[] = [
  {
    cover: profile1,
    title: 'My Trip to India',
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    profileURL: avatar,
    author: 'John Doe',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    other_images: [profile1, profile2, profile3],
    lat: 54.03,
    lon: 33.43,
    location: 'New Delhi, India'
  },
  {
    cover: profile2,
    title: 'My Trip to India',
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    profileURL: avatar,
    author: 'John Doe',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    other_images: [profile1, profile2, profile3],
    lat: 54.03,
    lon: 33.43,
    location: 'New Delhi, India'
  },
  {
    cover: profile3,
    title: 'My Trip to India',
    id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    profileURL: avatar,
    author: 'John Doe',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    other_images: [profile1, profile2, profile3],
    lat: 54.03,
    lon: 33.43,
    location: 'New Delhi, India'
  },
  {
    cover: profile4,
    title: 'My Trip to India',
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    profileURL: avatar,
    author: 'John Doe',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    other_images: [profile1, profile2, profile3],
    lat: 54.03,
    lon: 33.43,
    location: 'New Delhi, India'
  },
  {
    cover: profile5,
    title: 'My Trip to India',
    id: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    profileURL: avatar,
    author: 'John Doe',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    other_images: [profile1, profile2, profile3],
    lat: 54.03,
    lon: 33.43,
    location: 'New Delhi, India'
  },
  {
    cover: profile6,
    title: 'My Trip to India',
    id: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    profileURL: avatar,
    author: 'John Doe',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    other_images: [profile1, profile2, profile3],
    lat: 54.03,
    lon: 33.43,
    location: 'New Delhi, India'
  },
]