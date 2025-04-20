import { useState, useRef } from "react";
import { ConfirmButton, EditButton, DeleteButton } from "./Button";

function Education(props) {
  const endDateRef = useRef(null);
  const [confirmItem, setConfirmItem] = useState(false);
  const [editItem, setEditItem] = useState(true);
  const [disableItem, setDisableItem] = useState(false);
  return (
    <>
      <div className="education-item" id={props.id}>
        <div className={disableItem === true && "disabled"}>
          <p>
            <label htmlFor="course">Course Title:</label>
            <input
              type="text"
              id="course"
              value={props.education.courseTitle}
              onChange={(e) => {
                props.setEducation((previousEducation) => {
                  const newEducation = [...previousEducation];
                  for (let i = 0; i < newEducation.length; i++) {
                    if (newEducation[i].id === props.education.id) {
                      newEducation[i].courseTitle = e.target.value;
                    }
                  }
                  return newEducation;
                });
              }}
            />
          </p>
          <p>
            <label htmlFor="university">University</label>
            <input
              type="text"
              id="university"
              value={props.education.university}
              onChange={(e) => {
                props.setEducation((previousEducation) => {
                  const newEducation = [...previousEducation];
                  for (let i = 0; i < newEducation.length; i++) {
                    if (newEducation[i].id === props.education.id) {
                      newEducation[i].university = e.target.value;
                    }
                  }
                  return newEducation;
                });
              }}
            />
          </p>
          {/* <p>
            <label htmlFor="educationCity">City:</label>
            <input
              type="text"
              id="educationCity"
              value={props.education.city}
              onChange={(e) => {
                props.setEducation((previousEducation) => {
                  const newEducation = [...previousEducation];
                  for (let i = 0; i < newEducation.length; i++) {
                    if (newEducation[i].id === props.education.id) {
                      newEducation[i].city = e.target.value;
                    }
                  }
                  return newEducation;
                });
              }}
            />
          </p> */}
          {/* <p>
            <label htmlFor="educationCountry">Country:</label>
            <input
              type="text"
              id="educationCountry"
              value={props.education.country}
              onChange={(e) => {
                props.setEducation((previousEducation) => {
                  const newEducation = [...previousEducation];
                  for (let i = 0; i < newEducation.length; i++) {
                    if (newEducation[i].id === props.education.id) {
                      newEducation[i].country = e.target.value;
                    }
                  }
                  return newEducation;
                });
              }}
            />
          </p> */}
          <p className="dropdown-section">
            <label htmlFor="startDate">Start Date:</label>
            <div className="start-date-dropdowns">
              <div>
                <select
                  className="month"
                  value={props.education.startDate.month}
                  onChange={(e) => {
                    props.setEducation((previousEducation) => {
                      const newEducation = [...previousEducation];
                      for (let i = 0; i < newEducation.length; i++) {
                        if (newEducation[i].id === props.education.id) {
                          newEducation[i].startDate.month = e.target.value;
                        }
                      }
                      return newEducation;
                    });
                  }}
                >
                  <option value="">Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <select
                className="year"
                value={props.education.startDate.year}
                onChange={(e) => {
                  props.setEducation((previousEducation) => {
                    const newEducation = [...previousEducation];
                    for (let i = 0; i < newEducation.length; i++) {
                      if (newEducation[i].id === props.education.id) {
                        newEducation[i].startDate.year = e.target.value;
                      }
                    }
                    return newEducation;
                  });
                }}
              >
                <option value="">Year</option>
                {Array.from({ length: 50 }, (_, i) => {
                  const year = 1980 + i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </p>
          <p className="dropdown-section">
            <label htmlFor="endDate">End Date:</label>
            <div className="end-date-dropdowns" ref={endDateRef}>
              <div>
                <select
                  className="month"
                  value={props.education.endDate.month}
                  onChange={(e) => {
                    props.setEducation((previousEducation) => {
                      const newEducation = [...previousEducation];
                      for (let i = 0; i < newEducation.length; i++) {
                        if (newEducation[i].id === props.education.id) {
                          newEducation[i].endDate.month = e.target.value;
                        }
                      }
                      return newEducation;
                    });
                  }}
                >
                  <option value="">Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <select
                className="year"
                value={props.education.endDate.year}
                onChange={(e) => {
                  props.setEducation((previousEducation) => {
                    const newEducation = [...previousEducation];
                    for (let i = 0; i < newEducation.length; i++) {
                      if (newEducation[i].id === props.education.id) {
                        newEducation[i].endDate.year = e.target.value;
                      }
                    }
                    return newEducation;
                  });
                }}
              >
                <option value="">Year</option>
                {Array.from({ length: 50 }, (_, i) => {
                  const year = 1980 + i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </p>
          <p className="present-field">
            <input
              className="checkbox"
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  endDateRef.current.classList.add("disabled");
                  props.setEducation((prev) => {
                    const newEducation = [...prev];
                    for (let i = 0; i < newEducation.length; i++) {
                      if (newEducation[i].id === props.education.id) {
                        newEducation[i].endDate.month = "present";
                        newEducation[i].endDate.year = "present";
                      }
                    }
                    return newEducation;
                  });
                } else {
                  endDateRef.current.classList.remove("disabled");
                  props.setEducation((prev) => {
                    const newEducation = [...prev];
                    for (let i = 0; i < newEducation.length; i++) {
                      if (newEducation[i].id === props.education.id) {
                        newEducation[i].endDate.month = "";
                        newEducation[i].endDate.year = "";
                      }
                    }
                    return newEducation;
                  });
                }
              }}
            />
            <label className="present" htmlFor="present">
              Present
            </label>
          </p>
          <p className="description-section">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={props.education.description}
              onChange={(e) => {
                props.setEducation((previousEducation) => {
                  const newEducation = [...previousEducation];
                  for (let i = 0; i < newEducation.length; i++) {
                    if (newEducation[i].id === props.education.id) {
                      newEducation[i].description = e.target.value;
                    }
                  }
                  return newEducation;
                });
              }}
            ></textarea>
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
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Education;
