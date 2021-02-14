import React, { PureComponent, memo } from "react";

const Navbar = memo((props) => {
  return (
    <div className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Trakcer</span>
      <span className="navbar-count">{props.total_count}</span>
    </div>
  );
});

/*
class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Trakcer</span>
        <span className="navbar-count">{this.props.total_count}</span>
      </div>
    );
  }
}
*/

export default Navbar;
