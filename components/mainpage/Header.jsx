import Image from "next/image";
import { IoIosChatboxes, IoIosNotifications } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";



const Header = () => {
    return ( 
        <div className=' antialiased flex space-x-5 h-16 w-full items-center justify-around pt-4 '>
           
          <div className=" flex justify-between pb-5 font-bold gap-x-2 ">
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8">
  <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
  <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
  <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
</svg>
</div>
      <div className="text-blue-800 text-2xl"><a href="./">iFlip</a></div>
        </div>
        
        <div class="">
        <input class="h-7 rounded-xl text-sm w-96 pl-6  focus:outline-none focus:ring-0 active:bg-white focus:border-sky-300 focus:border" placeholder="search anything" />

      </div>


<div className='flex space-x-4 text-blue-800'>
<div className='text-xs pt-1'><a>Sell/Swap</a></div>

<div>< IoIosNotifications  className="w-5 h-7"/></div>

<div><IoIosChatboxes className="w-5 h-7" /></div>

<div><FiShoppingCart className="w-5 h-7" /></div>

<div  className='flex ' >
<div><button className=" h-7 w-16 text-sm   ">Login</button></div>
<div><button className=" h-7 w-24 bg-blue-500 rounded-xl text-white text-sm ">Sign Up</button></div>
</div>

 </div>
</div>
     );
}
 
export default Header;