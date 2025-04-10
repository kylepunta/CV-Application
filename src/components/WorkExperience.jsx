import { useState } from "react";
import { ConfirmButton, EditButton, DeleteButton } from "./Button";

function WorkExperience(props) {
  const [confirmItem, setConfirmItem] = useState(false);
  const [editItem, setEditItem] = useState(true);
  const [disableItem, setDisableItem] = useState(false);

  return (
    <>
      <div className="work-item">
        <div className={disableItem === true && "disabled"}>
          <p>
            <label htmlFor="employerName">Employer Name:</label>
            <input type="text" id="employerName" />
          </p>
          <p>
            <label htmlFor="position">Position Held:</label>
            <input type="text" id="position" />
          </p>
          <p className="dropdown-section">
            <label htmlFor="startDate">Start Date:</label>
            <div className="start-date-dropdowns">
              <div>
                <button className="month-dropdown">
                  <span>Month</span>
                  <div className="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-down</title>
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </div>
                </button>
                <ul className="months hidden">
                  <li>January</li>
                  <li>February</li>
                  <li>March</li>
                  <li>April</li>
                  <li>May</li>
                  <li>June</li>
                  <li>July</li>
                  <li>August</li>
                  <li>September</li>
                  <li>August</li>
                  <li>November</li>
                  <li>December</li>
                </ul>
              </div>
              <button className="year-dropdown">
                <span>Year</span>
                <div className="dropdown-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-down</title>
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </div>
              </button>
            </div>
          </p>
          <p className="dropdown-section">
            <label htmlFor="endDate">End Date:</label>
            <div className="end-date-dropdowns">
              <div>
                <button className="month-dropdown">
                  <span>Month</span>
                  <div className="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-down</title>
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </div>
                </button>
                <ul className="months hidden">
                  <li>January</li>
                  <li>February</li>
                  <li>March</li>
                  <li>April</li>
                  <li>May</li>
                  <li>June</li>
                  <li>July</li>
                  <li>August</li>
                  <li>September</li>
                  <li>August</li>
                  <li>November</li>
                  <li>December</li>
                </ul>
              </div>
              <button className="year-dropdown">
                <span>Year</span>
                <div className="dropdown-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-down</title>
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </div>
              </button>
            </div>
          </p>
          <p className="description-section">
            <label htmlFor="responsibilites">Main Responsibilities:</label>
            <textarea id="responsibilities"></textarea>
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

export default WorkExperience;
