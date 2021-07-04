import styled from 'styled-components';
import { ReactComponent as MeetupIcon } from './meetup.svg';

const SidebarHeaderLayout = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  padding-left: 0.5rem;

  svg {
    margin-right: 0.8rem;
    path {
      fill: var(--primary-clr);
    }
  }

  h1 {
    font-weight: 900;
    span {
      color: var(--primary-clr);
    }
  }
`;

const SidebarHeader = () => {
  return (
    <SidebarHeaderLayout>
      <MeetupIcon />
      <h1>
        Meet<span>Cord</span>
      </h1>
    </SidebarHeaderLayout>
  );
};

export default SidebarHeader;
