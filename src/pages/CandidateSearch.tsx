import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    setIsLoading(true);
    const candidates = await searchGithub();
    if (candidates.length > 0) {
      setCandidate(candidates[0]); // Show the first candidate
    } else {
      setCandidate(null); // No candidates available
    }
    setIsLoading(false);
  };

  const saveCandidate = () => {
    if (candidate) {
      const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...saved, candidate]));
      fetchCandidate();
    }
  };

  const skipCandidate = () => {
    fetchCandidate();
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : candidate ? (
        <div>
          <img src={candidate.avatar_url} alt={`${candidate.login} avatar`} width="100" />
          <h2>{candidate.name || candidate.login}</h2>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location || 'N/A'}</p>
          <p>Company: {candidate.company || 'N/A'}</p>
          <p>Email: {candidate.email || 'N/A'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
          <div>
            <button onClick={saveCandidate}>+</button>
            <button onClick={skipCandidate}>-</button>
          </div>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;

