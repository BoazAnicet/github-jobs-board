import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function JobCard({
  id,
  type,
  // url,
  created_at,
  company,
  // company_url,
  location,
  title,
  // description,
  // how_to_apply,
  company_logo,
}) {
  return (
    <div className="job-card">
      <Link to={`/job-listing/${id}`}>
        <div className="date">
          {moment(created_at).fromNow()} &bull; {type}
          {/* {moment(created_at).fromNow()} &bull; {type} */}
        </div>
        <h3 className="job-title">{title}</h3>
        <div className="company">{company}</div>
        <h4 className="location">{location}</h4>
        <img className="logo" src={company_logo} alt={company} />
      </Link>
    </div>
  );
}

export default JobCard;
