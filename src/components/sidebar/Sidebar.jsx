import { v4 } from "uuid";
import "./styles/index.scss";

const sidebars = [
  { id: v4(), title: "Home" },
  { id: v4(), title: "Pricing" },
  { id: v4(), title: "Reasources" },
  { id: v4(), title: "Support" },
];

const Sidebar = () => {
  return (
    <ul className="menu">
      {sidebars?.map((item) => (
        <li key={item.id} className="menu-item">
          <a href="#!" className="menu-link">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
