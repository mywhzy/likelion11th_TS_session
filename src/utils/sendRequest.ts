import { BASE_URL } from '../constants';
import { User, LoginFormValues } from '../types';

export const sendRequest = async (
  url: string,
  { arg }: { arg: User | LoginFormValues },
) => {
  const response = await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  });
  if (!response.ok) {
    const error = await response.json().then((data) => {
      return data.error;
    });
    throw error;
  }
  return response.json();
};
