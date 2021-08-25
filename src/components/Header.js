const Header = ({ title }) => {
  return (
    <header class="header">
      <h1>{title}</h1>
      <button>add task</button>
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
