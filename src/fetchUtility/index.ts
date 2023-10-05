
import fetch from 'node-fetch';

export async function fetchUtility(url: string, reqBody: object) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}
