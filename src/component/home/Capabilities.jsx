import { useState } from "react";
import './Capabilities.css'

const Capabilities = () => {
    const [activeItem, setActiveItem] = useState(null)

    const handleItemClick = (idx) => {
        setActiveItem(idx)
    }
    return (
        <div className="max-w-[1300px] mx-auto px-10">
            <div className='grid grid-cols-2 gap-10 border-x pt-16 items-center'>
                <div className='text-white pb-10'>
                    <h1 className="uppercase">core services</h1>
                    <h1 className='text-6xl font-semibold uppercase'>Discover Oue <br />
                        <span className='text-[#6b6b6b]'>capabilities</span>
                    </h1>
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
        </div>
    );
};

export default Capabilities;