const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000) + 1; // Limit range to 100,000
    console.log('Fetching GitHub users starting from ID:', start);

    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid GitHub token.');
      } else if (response.status === 403) {
        throw new Error('Rate limit exceeded. Check your rate limit usage.');
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    }

    const data = await response.json();
    console.log('Fetched users:', data);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error fetching GitHub users:', err.message);
    } else {
      console.error('Error fetching GitHub users:', err);
    }
    return []; // Return empty array if an error occurs
  }
};

const searchGithubUser = async (username: string) => {
  try {
    console.log(`Fetching GitHub user: ${username}`);

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `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`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid GitHub token.');
      } else if (response.status === 403) {
        throw new Error('Rate limit exceeded. Check your rate limit usage.');
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    }

      const data = await response.json();
      console.log('Fetched user:', data);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Error fetching GitHub user "${username}":`, err.message);
      } else {
        console.error(`Error fetching GitHub user "${username}":`, err);
      }
      return {}; // Return empty object if an error occurs
    }
};

export { searchGithub, searchGithubUser };
