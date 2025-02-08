function TitleHeading() {
  return <h1 className="title-heading">CV Application</h1>;
}

function HeaderMessage() {
  return <h2 className="header-message">Build your own CV from scratch!</h2>;
}

export default function Header() {
  return (
    <>
      <header>
        <TitleHeading />
        <HeaderMessage />
      </header>
    </>
  );
}
