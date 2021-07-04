import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GRAVATAR_URL } from '../config/constants';
import { useGuestCtx } from '../context/GuestContext';
import Button from '../shared/Button';

const GuestLoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 1rem auto;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.6);
  padding: 2.5rem;
  border-radius: 0.4rem;

  h1 {
    font-weight: 900;
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 0.8rem;
    margin-left: 1rem;
    opacity: 0.7;
    font-size: 0.9rem;
    line-height: 1.7;
  }

  .form-control {
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.6);
    margin: 1rem 0;

    label {
      font-weight: 700;
      display: block;
      margin-bottom: 0.4rem;
    }

    input {
      background-color: #333;
      border: 1px solid #333;
      outline: none;
      color: #f4f4f4;
      font-family: inherit;
      width: 100%;
      display: inline-block;
      padding: 0.5rem;
      height: 40px;
      border-radius: 0.2rem;
    }
  }
`;

const GuestLogin = () => {
  const { setGuest } = useGuestCtx();
  const [username, setUsername] = useState('');
  const history = useHistory();

  const onSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault();
    setGuest({
      username,
      avatar: GRAVATAR_URL,
    });
    history.push('/channels/@guest');
  };

  return (
    <GuestLoginLayout>
      <form onSubmit={onSubmit}>
        <h1>Login as Guest</h1>
        <p>As a guest, keep in mind that,</p>
        <ul>
          <li>Session will expire when you reload the app</li>
          <li>Multiple guests may have similar username</li>
          <li>You will be restricted to use single public room</li>
          <li>Won't be able to participate in one to one rooms</li>
        </ul>

        <div className='form-control'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <Button type='submit'>Continue</Button>
      </form>
    </GuestLoginLayout>
  );
};

export default GuestLogin;
