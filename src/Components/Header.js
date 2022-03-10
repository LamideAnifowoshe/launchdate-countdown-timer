import Timer from "./Timer";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <h2>We're launching soon</h2>
      <Timer countdownTimestampMs={1643673600000} />
      <Footer />
    </div>
  );
};

export default Header;
