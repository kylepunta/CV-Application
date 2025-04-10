import { useState } from "react";
import { ConfirmButton, EditButton } from "./Button";

function PersonalDetails() {
  const [confirmItem, setConfirmItem] = useState(false);
  const [editItem, setEditItem] = useState(true);
  const [disableItem, setDisableItem] = useState(false);

  return (
    <>
      <div className="personal-details">
        <div className={confirmItem === true && "disabled"}>
          <p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </p>
          <p>
            <label htmlFor="dateOfBirth">Date Of Birth:</label>
            <input type="date" id="dateOfBirth" />
          </p>
          <legend>Address</legend>
          <p>
            <label htmlFor="addressLineOne">Address Line 1:</label>
            <input type="text" id="addressLineOne" />
          </p>
          <p>
            <label htmlFor="addressLineTwo">Address Line 2:</label>
            <input type="text" id="addressLineTwo" />
          </p>
          <p>
            <label htmlFor="addressCity">City:</label>
            <input type="text" id="addressCity" />
          </p>
          <p>
            <label htmlFor="addressCountry">Country:</label>
            <input type="text" id="addressCountry" />
          </p>
          <p>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" />
          </p>
          <p>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" />
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default PersonalDetails;
