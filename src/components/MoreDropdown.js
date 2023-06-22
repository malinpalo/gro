import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";


// The forwardRef is important!! : ...
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDotsMenu = React.forwardRef(({ onClick }, ref) => (
    <i
      className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

  export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown className="ml-auto" drop="left">
          <Dropdown.Toggle as={ThreeDotsMenu} />
          
          <Dropdown.Menu 
            className="text-center"
            popperConfig={{ strategy: "fixed" }}
          >
            <Dropdown.Item
            className={styles.DropdownMenuItem}
            onClick={handleEdit}
            aria-label="edit"
            >
            <i className="far fa-edit" />
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.DropdownMenuItem}
              onClick={handleDelete}
              aria-label="delete"
            >
              <i className="far fa-trash-alt" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    );
  };