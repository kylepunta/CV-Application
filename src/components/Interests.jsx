function Interests(props) {
  return (
    <>
      <p className="description-section">
        <textarea
          placeholder="A brief summary of your interests"
          value={props.interests}
          onChange={(e) => {
            props.setInterests(e.target.value);
          }}
        ></textarea>
      </p>
    </>
  );
}
export default Interests;
