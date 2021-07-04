import {
  MessageHeader,
  MessageSection,
  PageLayout,
  SideBar,
} from '../layouts/PageLayouts';

const DM = () => {
  return (
    <PageLayout>
      <SideBar />
      <MessageSection>
        <MessageHeader>Hello there</MessageHeader>
      </MessageSection>
    </PageLayout>
  );
};

export default DM;
