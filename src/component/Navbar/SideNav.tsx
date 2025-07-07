import { navItem } from "../../utils/navItem"
import { X } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useNav } from "../Store/navStore"

export default function SideNav() {

  const closeSideBar = useNav((state) => state.closeSideBar)

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#fffff0] z-[999]">
      <section className="flex flex-row justify-between items-center px-[10px]">
        <img src="/brand_name.png" alt="Brand Name" className="w-[160px] h-[80px]"/>
        <button className="outline-none cursor-pointer" onClick={closeSideBar}><X size={24} weight='bold'/></button>
      </section>
      <ul className='w-full p-2'>
        {navItem.map((item, index) => {

          const Icon = item.icon

          return (
            <Link to={item.route} key={index} onClick={closeSideBar}>
              <li className="flex flex-row justify-between items-center mb-[30px] pb-[5px] px-[20px] border-b-[1px]">
                <span>{item.name}</span>
                <span><Icon size={24} weight='fill'/></span>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
