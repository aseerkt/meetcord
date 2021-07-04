import styled from 'styled-components';
import { ReactComponent as MeetupLogo } from './meetup.svg';

const PageLoaderLayout = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-primary);

  svg {
    path {
      fill: var(--primary-clr);
    }
  }
`;

export default function PageLoader() {
  return (
    <PageLoaderLayout>
      <MeetupLogo height='5rem' width='5rem' />
    </PageLoaderLayout>
  );
}
