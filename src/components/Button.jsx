function CreateCVButton({ onClick }) {
  return (
    <>
      <button className="create-cv-button" onClick={onClick}>
        Create New CV
      </button>
    </>
  );
}

function AddButton(props) {
  return (
    <>
      <button
        className="add-button"
        onClick={(event) => {
          event.preventDefault();
          props.addItem(event, props.type);
        }}
      >
        <div className="add-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
          >
            <title>plus</title>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </div>
        <span>{props.text}</span>
      </button>
    </>
  );
}

function EditButton(props) {
  return (
    <>
      <button
        className="edit-button"
        onClick={(event) => {
          event.preventDefault();
          props.setEditItem(true);
          props.setConfirmItem(false);
          props.setDisableItem(false);
        }}
      >
        Edit
      </button>
    </>
  );
}

function ConfirmButton(props) {
  return (
    <>
      <button
        className="confirm-button"
        onClick={(event) => {
          event.preventDefault();
          props.setConfirmItem(true);
          props.setEditItem(false);
          props.setDisableItem(true);
        }}
      >
        Confirm
      </button>
    </>
  );
}

function DeleteButton(props) {
  return (
    <>
      <button
        className="delete-button"
        onClick={(event) => {
          event.preventDefault();
          props.deleteItem(props.type, props.id);
        }}
      >
        Delete
      </button>
    </>
  );
}

export { CreateCVButton, AddButton, EditButton, ConfirmButton, DeleteButton };
