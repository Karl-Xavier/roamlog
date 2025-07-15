import profile1 from '../assets/Travel images/photo-1.jpeg'
import profile2 from '../assets/Travel images/photo-2.jpeg'
import profile3 from '../assets/Travel images/photo-3.jpeg'
import profile4 from '../assets/Travel images/photo-4.jpeg'
import profile5 from '../assets/Travel images/photo-5.jpeg'
import profile6 from '../assets/Travel images/photo-6.jpeg'

export type AlbumDataProps = {
  title: string;
  description: string;
  tags: string[];
  album: string[];
  id: string | number;
}

export const albumData: AlbumDataProps[] = [
  {
    title: 'My Trip to India',
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi', 'India', 'France', 'Mumbai', 'Delhi'],
    album: [profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,profile4, profile2, profile3,]
  },
  {
    title: 'My Trip to India',
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile1, profile2, profile3]
  },
  {
    title: 'My Trip to India',
    id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile5, profile2, profile3]
  },
  {
    title: 'My Trip to India',
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile6, profile2, profile3]
  },
  {
    title: 'My Trip to India',
    id: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile2, profile6, profile3]
  },
  {
    title: 'My Trip to India',
    id: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile3, profile2, profile1]
  },
  {
    title: 'My Trip to India',
    id: 7,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile6, profile2, profile3]
  },
  {
    title: 'My Trip to India',
    id: 8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile5, profile2, profile3]
  },
  {
    title: 'My Trip to India',
    id: 9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae, non, quam consequatur voluptas omnis aliquid repudiandae exercitationem cupiditate amet corporis est facere perferendis harum commodi dolor doloribus obcaecati nesciunt.Nobis nihil quidem dolor quasi architecto optio necessitatibus sit unde aspernatur quam porro dolorem obcaecati magnam, iure alias! Dicta molestias quibusdam saepe veritatis, repudiandae laboriosam. Molestias laudantium voluptatibus quo eligendi!',
    tags: ['India', 'France', 'Mumbai', 'Delhi'],
    album: [profile4, profile2, profile3]
  },
]