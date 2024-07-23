import { Header, Work, Tech } from "components";
import { Tabs } from "components/ui";

import type { TabRecord } from "components/ui";

const HomePage = () => {
  const TABS: TabRecord[] = [
    {
      value: "work",
      trigger: "Work",
      content: <Work />,
    },
    {
      value: "tech",
      trigger: "Tech",
      content: <Tech />,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl p-4 pb-24 pt-6">
      <Header />
      <Tabs tabs={TABS} defaultValue="work" />
    </div>
  );
};

export default HomePage;
