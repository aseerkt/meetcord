import styled from 'styled-components';
import Avatar from '../shared/Avatar';
import formatDate from '../utils/formatDate';

const MessageLayout = styled.div`
  display: flex;
  align-items: center;
  margin: 0.7rem;

  img {
    margin-right: 0.8rem;
  }

  .comment-info {
    margin-bottom: 0.3rem;
    span {
      margin-left: 0.3rem;
      opacity: 0.7;
    }
  }
`;

interface MessageProps {
  username: string;
  avatar: string;
  text: string;
  createdAt: string;
}

const Message: React.FC<MessageProps> = ({
  username,
  avatar,
  createdAt,
  text,
}) => {
  return (
    <MessageLayout>
      <Avatar src={avatar} alt={`photo of ${username}`} />
      <div>
        <p className='comment-info'>
          <strong>{username}</strong>
          <span>{formatDate(createdAt).toISOString()}</span>
        </p>
        <p className='comment-text'>{text}</p>
      </div>
    </MessageLayout>
  );
};

export default Message;
