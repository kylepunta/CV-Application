function Skill(props) {
  return (
    <>
      <div className="skill" id={props.id}>
        <p>{props.skill.skillName}</p>
        <div
          className="svg-container"
          onClick={() => {
            props.deleteItem(props.type, props.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40px"
            height="40px"
          >
            <title>close</title>
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
export default Skill;
