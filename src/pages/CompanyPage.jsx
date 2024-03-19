import { useParams, Link } from "react-router-dom";

// the company slug should be available as a URL parameter.
function CompanyPage({ companies }) {
  const {companySlug} = useParams();
  const companyDetails = companies.find(company => company.slug === companySlug);


  return (
    <div>
    <h1>Company Profile</h1>
      <div className="container-center">
        <div className="company-details">
          <div className="details-logo"><img className="details-logo" src={companyDetails.logo} alt="" /></div>
          <div className="details-info">
            <h2>{companyDetails.name}</h2>
            <b>About</b>
            <p>{companyDetails.description}</p>
          </div>
        </div>
      </div>


      <div className="container">
        <ul>
          <div className="logo-slide">
          {companyDetails.techStack.map(tech => (
            <li key={tech.slug}>
              <Link to={`/tech/${tech.slug}`}>
                <img src={tech.image} alt={tech.name} className="logo" />
                <span>{tech.name}</span>
              </Link>
            </li>
          ))}
          </div>
        </ul>
      </div>

    </div>

  );
}

export default CompanyPage;

//https://reactrouter.com/en/6.10.0/hooks/use-params
