import './Footer.css'
import { BsArrowUpRight } from "react-icons/bs";


const Footer = () => {
   return (
      <div className='footer_section'>
         <div className="footer_greadint">
            <div className='max-w-[1440px] mx-auto px-10'>
               <div className='border-x border-[var(--secondary-color)]'>
                  <div className='min-h-[700px] flex justify-between items-center px-8'>
                     <div className='w-[500px] h-[500px] flex justify-center items-center'>
                        <div className='ping_us flex justify-center items-center flex-col'>
                           <BsArrowUpRight className='text-5xl'></BsArrowUpRight>
                           <h1 className='text-6xl uppercase font-bold'>Ping us</h1>
                        </div>
                     </div>
                     {/* ---------- */}
                     <div>
                        <div>
                           <h3 className='font-semibold text-[#888888] uppercase'>Social mediea</h3>
                           <div className='text-2xl text-white mt-3 font-medium uppercase'>
                              <a href="">Instagram..</a>
                              <a href=""> Behance..</a><br />
                              <a href="">Dribbble..</a>
                              <a href=""> Facebook..</a><br />
                              <a href="">Twitter..</a>
                           </div>
                        </div>
                        <div className='mt-12'>
                           <h3 className='font-semibold text-[#888888] uppercase'>usefull link</h3>
                           <div className='text-xl text-white mt-3 font-medium '>
                              <a href=""><li className='list-none'>About Us</li></a>
                              <a href=""><li className='list-none'>Contact</li></a>
                              <a href=""><li className='list-none'>FAQ</li></a>
                              <a href=""><li className='list-none'>Our Company</li></a>

                           </div>
                        </div>
                     </div>
                     {/* ---------- */}
                     <div>
                        <div>
                           <h3 className='font-semibold text-[#888888] uppercase'>Contact info</h3>
                           <div className='text-2xl text-white mt-3 font-medium uppercase'>
                              <h2>WEST PORAM (UNITED <br />STATE) 45767 - LINK ROAD <br /> +000 87 6545 33</h2>
                           </div>
                        </div>
                        <div className='mt-12'>
                           <h3 className='font-semibold text-[#888888] uppercase'>more info</h3>
                           <div className='text-xl text-white mt-3 font-medium '>
                              <a href=""><li className='list-none'>Career</li></a>
                              <a href=""><li className='list-none'>Team</li></a>
                              <a href=""><li className='list-none'>Services</li></a>
                              <a href=""><li className='list-none'>Portfolio</li></a>

                           </div>
                        </div>
                     </div>
                  </div>
                  <footer className='border-t border-[var(--secondary-color)] flex justify-between p-5'>
                     <div className=' text-[#a3a3a3] text-[16px]'>
                        <p>Copyright © 2024 <span className='text-white text-[17px]'>Injaazh</span>. All rights reserved.

                        </p>
                     </div>
                     {/* ----- */}
                     <div className='flex gap-6 text-lg text-[#a3a3a3]'>
                    
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