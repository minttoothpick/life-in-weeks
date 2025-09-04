import fetch from 'node-fetch';
import { schedule } from '@netlify/functions';

const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/688bd80b74682c3d42032c98';

export const handler = schedule('0 0 * * 1', async () => {
  const response = await fetch(BUILD_HOOK, { method: 'POST' });
  console.log('Build hook response:', response.status);
  return {
    statusCode: 200,
    body: 'Scheduled deploy triggered',
  };
});
