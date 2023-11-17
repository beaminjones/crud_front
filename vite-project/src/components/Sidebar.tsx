import { BsBriefcase } from "react-icons/bs";

import { Link } from "react-router-dom";

export function Sidebar({ openSidebarToggle, OpenSidebar }: any) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsBriefcase className="icon-sidebar" /> CLIENTS
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/home" class="bi-grid-1x2-fill">
            &nbsp;Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/form" class="bi-person-add">
            &nbsp;Add Client
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/clients" class="bi-people">
            &nbsp;List Clients
          </Link>
        </li>
      </ul>
    </aside>
  );
}
