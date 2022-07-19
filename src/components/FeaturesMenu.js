import React from "react";

function FeaturesMenu() {
  return (
    <div className="m-nav__features-menu">
      <div>
        <img
          src="http://jvb3.github.io/snap-landing-page/images/icon-todo.svg"
          alt="an icon of a planner"
        />
        <span>Todo List</span>
      </div>
      <div>
        <img
          src="http://jvb3.github.io/snap-landing-page/images/icon-calendar.svg"
          alt="an icon of a planner"
        />
        <span>Calendar</span>
      </div>
      <div>
        <img
          src="http://jvb3.github.io/snap-landing-page/images/icon-planning.svg"
          alt="an icon of a planner"
        />
        <span>Reminders</span>
      </div>
      <div>
        <img
          src="http://jvb3.github.io/snap-landing-page/images/icon-reminders.svg"
          alt="an icon of a planner"
        />
        <span>Planning</span>
      </div>
    </div>
  );
}

export default FeaturesMenu;
