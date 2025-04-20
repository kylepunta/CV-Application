import "../styles/LoadCVPage.css";

function LoadCVPage(props) {
  setTimeout(() => {
    props.setCurrentPage("show-cv");
  }, 5000);
  return (
    <main className="load-cv-page">
      <h1>Loading CV...</h1>
      <div className="loader"></div>
    </main>
  );
}
export default LoadCVPage;
