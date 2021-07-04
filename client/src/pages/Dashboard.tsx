import { useAuthCtx } from '../context/AuthContext';
import {
  PageLayout,
  SideBar,
  MessageSection,
  MessageHeader,
  MessageBoard,
  UserSection,
} from '../layouts/PageLayouts';
import SidebarHeader from '../shared/SidebarHeader';

const Dashboard = () => {
  const { user } = useAuthCtx();
  return (
    <PageLayout>
      <SideBar>
        <SidebarHeader />
      </SideBar>
      <MessageSection>
        <MessageHeader>Welcome @{user?.username}</MessageHeader>
        <MessageBoard></MessageBoard>
      </MessageSection>
      <UserSection></UserSection>
    </PageLayout>
  );
};

export default Dashboard;
