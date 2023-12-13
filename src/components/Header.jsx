import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, onAddText }) => {
  const location = useLocation()

  return (
    <header className="header">
    <>
      <div className="flex justify-between items-center">
        <div className="w-full text-center text-xl font-semibold">{title}</div>
        { location.pathname === '/' ? (
          <Button text={ onAddText ? "Close" : "Add" } color={ onAddText ? "black" : "black"} onClick={onAdd} />
        ) : <Link to="/" className={"px-3 py-2 text-sm rounded-xl bg-gray-900 text-white"}>Back</Link>}
      </div>
    </>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
