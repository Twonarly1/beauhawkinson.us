const githubToken = process.env.GITHUB_ACCESS_TOKEN

if (!githubToken) {
  throw new Error('Missing environment variable GITHUB_TOKEN.')
}

export const config = {
  name: 'Beau Hawkinson',
  subtitle: 'Code · Yoga · Frisbee',
  githubUsername: 'Twonarly1',
  githubToken,
}
