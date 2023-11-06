import { BsJustify } from "react-icons/bs";

export function Header({ OpenSidebar }: any) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
    </header>
  );
}
