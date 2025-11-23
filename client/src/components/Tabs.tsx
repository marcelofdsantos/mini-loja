import { ReactNode, useState } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTabId, className = "" }: TabsProps) {
  const [activeTabId, setActiveTabId] = useState(
    defaultTabId || tabs[0]?.id || ""
  );

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Buttons */}
      <div className="flex gap-2 border-b border-border overflow-x-auto bg-card">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`px-6 py-3 font-semibold whitespace-nowrap transition-all duration-200 border-b-2 ${
              activeTabId === tab.id
                ? "text-accent border-accent"
                : "text-muted border-transparent hover:text-foreground"
            }`}
            aria-selected={activeTabId === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab && <div key={activeTabId}>{activeTab.content}</div>}
      </div>
    </div>
  );
}
