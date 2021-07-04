import styled from 'styled-components';

export const PageLayout = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  font-weight: 700;
`;

export const SideBar = styled.aside`
  width: 250px;
  background-color: var(--background-secondary);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MessageSection = styled.section`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background-primary);
`;

export const MessageHeader = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  padding-left: 1rem;
`;

export const MessageBoard = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  justify-content: flex-end;
`;

export const UserSection = styled.div`
  width: 240px;
  background-color: var(--background-secondary);
`;
