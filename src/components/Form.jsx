import { useState } from "react";
import { AddButton, EditButton, ConfirmButton } from "./Button.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";
import Skill from "./Skill.jsx";
import Interests from "./Interests.jsx";
import Profile from "./Profile.jsx";
import PersonalDetails from "./PersonalDetails.jsx";

function Form(props) {
  const [items, setItems] = useState([[], [], []]);
  const [itemCounter, setItemCounter] = useState([[0], [0], [0]]);

  const deleteItem = function (type, id) {
    console.log("Deleting item...");
    setItems((previousItems) => {
      return previousItems.map((group, index) => {
        if (
          (type === "education" && index === 0) ||
          (type === "work" && index === 1) ||
          (type === "skill" && index === 2)
        ) {
          return group.filter((item) => item.id !== id);
        }
        return group;
      });
    });
  };

  const addItem = function (type) {
    const newItem = {
      type: type,
      id: crypto.randomUUID(),
    };
    setItems((previousItems) => {
      return previousItems.map((group, index) => {
        if (
          (type === "education" && index === 0) ||
          (type === "work" && index === 1) ||
          (type === "skill" && index === 2)
        ) {
          return [...group, newItem];
        }
        return group;
      });
    });
    console.log(items);
  };

  const incrementItemCounter = function (type) {
    setItemCounter((previousCounter) => {
      return previousCounter.map((count, index) => {
        if (
          (type === "education" && index === 0) ||
          (type === "work" && index === 1) ||
          (type === "skill" && index === 2)
        ) {
          return count + 1;
        }
        return count;
      });
    });
  };

  const decrementItemCounter = function (type) {
    setItemCounter((previousCounter) => {
      return previousCounter.map((count, index) => {
        if (
          (type === "education" && index === 0) ||
          (type === "work" && index === 1) ||
          (type === "skill" && index === 2)
        ) {
          return count - 1;
        }
        return count;
      });
    });
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>Personal Details</legend>
          <PersonalDetails />
        </fieldset>
        <fieldset>
          <legend>Profile</legend>
          <Profile />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {items[0].length > 0 &&
            items[0].map((_, i) => (
              <Education
                key={items[0][i].id}
                id={items[0][i].id}
                type="education"
                deleteItem={deleteItem}
                decrementItemCounter={decrementItemCounter}
              />
            ))}
          <div className="add-button-container">
            <AddButton
              text="Education"
              type="education"
              addItem={addItem}
              incrementItemCounter={incrementItemCounter}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Work Experience</legend>
          {items[1].length > 0 &&
            items[1].map((_, i) => (
              <WorkExperience
                key={items[1][i].id}
                id={items[1][i].id}
                type="work"
                deleteItem={deleteItem}
                decrementItemCounter={decrementItemCounter}
              />
            ))}
          <div className="add-button-container">
            <AddButton
              text="Work Experience"
              type="work"
              addItem={addItem}
              incrementItemCounter={incrementItemCounter}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          {items[2].length > 0 &&
            items[2].map((_, i) => (
              <Skill
                key={items[2][i].id}
                id={items[2][i].id}
                type="skill"
                deleteItem={deleteItem}
                decrementItemCounter={decrementItemCounter}
              />
            ))}
          <AddButton
            text="Skill"
            type="skill"
            addItem={addItem}
            incrementItemCounter={incrementItemCounter}
          />
        </fieldset>
        <fieldset>
          <legend>Interests</legend>
          <Interests />
        </fieldset>
        <div className="finish-cv">
          <button
            className="finish-cv-button"
            onClick={() => props.setCurrentPage("load-cv")}
          >
            Finish
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
