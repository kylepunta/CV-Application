import html2pdf from "html2pdf.js";

export default function DownloadCV() {
  const downloadCV = function () {
    const cv = document.getElementById("cv");

    const width = cv.offsetWidth;
    const height = cv.offsetHeight;
    const options = {
      margin: 0,
      filename: "my-cv.pdf",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: {
        unit: "px",
        format: [width, height],
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(cv).save();
  };
  return (
    <>
      <button className="download-button" onClick={downloadCV}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>download</title>
          <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>
        <span>Download as PDF</span>
      </button>
    </>
  );
}
