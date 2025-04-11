import { useState } from "react";
import { ConfirmButton, EditButton, DeleteButton } from "./Button";

function Interests(props) {
  const [confirmItem, setConfirmItem] = useState(false);
  const [editItem, setEditItem] = useState(true);
  const [disableItem, setDisableItem] = useState(false);

  return (
    <>
      <p
        className={
          confirmItem === true
            ? "description-section disabled"
            : "description-section"
        }
      >
        <textarea placeholder="A brief summary of your interests"></textarea>
      </p>
    </>
  );
}
export default Interests;
