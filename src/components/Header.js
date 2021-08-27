import Button from "./Button";
const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="add task" onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "task tracker",
};
// css in js
// <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
//   textAlign: "center",
// };

export default Header;
