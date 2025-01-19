export interface Candidate {
    login: string; // GitHub username
    id: number; // Unique identifier
    avatar_url: string; // URL of the candidate's avatar image
    html_url: string; // URL to the candidate's GitHub profile
    name?: string; // Candidate's full name (optional)
    company?: string; // Candidate's company (optional)
    location?: string; // Candidate's location (optional)
    email?: string; // Candidate's email address (optional)
  }
  