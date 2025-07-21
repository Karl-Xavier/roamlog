import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-[30px] px-[10px]">
      <p className="text-center text-[14px] md:text-[18px]"><span>Made with Love for Travelers 🌍✈</span> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;<Link to='/about'>About</Link> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;<Link to='/home'>Explore</Link></p>
      <p className="flex flex-row items-center justify-center font-bold"><img src="/brand_name.png" alt="Brand Name" className="w-[160px] h-[70px]"/> &copy; 2025</p>
    </footer>
  )
}