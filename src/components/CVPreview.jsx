export default function CVPreview(props) {
  return (
    <>
      <dialog className="cv-preview-dialog">
        <div className="cv-preview-header">
          <button
            className="cv-return-button"
            onClick={() => {
              document.querySelector(".cv-preview-dialog").close();
              document
                .querySelector(".preview-button")
                .classList.remove("hidden");
            }}
          >
            ←
          </button>
          <h3>Your CV Preview</h3>
        </div>

        <div className="cv-preview-content">
          <div className="preview-cv">
            <div className="cv-header">
              <h1>{props.personalDetails.name}</h1>
              <div className="cv-contact-details">
                <div>
                  <svg
                    className="cv-header-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>map-marker</title>
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  <p>
                    {props.personalDetails.address[0] != "" &&
                      props.personalDetails.address[0] + ", "}
                    {props.personalDetails.address[1] != "" &&
                      props.personalDetails.address[1] + ", "}
                    {props.personalDetails.address[2] != "" &&
                      props.personalDetails.address[2] + ", "}
                    {props.personalDetails.address[3] != "" &&
                      props.personalDetails.address[3]}
                  </p>
                </div>
                <div>
                  <svg
                    className="cv-header-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>calendar-range</title>
                    <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
                  </svg>
                  <p>{props.personalDetails.dateOfBirth}</p>
                </div>
                <div>
                  <svg
                    className="cv-header-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>email</title>
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                  <p>{props.personalDetails.email}</p>
                </div>
                <div>
                  <svg
                    className="cv-header-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>phone</title>
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                  <p>{props.personalDetails.phone}</p>
                </div>
              </div>
            </div>
            <div className="cv-content">
              <div className="profile">
                <h2>Profile</h2>
                <p>{props.profile}</p>
              </div>
              <div className="work-experience">
                <h2>Work Experience</h2>
                <div className="work-experience-sections">
                  {props.work.length > 0 &&
                    props.work.map((job) => (
                      <div key={job.id} className="work-experience-section">
                        <div className="work-experience-header">
                          <h4>{job.position}</h4>
                          <h4>{job.employerName}</h4>
                          <h4>
                            {job.startDate.month + " " + job.startDate.year} -{" "}
                            {job.endDate.month == "present"
                              ? "Present"
                              : job.endDate.month + " " + job.endDate.year}
                          </h4>
                        </div>
                        <div className="work-experience-info">
                          <ul>
                            <li>{job.responsibilities}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="education">
                <h2>Education History</h2>
                <div className="education-sections">
                  {props.education.length > 0 &&
                    props.education.map((education) => (
                      <div key={education.id} className="education-section">
                        <div className="education-header">
                          <h4>{education.university}</h4>
                          <h4>{education.courseTitle}</h4>
                          <h4>
                            {education.startDate.month +
                              " " +
                              education.startDate.year}{" "}
                            -{" "}
                            {education.endDate.month == "present"
                              ? "Present"
                              : education.endDate.month +
                                " " +
                                education.endDate.year}
                          </h4>
                        </div>
                        <div className="education-info">
                          <ul>
                            <li>{education.description}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="interests">
              <h2>Interests</h2>
              <p>{props.interests}</p>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <p>
                {props.skills.length > 0 &&
                  props.skills.map((skill) => skill.skillName).join(", ")}
              </p>
            </div>
          </div>
          <div className="cv-footer"></div>
        </div>
      </dialog>
    </>
  );
}
