import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PageToRead = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-xl font-bold mt-10 mb-8 p-6 bg-gray-100 text-center rounded-xl">Books</h1>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        {/* Tab-1  */}
        <TabPanel>
          <h2>Tab-1</h2>
        </TabPanel>

        {/* Tab-2  */}
        <TabPanel>
          <h2>Tab 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PageToRead;
