function PersonalDetails(props) {
  return (
    <>
      <div className="personal-details">
        <div id="personal-details">
          <fieldset className="section-card">
            <legend>Personal Details</legend>
            <p>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={props.personalDetails.name}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    newDetails.name = e.target.value;
                    return newDetails;
                  })
                }
                required
              />
            </p>
            <p>
              <label htmlFor="dateOfBirth">Date Of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                value={props.personalDetails.dateOfBirth}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    newDetails.dateOfBirth = e.target.value;
                    return newDetails;
                  })
                }
                required
              />
            </p>
            <p className="email-field">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={props.personalDetails.email}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    newDetails.email = e.target.value;
                    return newDetails;
                  })
                }
                required
              />
            </p>
            <p className="phone-field">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                value={props.personalDetails.phoneNumber}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    newDetails.phone = e.target.value;
                    return newDetails;
                  })
                }
                required
              />
            </p>
          </fieldset>
          <fieldset className="section-card">
            <legend id="address-legend">Address</legend>
            <p>
              <label htmlFor="addressLineOne">Address Line 1:</label>
              <input
                type="text"
                id="addressLineOne"
                value={props.personalDetails.address[0]}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    if (Array.isArray(newDetails.address)) {
                      newDetails.address[0] = e.target.value;
                    }
                    return newDetails;
                  })
                }
                required
              />
            </p>
            <p>
              <label htmlFor="addressLineTwo">Address Line 2:</label>
              <input
                type="text"
                id="addressLineTwo"
                value={props.personalDetails.address[1]}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    if (Array.isArray(newDetails.address)) {
                      newDetails.address[1] = e.target.value;
                    }
                    return newDetails;
                  })
                }
              />
            </p>
            <p>
              <label htmlFor="addressCity">City:</label>
              <input
                type="text"
                id="addressCity"
                value={props.personalDetails.address[2]}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    if (Array.isArray(newDetails.address)) {
                      newDetails.address[2] = e.target.value;
                    }
                    return newDetails;
                  })
                }
                required
              />
            </p>
            <p>
              <label htmlFor="addressCountry">Country:</label>
              <input
                type="text"
                id="addressCountry"
                value={props.personalDetails.address[3]}
                onChange={(e) =>
                  props.setPersonalDetails((previousDetails) => {
                    const newDetails = { ...previousDetails };
                    if (Array.isArray(newDetails.address)) {
                      newDetails.address[3] = e.target.value;
                    }
                    return newDetails;
                  })
                }
                required
              />
            </p>
          </fieldset>
        </div>
      </div>
    </>
  );
}
export default PersonalDetails;
