import React from "react";
import icon_location from "../assets/desktop/icon-location.svg";

const ModalSearch = ({
  handleSubmit,
  description,
  setDescription,
  location,
  setLocation,
  fullTime,
  setFullTime,
}) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="modal-search">
      <form onSubmit={handleSubmit}>
        <div className="input-group" id="search">
          <input
            type="text"
            placeholder="Filter by title…"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="filter" onClick={() => setModalOpen(true)}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                fill="#6E8098"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="btn" onClick={handleSubmit}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#FFFFFF"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
        <div
          className="modal"
          style={{
            display: modalOpen ? "flex" : "none",
          }}
        >
          <div className="modal-bg" onClick={() => setModalOpen(false)} />
          <div className="modal-content">
            <div className="input-group" id="location">
              <img src={icon_location} alt="Location" />
              <input
                type="text"
                placeholder="Filter by location…"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="input-group" id="full-time">
              <label className="checkbox-container">
                <input type="checkbox" value={fullTime} onChange={(e) => setFullTime(!fullTime)} />
                <span className="checkmark"></span>
                Full Time Only
              </label>
              <button type="submit" onClick={() => setModalOpen(false)}>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalSearch;
