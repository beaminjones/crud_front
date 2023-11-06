import { BsGrid1X2Fill, BsPeopleFill, BsPersonAdd } from "react-icons/bs";

import logo from "../assets/logo_en.jpg";
import { Link } from "react-router-dom";

export function Sidebar({ openSidebarToggle, OpenSidebar }: any) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} alt="" className="icon_header" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/home">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/form">
            <BsPersonAdd className="icon" /> Add Client
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/clients">
            <BsPeopleFill className="icon" /> List Clients
          </Link>
        </li>
      </ul>
    </aside>
  );
}
