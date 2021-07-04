import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  AlertState,
  useAlertDispatch,
  useAlertState,
} from '../context/AlertContext';

interface AlertProps extends AlertState {}

const AlertLayouts = styled.div<AlertProps>`
  max-width: 350px;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  transition: all 0.3s ease;
  transform: ${(props) =>
    !props.message ? 'translateX(100vw)' : 'translateX(0)'};
  width: calc(100% - 2rem);
  background-color: ${(props) =>
    props.severity === 'error'
      ? 'red'
      : props.severity === 'info'
      ? 'blue'
      : 'green'};
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
  color: #f2f2f2;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    right: 2rem;
    bottom: 2rem;
  }

  svg {
    cursor: pointer;
  }

  .alert-icon {
    margin-right: 1rem;
  }
`;

const Alert = () => {
  const { message, severity } = useAlertState();
  const { clearAlert } = useAlertDispatch();
  const AlertIcon = () => (
    <FontAwesomeIcon
      className='alert-icon'
      icon={
        severity === 'error'
          ? 'exclamation-circle'
          : severity === 'info'
          ? 'info-circle'
          : 'check-circle'
      }
    />
  );

  return (
    <AlertLayouts message={message} severity={severity}>
      <AlertIcon />
      <span>{message}</span>
      <FontAwesomeIcon onClick={clearAlert} icon='times' />
    </AlertLayouts>
  );
};

export default Alert;
