import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: '10px', margin: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Candidate Search</Link>
        </li>
        <li>
          <Link to="/SavedCandidates" style={{ textDecoration: 'none', color: 'white' }}>Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
