import React from "react";

export default function Sidebar({ scenarios, activeScenario, onScenarioChange, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h1>Modal Examples</h1>
        <p className="subtitle">Using @headlessui/react</p>
      </div>
      <nav className="sidebar-nav">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            className={`nav-item ${activeScenario === scenario.id ? "active" : ""}`}
            onClick={() => onScenarioChange(scenario.id)}
          >
            {scenario.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}
