import { useState, useRef } from "react";
import { ConfirmButton, EditButton, DeleteButton } from "./Button";

function WorkExperience(props) {
  const endDateRef = useRef(null);
  const [confirmItem, setConfirmItem] = useState(false);
  const [editItem, setEditItem] = useState(true);
  const [disableItem, setDisableItem] = useState(false);

  return (
    <>
      <div className="work-item">
        <div className={disableItem === true && "disabled"}>
          <p className="employer-field">
            <label htmlFor="employerName">Employer Name:</label>
            <input
              type="text"
              id="employerName"
              value={props.work.employerName}
              onChange={(e) => {
                props.setWork((previousWork) => {
                  return previousWork.map((work) => {
                    if (work.id === props.id) {
                      return { ...work, employerName: e.target.value };
                    } else {
                      return { ...work };
                    }
                  });
                });
              }}
            />
          </p>
          <p className="position-field">
            <label htmlFor="position">Position Held:</label>
            <input
              type="text"
              id="position"
              value={props.work.position}
              onChange={(e) => {
                props.setWork((previousWork) => {
                  return previousWork.map((work) => {
                    if (work.id === props.id) {
                      return { ...work, position: e.target.value };
                    } else {
                      return { ...work };
                    }
                  });
                });
              }}
            />
          </p>
          <p className="dropdown-section">
            <label htmlFor="startDate">Start Date:</label>
            <div className="start-date-dropdowns">
              <div>
                <select
                  className="month"
                  value={props.work.startDate.month}
                  onChange={(e) => {
                    props.setWork((previousWork) => {
                      return previousWork.map((work) => {
                        if (work.id === props.id) {
                          return {
                            ...work,
                            startDate: {
                              ...work.startDate,
                              month: e.target.value,
                            },
                          };
                        } else {
                          return { ...work };
                        }
                      });
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
                value={props.work.startDate.year}
                onChange={(e) => {
                  props.setWork((previousWork) => {
                    return previousWork.map((work) => {
                      if (work.id === props.id) {
                        return {
                          ...work,
                          startDate: {
                            ...work.startDate,
                            year: e.target.value,
                          },
                        };
                      } else {
                        return { ...work };
                      }
                    });
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
                  value={props.work.endDate.month}
                  onChange={(e) => {
                    props.setWork((previousWork) => {
                      return previousWork.map((work) => {
                        if (work.id === props.id) {
                          return {
                            ...work,
                            endDate: { ...work.endDate, month: e.target.value },
                          };
                        } else {
                          return { ...work };
                        }
                      });
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
                value={props.work.endDate.year}
                onChange={(e) => {
                  props.setWork((previousWork) => {
                    return previousWork.map((work) => {
                      if (work.id === props.id) {
                        return {
                          ...work,
                          endDate: { ...work.endDate, year: e.target.value },
                        };
                      } else {
                        return { ...work };
                      }
                    });
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
                  props.setWork((prev) => {
                    const newWork = [...prev];
                    for (let i = 0; i < newWork.length; i++) {
                      if (newWork[i].id === props.work.id) {
                        newWork[i].endDate.month = "present";
                        newWork[i].endDate.year = "present";
                      }
                    }
                    return newWork;
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
            <label htmlFor="responsibilites">Main Responsibilities:</label>
            <textarea
              id="responsibilities"
              value={props.work.responsibilities}
              onChange={(e) => {
                props.setWork((previousWork) => {
                  return previousWork.map((work) => {
                    if (work.id === props.id) {
                      return { ...work, responsibilities: e.target.value };
                    } else {
                      return { ...work };
                    }
                  });
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
                setWork={props.setWork}
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

export default WorkExperience;
