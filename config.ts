const githubToken = process.env.GITHUB_TOKEN

if (!githubToken) {
  throw new Error('Missing environment variable GITHUB_TOKEN.')
}

export const config = {
  name: 'Beau Hawkinson',
  subtitle: 'Code · Yoga · Frisbee',
  birthday: '1994-04-07',
  githubUsername: 'Twonarly1',
  githubToken,
}
