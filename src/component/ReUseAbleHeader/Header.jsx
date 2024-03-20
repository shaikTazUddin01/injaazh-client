

const Header = ({ title, subtitle_1st, subtitle_2nd , position }) => {
  return (
    <div className="text-white md:-mt-8 lg:mt-10">
      
        <h4 className={position === "center" ? `uppercase flex items-center gap-1 justify-center`:`uppercase flex items-center gap-1  `} >
        <span className="h-[10px] w-[10px] rounded-full bg-[var(--primary-color)]"></span>
          {title}</h4>
          
      
      <h1 className='-mt-10 md:-mt-8 text-[32px] md:text-4xl lg:text-6xl font-semibold uppercase tracking-wide leading-[40px] md:leading-[42px] lg:leading-none' >{subtitle_1st}<br />
        <span className=' text-[#6b6b6b]'>{subtitle_2nd}</span>
      </h1>
    </div>
  );
};

export default Header;