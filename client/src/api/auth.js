import axios from 'axios';

export function getUserRequest() {
  return axios.get('/auth/me', {
    withCredentials: true,
    responseType: 'json',
    headers: {
      credentials: 'include',
    },
  });
}
