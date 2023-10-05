
import fetch from 'node-fetch';

export async function fetchUtility(url: string, body: object) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
}
