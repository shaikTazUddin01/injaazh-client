import './Footer.css'
import { BsArrowUpRight } from "react-icons/bs";


const Footer = () => {
   return (
      <div className='footer_section min-w-full'>
         <div className="footer_greadint ">
            <div className='max-w-[1440px] mx-auto px-5 lg:px-10 '>
               <div className='border-x border-[var(--secondary-color)]'>
                  <div className='min-h-[700px] flex flex-col lg:flex-row justify-between items-center px-8 py-10 lg:py-0'>
                     <div className='hidden md:flex md:w-[500px] md:h-[500px]  justify-center items-center'>
                        <div className='ping_us flex justify-center items-center flex-col'>
                           <BsArrowUpRight className='text-5xl'></BsArrowUpRight>
                           <h1 className='text-6xl uppercase font-bold'>Ping us</h1>
                        </div>
                     </div>
                     {/* ---------- */}
                     <div>
                        <div className=' '>
                           <h3 className='font-semibold text-[#888888] uppercase text-xl'>Social mediea</h3>
                           <div className='text-[18px] md:text-2xl text-white mt-3 font-medium uppercase'>
                              <a href="">Instagram..</a>
                              <a href=""> Behance..</a><br />
                              <a href="">Dribbble..</a>
                              <a href=""> Facebook..</a><br />
                              <a href="">Twitter..</a>
                           </div>
                        </div>
                        <div className='mt-12'>
                           <h3 className='font-semibold text-[#888888] uppercase  pt-5 md:pt-0 text-xl'>usefull link</h3>
                           <div className='text-[18px] md:text-xl text-white mt-3 font-medium '>
                              <a href=""><li className='list-none'>About Us</li></a>
                              <a href=""><li className='list-none'>Contact</li></a>
                              <a href=""><li className='list-none'>FAQ</li></a>
                              <a href=""><li className='list-none'>Our Company</li></a>

                           </div>
                        </div>
                     </div>
                     {/* ---------- */}
                     <div className='pt-10 lg:pt-0'>
                        <div>
                           <h3 className='font-semibold text-[#888888] uppercase text-xl'>Contact info</h3>
                           <div className='text-[18px] md:text-2xl text-white mt-3 font-medium uppercase'>
                              <h2>WEST PORAM (UNITED <br />STATE) 45767 - LINK ROAD <br /> +000 87 6545 33</h2>
                           </div>
                        </div>
                        <div className='mt-12'>
                           <h3 className='font-semibold text-[#888888] uppercase text-xl'>more info</h3>
                           <div className='text-[18px] md:text-xl text-white mt-3 font-medium '>
                              <a href=""><li className='list-none'>Career</li></a>
                              <a href=""><li className='list-none'>Team</li></a>
                              <a href=""><li className='list-none'>Services</li></a>
                              <a href=""><li className='list-none'>Portfolio</li></a>

                           </div>
                        </div>
                     </div>
                  </div>
                  <footer className='border-t border-[var(--secondary-color)] flex flex-col md:flex-row gap-2 justify-between p-5'>
                     <div className=' text-[#a3a3a3] text-[16px]'>
                        <p>Copyright © 2024 <span className='text-white text-[16px] md:text-[17px]'>Injaazh</span>. All rights reserved.

                        </p>
                     </div>
                     {/* ----- */}
                     <div className='flex gap-6 text-lg text-[#a3a3a3] text-[15px] md:text-[17px]'>
                    
                              <a href=""><li className='list-none'>Tram and condition</li></a>
                              <a href=""><li className='list-none'>Privacy Policy</li></a>
                              

                           </div>
                     
                  </footer>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Footer;