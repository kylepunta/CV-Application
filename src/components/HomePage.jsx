import "../styles/Homepage.css";
import { CreateCVButton } from "./Button.jsx";

function HomePage({ setCurrentPage }) {
  return (
    <main className="homepage">
      <p className="homepage-summary">
        With our simple to use CV application, you can start building your dream
        CV right away!
      </p>
      <CreateCVButton onClick={() => setCurrentPage("create-cv")} />
    </main>
  );
}
export default HomePage;
