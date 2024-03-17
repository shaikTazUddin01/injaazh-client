import { useEffect, useState } from "react";
import './Capabilities.css'
// images
import img01 from "../../assets/img_01-1.jpg"
import img02 from "../../assets/img_02.jpg"
import img03 from "../../assets/img_03.jpg"
import img04 from "../../assets/img_04.jpg"
import Header from "../ReUseAbleHeader/Header";


const Capabilities = () => {
  const [activeItem, setActiveItem] = useState(null)

  const handleItemClick = (idx) => {
    setActiveItem(idx)
  }
 
  return (
    <div className="max-w-[1300px] mx-auto px-10">
      <div className="border-x">
     
        <div className='grid grid-cols-2 gap-10 pt-16 items-center'>
          <div className=' pb-10'>
            <Header title={"core services"} subtitle_1st={'Discover Oue '} subtitle_2nd={'capabilities'}></Header>
          </div>
          <div>
            <ul className="uppercase text-[#6f6c6c] flex gap-4 text-xl justify-end font-semibold">
              <li
                className={activeItem === null ? 'active' : ''}
                onClick={() => handleItemClick(null)}
              >
                See all
              </li>
              <li
                className={activeItem === 0 ? 'active' : ''}
                onClick={() => handleItemClick(0)}
              >
                app
              </li>
              <li
                className={activeItem === 1 ? 'active' : ''}
                onClick={() => handleItemClick(1)}
              >
                branding
              </li>
              <li
                className={activeItem === 2 ? 'active' : ''}
                onClick={() => handleItemClick(2)}
              >
                landing
              </li>
              <li
                className={activeItem === 3 ? 'active' : ''}
                onClick={() => handleItemClick(3)}
              >
                website
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 cap_images pb-16">
          {
            activeItem == null &&
            <> 
            
            <img src={img01} alt="" />
            
            <img src={img02} alt="" />
            <img src={img03} alt="" />
            <img src={img04} alt="" />
            </>
          }
          {
            activeItem == 0 &&
            <> 
            <img src={img03} alt="" data-aos="fade-left" />
            <img src={img04} alt="" data-aos="fade-right" />
            </>
          }
      
          {
            activeItem == 1 &&
            <> 
            <img src={img01} alt="" />
            <img src={img04} alt="" />
            </>
          }
            {
            activeItem == 2 &&
            <> 
            <img src={img03} alt="" />
            <img src={img04} alt="" />
            </>
          }
            {
            activeItem == 3 &&
            <>  
            <img src={img02} alt="" />
            <img src={img03} alt="" />
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Capabilities;