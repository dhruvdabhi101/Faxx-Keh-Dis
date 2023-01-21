import React from "react";
import "../App.css";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-category">All</button>
        </li>
        <li className="category">
          <button
            className="btn btn-category"
            style={{ "background-color": "#3b82f6" }}
          >
            Tech
          </button>
        </li>
        <li className="category">
          <button
            className="btn btn-category"
            style={{ "background-color": "#16a34ax" }}
          >
            Science
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
