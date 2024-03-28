import { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div>
      <div className="flex border-b-2 border-gray-100 justify-center gap-4 md:gap-14">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`p-2 md:p-6 ${activeTab === tab.key ? 'border-b-2 border-primary' : 'text-gray-500 border-transparent opacity-30 hover:opacity-50'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {typeof tab.title === 'string' ? (
              <span>{tab.title}</span>
            ) : (
              tab.title
            )}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) => (
          activeTab === tab.key && (
            <div key={tab.key} className="mt-2">
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Tab;
