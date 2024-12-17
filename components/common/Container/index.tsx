type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 xl:px-14">
      {children}
    </div>
  );
};

export default Container;
