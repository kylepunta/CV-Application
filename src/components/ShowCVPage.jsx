import "../styles/ShowCVPage.css";
import CV from "./CV";
import DownloadCV from "./DownloadCV";

export default function ShowCVPage(props) {
  return (
    <>
      <main className="show-cv-page">
        <DownloadCV />
        <CV cvDetails={props.cvDetails} />
      </main>
    </>
  );
}
