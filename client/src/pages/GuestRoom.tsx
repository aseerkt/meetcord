import Message from '../components/Message';
import { GRAVATAR_URL } from '../config/constants';
import {
  MessageBoard,
  MessageHeader,
  MessageSection,
  PageLayout,
  UserSection,
} from '../layouts/PageLayouts';

const GuestDashboard = () => {
  return (
    <PageLayout>
      <MessageSection>
        <MessageHeader>Guest Room @public</MessageHeader>
        <MessageBoard>
          <Message
            avatar={GRAVATAR_URL}
            username='jack'
            createdAt={new Date().toString()}
            text='Hello World!'
          />
        </MessageBoard>
      </MessageSection>
      <UserSection></UserSection>
    </PageLayout>
  );
};

export default GuestDashboard;
