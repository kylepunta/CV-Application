import "../styles/Homepage.css";
import CreateCVButton from "./Button.jsx";

function HomePage() {
  return (
    <div className="homepage">
      <p className="homepage-summary">
        With our easy to use CV application, you can start building your dream
        CV right now!
      </p>
      <CreateCVButton />
    </div>
  );
}
export default HomePage;
