import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ categories }: { categories: string[] }) => {
  const [CurrentTab, setCurrentTab] = useState<number>(1);
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
    </>
  );
};

export default Tabs;
