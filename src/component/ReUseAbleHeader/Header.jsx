

const Header = ({title,subtitle_1st,subtitle_2nd}) => {
    return (
        <div className="text-white">
            <h4 className="uppercase" >{title}</h4>
              <h1 className='text-6xl font-semibold uppercase' >{subtitle_1st}<br />
                <span className='text-[#6b6b6b]'>{subtitle_2nd}</span>
              </h1>
        </div>
    );
};

export default Header;