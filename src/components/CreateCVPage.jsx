import "../styles/CreateCVPage.css";
import Form from "./Form.jsx";

function CreateCVPage(props) {
  return (
    <main className="create-cv-page">
      <Form
        setCurrentPage={props.setCurrentPage}
        setCVdetails={props.setCVdetails}
      />
    </main>
  );
}
export default CreateCVPage;
