import { useState, useRef, useEffect } from "react";
import { AddButton, EditButton, ConfirmButton } from "./Button.jsx";
import Education from "./Education.jsx";

function Form() {
  const [educationItems, setEducationItems] = useState([]);
  const [educationCounter, setEducationCounter] = useState(0);

  const lastItemRef = useRef(null);

  useEffect(() => {
    console.log("Scrolling into view...");
    console.log(lastItemRef.current);
    setTimeout(() => {
      if (lastItemRef.current) {
        console.log(lastItemRef.current);
        lastItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  }, [educationItems]);

  const deleteEducationItem = function (id) {
    console.log("Deleting item...");
    setEducationItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  };

  const addEducationItem = function () {
    const newItem = {
      name: "education",
      id: crypto.randomUUID(),
    };
    setEducationItems((previousItems) => [...previousItems, newItem]);
  };

  const incrementEducationCounter = function () {
    setEducationCounter((previousCounter) => previousCounter + 1);
  };

  const decrementEducationCounter = function () {
    setEducationCounter((previousCounter) => previousCounter - 1);
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>Personal Details</legend>
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
          <div className="buttons-section">
            <ConfirmButton />
            <EditButton />
          </div>
        </fieldset>
        <fieldset>
          <legend>Profile</legend>
          <p className="description-section">
            <textarea placeholder="Make a great impression by presenting yourself in a few sentences"></textarea>
          </p>
          <div className="buttons-section">
            <ConfirmButton />
            <EditButton />
          </div>
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {educationItems.length > 0 &&
            educationItems.map((_, i) => (
              <Education
                key={educationItems[i].id}
                id={educationItems[i].id}
                deleteItem={deleteEducationItem}
                decrementItemCounter={decrementEducationCounter}
                ref={i === educationItems.length - 1 ? lastItemRef : null}
              />
            ))}
          <div className="add-button-container">
            <AddButton
              text="Education"
              addNewItem={addEducationItem}
              incrementItemCounter={incrementEducationCounter}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Work Experience</legend>
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
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          <p>
            <label htmlFor="skill">Skill:</label>
            <input type="text" id="skill" />
          </p>
        </fieldset>
        <fieldset>
          <legend>Interests</legend>
          <p className="description-section">
            <textarea placeholder="A brief summary of your interests"></textarea>
          </p>
        </fieldset>
      </form>
    </>
  );
}
export default Form;
