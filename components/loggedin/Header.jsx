import Image from "next/image";
import { IoIosChatboxes, IoIosNotifications } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";



const Header = () => {
    return ( 
        <div className=' antialiased flex space-x-5 h-16 w-full  justify-around pt-4 bg-gray-200'>
           
           <a href="./"> <div className=" flex justify-between pb-5 font-bold gap-x-2 ">
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8">
  <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
  <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
  <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
</svg>
</div>
      <div className="text-blue-800 text-2xl">iFlip</div>
        </div></a>
        
        <div class="">
        <input class="h-7 rounded-xl text-sm w-96 pl-6 hover:bg-gray-300 focus:outline-none focus:ring-0 active:bg-white" placeholder="search anything" />

      </div>

<div className='flex space-x-4 text-blue-800'>
<div className='text-xs pt-1'><a>Sell/Swap</a></div>

<div>< IoIosNotifications  className="w-5 h-7"/></div>

<div><IoIosChatboxes className="w-5 h-7" /></div>

<div><FiShoppingCart className="w-5 h-7" /></div>

<div className='flex space-x-2'>

<div className="avatar">
  <div className=" rounded-full ">
    <Image 
    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
    alt='/' width={24} height={24} className='rounded-full' />
  </div>
</div>

<div className='text-sm pt-1 font-'>Adedeji</div>
<div>

  <button onClick={() => { setMenu(updateMenu)}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-7">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
</svg>
</button>


</div>

</div>
</div>
 </div>
     );
}
 
export default Header;