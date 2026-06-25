import "./BusinessSection.css";

import realEstate from "../../assets/images/img1.jpg";
import hospitality from "../../assets/images/img2.jpg";
import medical from "../../assets/images/img3.jpg";
import entertainment from "../../assets/images/img4.jpg";

import { FaArrowRight } from "react-icons/fa";

const businessData = [
  {
    id: 1,
    title: "Building More Than Homes. Creating Belonging.",
    description:
      "At Manglam, we believe a home is where life's most cherished moments unfold. From first beginnings to lifelong memories, our developments are designed to foster connections, nurture aspirations, and create communities where generations flourish together.",
    image: realEstate,
  },
  {
    id: 2,
    title: "Where Every Stay Becomes a Memory",
    description:
      "The hospitality is not measured by luxury alone, but by the warmth people carry home with them. Through thoughtfully crafted experiences and heartfelt service, we create destinations that bring comfort, connection, and moments worth remembering.",
    image: hospitality,
  },
  {
    id: 3,
    title: "Caring for Life's Most Precious Gift.",
    description:
      "Health is the foundation upon which every life is built. Guided by compassion and excellence, our healthcare initiatives are dedicated to supporting individuals and families through every stage of life, delivering care that inspires confidence and hope.",
    image: medical,
  },
  {
    id: 4,
    title: "Celebrating Joy. Creating Shared Memories",
    description:
      "Some of life's most meaningful moments are the ones spent together. Our entertainment ventures are designed to bring smiles, spark excitement, and create experiences that families and communities treasure for years to come.",
    image: entertainment,
  },
];

export const BusinessSection = () => {
  return (
    <section className="business-section">
      <div className="container">
        <div className="business-heading text-center mx-auto">
          <span className="section-tag">OUR VERTICALS</span>

          <h2>
            Four Verticals. <span>One Enduring Vision.</span>
          </h2>

          <p>
            For decades, Manglam Group has transformed aspirations into
            realities. Across diverse verticals, we continue to craft
            destinations, experiences, and services that elevate lifestyles and
            inspire generations.
          </p>
        </div>

        <div className="business-container">
          {businessData.map((item, index) => (
            <div
              key={item.id}
              className="row align-items-center gy-4 gy-lg-0 business-card"
            >
              <div
                className={`col-12 col-lg-6 ${
                  index % 2 !== 0 ? "order-lg-2" : ""
                }`}
              >
                <div className="business-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>

              <div
                className={`col-12 col-lg-6 ${
                  index % 2 !== 0 ? "order-lg-1" : ""
                }`}
              >
                <div className="business-content text-center text-lg-start mx-auto">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a href="#" className="explore-btn">
                    Explore More
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};