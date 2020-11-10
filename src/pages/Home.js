import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalSearch from "../components/ModalSearch";
import JobCard from "../components/JobCard";
import axios from "axios";

function Home() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadedAll, setLoadedAll] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      setFetching(true);
      setErrorMessage("");
      setLoadedAll(false);
      setPage(1);
      setJobs([]);
      const res = await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}&page=1`
        )
        .then((res) => {
          if (res.data.length === 0) {
            setErrorMessage("No results found!");
          } else {
            setJobs(res.data);
          }
        })
        .then(setFetching(false));
    } catch (error) {
      setFetching(false);
    }
  };

  const handleLoadMore = async (e) => {
    e.preventDefault();

    if (loadedAll) return;

    try {
      setFetching(true);
      const res = await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}&page=${
            page + 1
          }`
        )
        .then((res) => {
          if (res.data.length === 0) setLoadedAll(true);

          setJobs(jobs.concat(res.data));
        })
        .then(setFetching(false))
        .then(setPage(page + 1));
    } catch (error) {
      setFetching(false);
    }
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        description={description}
        location={location}
        fullTime={fullTime}
        setDescription={setDescription}
        setLocation={setLocation}
        setFullTime={setFullTime}
      />
      <ModalSearch
        handleSubmit={handleSubmit}
        description={description}
        location={location}
        fullTime={fullTime}
        setDescription={setDescription}
        setLocation={setLocation}
        setFullTime={setFullTime}
      />
      <div className="container">
        <div className="error-message">{errorMessage}</div>
        <div className="job-grid">
          {jobs.map((j, i) => (
            <JobCard
              key={j.id}
              id={j.id}
              type={j.type}
              url={j.url}
              created_at={j.created_at}
              company={j.company}
              company_url={j.company_url}
              location={j.location}
              title={j.title}
              description={j.description}
              how_to_apply={j.how_to_apply}
              company_logo={j.company_logo}
            />
          ))}
        </div>
        {jobs.length > 0 && !loadedAll ? (
          <form
            onSubmit={handleLoadMore}
            style={{ width: "100%", display: "flex", justifyContent: "center", margin: "40px 0" }}
          >
            <button>Load More</button>
          </form>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
