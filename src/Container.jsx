import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggle() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="app">
      <div className="app-title" onClick={handleToggle}>
        {title}
      </div>
      {!collapsed && <div className="app-content">{children}</div>}
    </div>
  );
}
