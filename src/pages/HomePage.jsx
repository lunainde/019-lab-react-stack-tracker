//pages/HomePage.jsx

import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <ul className="companies-list">
        {companies.map((company) => (
          <li key={company.id} className="list-item">
            <Link to={`/company/${company.slug}`}>
              <spam className="company-name">{company.name}</spam>
              <br></br>
              <img src={company.logo} alt="" className="company-logo" />
            </Link>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;