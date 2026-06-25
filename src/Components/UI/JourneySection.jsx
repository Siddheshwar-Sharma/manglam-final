import "./JourneySection.css";

export const JourneySection = () => {
  const journeyData = [
    {
      year: "1995",
      title: "Manglam Group Founded",
      description:
        "Beginning of a visionary journey that transformed Rajasthan's real estate landscape.",
    },
    {
      year: "2000",
      title: "Township Expansion",
      description:
        "Expanded into residential projects and integrated township developments across Rajasthan.",
    },
    {
      year: "2012",
      title: "Builder of the Year Award",
      description:
        "Honoured by Former Rajasthan Chief Minister Shri Ashok Gehlot Ji for excellence in real estate.",
    },
    {
      year: "2013",
      title: "BCI Award",
      description:
        "Manglam Aananda received recognition for outstanding project quality and innovation.",
    },
  ];

  return (
    <section className="journey-section">
      <div className="container">
        <div className="journey-heading text-center mx-auto">
          <h5>OUR JOURNEY</h5>

          <h2>
            The Evolution of <span>Manglam Group</span>
          </h2>
        </div>

        <div className="journey-timeline position-relative">
          <div className="journey-line d-none d-lg-block"></div>

          <div className="row g-4">
            {journeyData.map((item, index) => (
              <div
                key={item.year}
                className={`col-12 col-md-6 col-lg-3 d-flex ${
                  index % 2 !== 0 ? "journey-down" : "journey-up"
                }`}
              >
                <div className="journey-card">
                  <div className="journey-year">{item.year}</div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span
                    className={`journey-dot d-none d-lg-block ${
                      index % 2 === 0 ? "journey-dot-bottom" : "journey-dot-top"
                    }`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};