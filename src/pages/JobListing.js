import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";

function JobListing() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState({});
  const { id } = useParams();

  const fetchJob = async () => {
    const res = await axios
      .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
      .then((res) => setJob(res.data))
      .then((res) => setLoading(false));
  };

  useEffect(() => {
    fetchJob();
  }, []);

  const {
    company_logo,
    company,
    company_url,
    created_at,
    type,
    title,
    location,
    description,
    how_to_apply,
  } = job;

  return !loading ? (
    <>
      <section id="job-listing">
        <div className="container">
          <div className="job-listing-header">
            <div className="logo">
              <img src={company_logo} alt={company} />
            </div>
            <div className="text">
              <div>
                <h3 style={{ wordBreak: "break-word" }}>{company}</h3>
                {company_url ? (
                  <span>
                    {company_url.replace("www.", "").replace("https://", "").replace("http://", "")}
                  </span>
                ) : (
                  ""
                )}
              </div>
              {company_url ? (
                <a className="btn light" href={company_url}>
                  Company Site
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="details">
            <div className="company-info">
              <div>
                <div className="date">
                  {moment(created_at).fromNow()} &bull; {type}
                </div>
                <h3 className="job-title">{title}</h3>
                <h4 className="location">{location}</h4>
              </div>
              <a className="btn" href={company_url}>
                Apply Now
              </a>
            </div>
            <div
              style={{ wordBreak: "break-word" }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="details-footer">
            <h2>How to Apply</h2>
            <div
              style={{ wordBreak: "break-word" }}
              dangerouslySetInnerHTML={{ __html: how_to_apply }}
            />
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="content">
            <div className="text">
              <h3>{title}</h3>
              {company_url ? (
                <span>
                  {company_url.replace("www.", "").replace("https://", "").replace("http://", "")}
                </span>
              ) : (
                ""
              )}
            </div>
            <a className="btn" href={company_url}>
              Apply Now
            </a>
          </div>
        </div>
      </footer>
    </>
  ) : (
    ""
  );
}

export default JobListing;
