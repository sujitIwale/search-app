import { useState } from "react";
import "./Tabs.css";

type TabsProps = { categories: string[] };

const Tabs = ({ categories }: TabsProps) => {
  const [CurrentTab, setCurrentTab] = useState<number>(1);
  const [DropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const dropDownAction = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <ul className="tabs">
        {categories.map((category, ind) => (
          <li
            key={ind}
            className={`tab-item ${CurrentTab === ind ? "selected" : ""}`}
            onClick={() => setCurrentTab(ind)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="dropdown-menu">
        <div className="btn dropdown-btn" onClick={dropDownAction}>
          <h4>{categories[CurrentTab]}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        {DropdownOpen && (
          <ul className="dropdown-list">
            {categories.map((category, ind) => (
              <li
                key={ind}
                className={`tab-item ${
                  CurrentTab === ind ? "current-tab" : ""
                }`}
                onClick={() => {
                  setCurrentTab(ind);
                  dropDownAction();
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Tabs;
