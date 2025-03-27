import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ScholarshipTypes = () => {
  return (
    <>
      <section id="services">
        <div className="container service-section">
          <br />
          <Row>
            <div className="grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
              <div className="grid-col-item">
                <Card>
                  <Card.Body>
                    <div className="icon">{/* SVG Icon */}</div>
                    <div className="featured_info">
                      <span>Merit-Based Scholarship</span>
                      <p>
                        Awarded to students who have demonstrated outstanding academic excellence and achievements in their respective fields.
                      </p>
                      <Link to={"/merit-based-scholarships"}>
                        <Button variant="primary" style={{ width: "200px" }}>View Scholarships</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="grid-col-item">
                <Card>
                  <Card.Body>
                    <div className="icon">{/* SVG Icon */}</div>
                    <div className="featured_info">
                      <span>Financial Aid Scholarship</span>
                      <p>
                        Designed to provide financial aid to students from economically disadvantaged backgrounds to support their education.
                      </p>
                      <Link to={"/need-based-scholarships"}>
                        <Button variant="primary" style={{ width: "200px" }}>View Scholarships</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="grid-col-item">
                <Card>
                  <Card.Body>
                    <div className="icon">{/* SVG Icon */}</div>
                    <div className="featured_info">
                      <span>International Scholarships</span>
                      <p>
                        Financial assistance for students aiming to study abroad, covering tuition fees, travel, and living expenses.
                      </p>
                      <Link to={"/international-based-scholarships"}>
                        <Button variant="primary" style={{ width: "200px" }}>View Scholarships</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Row>
          <Row>
            <div className="grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
              <div className="grid-col-item">
                <Card>
                  <Card.Body>
                    <div className="icon">{/* SVG Icon */}</div>
                    <div className="featured_info">
                      <span>Minority Scholarship</span>
                      <p>
                        Scholarships aimed at supporting students from minority communities to promote educational diversity and inclusion.
                      </p>
                      <Link to={"/minority-based-scholarships"}>
                        <Button variant="primary" style={{ width: "200px" }}>View Scholarships</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="grid-col-item">
                <Card>
                  <Card.Body>
                    <div className="icon">{/* SVG Icon */}</div>
                    <div className="featured_info">
                      <span>Research Scholarship</span>
                      <p>
                        Funding opportunities for students engaged in innovative research projects in various fields of study.
                      </p>
                      <Link to={"/research-based-scholarships"}>
                        <Button variant="primary" style={{ width: "200px" }}>View Scholarships</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="grid-col-item">
                <Card>
                  <Card.Body>
                    <div className="icon">{/* SVG Icon */}</div>
                    <div className="featured_info">
                      <span>All Scholarships</span>
                      <p>
                        Explore a comprehensive list of scholarships available for various academic levels and disciplines.
                      </p>
                      <Link to="/view-scholarships">
                        <Button variant="primary" style={{ width: "200px" }}>View Scholarships</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ScholarshipTypes;
