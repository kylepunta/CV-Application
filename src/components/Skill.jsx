import { useState } from "react";
import { ConfirmButton, EditButton, DeleteButton } from "./Button";

function Skill(props) {
  const [confirmItem, setConfirmItem] = useState(false);
  const [editItem, setEditItem] = useState(true);
  const [disableItem, setDisableItem] = useState(false);

  return (
    <>
      <div className="skill-item">
        <div className={confirmItem === true && "disabled"}>
          <p>
            <label htmlFor="skill">Skill:</label>
            <input type="text" id="skill" />
          </p>
        </div>
        <div className="buttons-section">
          {confirmItem === true && (
            <>
              <EditButton
                setConfirmItem={setConfirmItem}
                setEditItem={setEditItem}
                setDisableItem={setDisableItem}
              />
            </>
          )}
          {confirmItem === false && (
            <>
              <ConfirmButton
                setConfirmItem={setConfirmItem}
                setEditItem={setEditItem}
                setDisableItem={setDisableItem}
              />
              <DeleteButton
                key={props.id}
                id={props.id}
                type={props.type}
                deleteItem={props.deleteItem}
                decrementItemCounter={props.decrementItemCounter}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Skill;
