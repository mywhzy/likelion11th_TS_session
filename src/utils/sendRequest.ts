import { BASE_URL } from '../constants';
import { User, LoginFormValues } from '../types';

export const sendRequest = async (
  url: string,
  { arg }: { arg: User | LoginFormValues },
) => {
  return await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};
