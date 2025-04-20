import "../styles/ShowCVPage.css";
import CV from "./CV";
import DownloadCV from "./DownloadCV";
import html2pdf from "html2pdf.js";

export default function ShowCVPage(props) {
  const downloadCV = function () {
    const cv = document.getElementById("cv");

    const options = {
      margin: 0.5,
      filename: "my-cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };
  return (
    <>
      <main className="show-cv-page">
        <DownloadCV />
        <CV cvDetails={props.cvDetails} />
      </main>
    </>
  );
}
