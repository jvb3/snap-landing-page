import React from "react";

function FeaturesMenu() {
  return (
    <div className="m-nav__features-menu">
      <div>
        <img src="images/icon-todo.svg" alt="an icon of a planner" />
        <span>Todo List</span>
      </div>
      <div>
        <img src="images/icon-calendar.svg" alt="an icon of a planner" />
        <span>Calendar</span>
      </div>
      <div>
        <img src="images/icon-planning.svg" alt="an icon of a planner" />
        <span>Reminders</span>
      </div>
      <div>
        <img src="images/icon-reminders.svg" alt="an icon of a planner" />
        <span>Planning</span>
      </div>
    </div>
  );
}

export default FeaturesMenu;
