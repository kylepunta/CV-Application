import { useState } from "react";
import { useEffect } from "react";
import { AddButton } from "./Button.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";
import Skill from "./Skill.jsx";
import Interests from "./Interests.jsx";
import Profile from "./Profile.jsx";
import PersonalDetails from "./PersonalDetails.jsx";
import CVPreview from "./CVPreview.jsx";

function Form(props) {
  const [personalDetails, setPersonalDetails] = useState({
    id: crypto.randomUUID(),
    name: "",
    dateOfBirth: "",
    address: ["", "", "", ""],
    email: "",
    phone: "",
  });
  const [profile, setProfile] = useState("");
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      courseTitle: "",
      university: "",
      city: "",
      country: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
      description: "",
    },
  ]);
  const [work, setWork] = useState([
    {
      id: crypto.randomUUID(),
      employerName: "",
      position: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
      responsibilities: "",
    },
  ]);

  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState("");

  useEffect(() => {
    console.log(work);
  }, [work]);

  const deleteItem = function (type, id) {
    switch (type) {
      case "education":
        if (education.length > 1) {
          setEducation((prev) => prev.filter((item) => item.id !== id));
        }
        break;
      case "work":
        if (work.length > 1) {
          setWork((prev) => prev.filter((item) => item.id !== id));
        }
        break;
      case "skill":
        if (skills.length > 0) {
          setSkills((prev) => prev.filter((item) => item.id !== id));
        }
        break;
    }
  };

  const addItem = function (type, value) {
    let newItem = {};
    switch (type) {
      case "education":
        {
          newItem = {
            id: crypto.randomUUID(),
            courseTitle: "",
            university: "",
            city: "",
            country: "",
            startDate: { month: "", year: "" },
            endDate: { month: "", year: "" },
            description: "",
          };
        }
        setEducation((previousEducation) => {
          return [...previousEducation, newItem];
        });
        break;
      case "work":
        {
          newItem = {
            id: crypto.randomUUID(),
            employerName: "",
            position: "",
            startDate: { month: "", year: "" },
            endDate: { month: "", year: "" },
            responsibilities: "",
          };
        }
        setWork((previousWork) => {
          return [...previousWork, newItem];
        });
        break;
      case "skill":
        {
          newItem = {
            id: crypto.randomUUID(),
            skillName: value,
          };
        }
        setSkills((previousSkills) => {
          return [...previousSkills, newItem];
        });
        break;
      default:
        console.warn("Unknown type: ", type);
    }
  };

  return (
    <>
      <form>
        <fieldset className="personal-details-section">
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
        </fieldset>
        <fieldset className="profile-section">
          <legend>Profile</legend>
          <Profile profile={profile} setProfile={setProfile} />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {education.length > 0 &&
            education.map((_, i) => (
              <Education
                key={education[i].id}
                id={education[i].id}
                type="education"
                deleteItem={deleteItem}
                education={education[i]}
                setEducation={setEducation}
              />
            ))}
          <div className="add-button-container">
            <AddButton text="Education" type="education" addItem={addItem} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Work Experience</legend>
          {work.length > 0 &&
            work.map((_, i) => (
              <WorkExperience
                key={work[i].id}
                id={work[i].id}
                type="work"
                deleteItem={deleteItem}
                work={work[i]}
                setWork={setWork}
              />
            ))}
          <div className="add-button-container">
            <AddButton text="Work Experience" type="work" addItem={addItem} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          <input
            id="skills-input"
            type="text"
            placeholder="Enter skills"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem("skill", e.target.value);
                e.target.value = "";
              }
            }}
          />
          <div className="skills-container">
            {skills.length > 0 &&
              skills.map((_, i) => (
                <Skill
                  key={skills[i].id}
                  id={skills[i].id}
                  skill={skills[i]}
                  type="skill"
                  deleteItem={deleteItem}
                />
              ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Interests</legend>
          <Interests interests={interests} setInterests={setInterests} />
        </fieldset>
        <div className="finish-cv">
          <button
            className="finish-cv-button"
            onClick={() => {
              props.setCurrentPage("load-cv");
              props.setCVdetails((prev) => {
                const newCVdetails = [...prev];
                newCVdetails[0] = personalDetails;
                newCVdetails[1] = profile;
                newCVdetails[2] = education;
                newCVdetails[3] = work;
                newCVdetails[4] = skills;
                newCVdetails[5] = interests;
                return newCVdetails;
              });
            }}
          >
            Finish
          </button>
        </div>
        <button
          className="preview-button"
          onClick={(event) => {
            event.preventDefault();
            document.querySelector(".cv-preview-dialog").showModal();
            document.querySelector(".preview-button").classList.add("hidden");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>file-document</title>
            <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
          </svg>
        </button>
      </form>
      <CVPreview
        personalDetails={personalDetails}
        profile={profile}
        education={education}
        work={work}
        interests={interests}
        skills={skills}
      />
    </>
  );
}
export default Form;
