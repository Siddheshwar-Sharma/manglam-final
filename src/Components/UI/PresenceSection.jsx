import {
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaAward,
} from "react-icons/fa";

import "./PresenceSection.css";
import mapImage from "../../assets/images/map.png";

const presenceStats = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    number: "30+",
    label: "Cities",
  },
  {
    id: 2,
    icon: <FaBuilding />,
    number: "85+",
    label: "Projects",
  },
  {
    id: 3,
    icon: <FaUsers />,
    number: "41,000+",
    label: "Families",
  },
  {
    id: 4,
    icon: <FaAward />,
    number: "30+",
    label: "Years of Excellence",
  },
];

export const PresenceSection = () => {
  return (
    <section className="presence-section">
      <div className="container">
        <div className="presence-heading text-center">
          <h5>TRUSTED ACROSS CITIES</h5>

          <h2>
            Our <span>Presence</span>
          </h2>
        </div>

        <div className="presence-map mx-auto">
          <img
            src={mapImage}
            alt="Manglam Presence Map"
            className="img-fluid"
          />
        </div>

        <div className="presence-stats mx-auto">
          <div className="row g-4">
            {presenceStats.map((item) => (
              <div key={item.id} className="col-6 col-lg-3">
                <div className="presence-stat-box">
                  <div className="presence-icon">{item.icon}</div>

                  <h3>{item.number}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};