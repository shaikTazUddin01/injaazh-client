import './Footer.css'
import { BsArrowUpRight } from "react-icons/bs";


const Footer = () => {
   return (
      <div className='footer_section'>
         <div className="footer_greadint">
            <div className='max-w-[1300px] mx-auto px-10'>
               <div className='border-x '>
                  <div className='min-h-[700px] flex justify-between items-center'>
                     <div className='w-[500px] h-[500px] flex justify-center items-center'>
                        <div className='ping_us flex justify-center items-center flex-col'>
                           <BsArrowUpRight className='text-5xl'></BsArrowUpRight>
                           <h1 className='text-6xl uppercase font-bold'>Ping us</h1>
                        </div>
                     </div>
                     <div>
                        <h3 className='text-xl font-semibold text-[#888888] uppercase'>Social mediea</h3>
                        <div className='text-2xl text-white mt-4 font-medium uppercase'>
                           <a href="">Instagram..</a>
                           <a href=""> Behance..</a><br />
                           <a href="">Dribbble..</a>
                           <a href=""> Facebook..</a><br />
                           <a href="">Twitter..</a>
                        </div>
                     </div>
                     <div></div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Footer;