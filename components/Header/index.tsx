import Container from "../common/Container";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="w-full shadow-md fixed bg-white bg-opacity-30 backdrop-blur-xl backdrop-filter z-20">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
