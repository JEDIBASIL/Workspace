import { Tabs } from "@mantine/core";
import { PageHeader } from "../../components";

const SharedNote: React.FC = () => {
  return (
    <>
      <div >
        <PageHeader name={"Shared notes"} />
        <Tabs variant="outline" defaultValue="your_note">
          <Tabs.List>
            <Tabs.Tab value="your_note">
              Your notes
            </Tabs.Tab>
            <Tabs.Tab value="others_note">
              Others notes
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            Gallery tab content
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default SharedNote;
