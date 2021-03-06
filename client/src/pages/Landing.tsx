import { Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../config/constants';
import { useAuthCtx } from '../context/AuthContext';
import { ReactComponent as MeetupIcon } from '../shared/meetup.svg';

const LandingLayout = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: none;
  background-color: #333;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  .left-illustration,
  .right-intro {
    min-height: 45vh;
    height: 100%;
  }

  .left-illustration {
    background-color: #222;
    display: grid;
    place-items: center;
    svg {
      width: 50vw;
      height: 50vw;
      path {
        fill: var(--primary-clr);
      }
    }
  }

  .right-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 1rem;

    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
      font-weight: 900;
    }

    h3 {
      font-weight: 700;
      font-size: 1.7rem;
      margin-bottom: 1.7rem;
      span {
        color: var(--primary-clr);
        font-weight: 900;
      }
    }

    .btn {
      min-width: 9rem;
      border: none;
      outline: none;
      width: max-content;
      padding: 0.8rem;
      color: #fff;
      cursor: pointer;
      font-weight: 700;
      transition: all 0.3s ease;

      &:hover {
        border-radius: 0.3rem;
      }
    }

    .login-btn {
      background-color: #222;

      &:hover {
        border-radius: 0.3rem;
        background-color: #000;
      }
    }

    .guest-btn {
      margin-top: 1rem;

      background-color: #111;

      &:hover {
        border-radius: 0.3rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;

    .left-illustration {
      svg {
        width: 25vw;
        height: 25vw;
      }
    }
    .right-intro {
      text-align: left;
      align-items: flex-start;
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

const Landing = () => {
  const { user } = useAuthCtx();
  const history = useHistory();
  const handleLogin: React.MouseEventHandler<HTMLButtonElement> | undefined = (
    e,
  ) => {
    if (e.currentTarget.classList.contains('guest-btn')) {
      history.push('/guest-login');
      return;
    }
    window.open(`${API_URL}/auth/github`, '_self');
  };

  if (user) return <Redirect to='/channels/@me' />;

  return (
    <LandingLayout>
      <div className='left-illustration'>
        <MeetupIcon />
      </div>
      <div className='right-intro'>
        <h1>Time to Chill!</h1>
        <h3>
          Join Meet<span>Cord</span> today
        </h3>
        <button className='btn login-btn' onClick={handleLogin}>
          Login with Github
        </button>

        <button className='btn guest-btn' onClick={handleLogin}>
          Login as Guest
        </button>
      </div>
    </LandingLayout>
  );
};

export default Landing;
