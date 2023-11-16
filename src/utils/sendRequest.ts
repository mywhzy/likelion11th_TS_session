import { BASE_URL } from '../constants';
import { User } from '../types';

export const sendRequest = async (url: string, { arg }: { arg: User }) => {
  return await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};
