const Indicator = () => {
  return (
    <div className="flex flex-col">
      <div className="relative flex mt-11">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full primary-bg-gradient opacity-50"></span>
        <div className="relative w-5 h-5 primary-bg-gradient rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
