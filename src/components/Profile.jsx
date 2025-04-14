function Profile(props) {
  return (
    <>
      <p className="description-section">
        <textarea
          placeholder="Make a great impression by presenting yourself in a few sentences"
          value={props.profile}
          onChange={(e) => {
            props.setProfile(e.target.value);
          }}
        ></textarea>
      </p>
    </>
  );
}
export default Profile;
