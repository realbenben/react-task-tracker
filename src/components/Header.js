import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="add task" onClick={onClick} />
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
