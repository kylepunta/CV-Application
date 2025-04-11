import { useState } from "react";
import { ConfirmButton, EditButton } from "./Button";

function Profile() {
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
        <textarea placeholder="Make a great impression by presenting yourself in a few sentences"></textarea>
      </p>
    </>
  );
}
export default Profile;
