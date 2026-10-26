import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Dev &amp; AI Intern</h4>
                <h5>AAROHAAN AI Program • Paderu, India</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Participating in a rigorous one-year training program focused on
              complete web development and practical AI integration. Building
              responsive websites using HTML5, CSS3, and JavaScript, while
              implementing AI capabilities and maintaining repositories on
              GitHub.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science</h4>
                <h5>Andhra University • Araku Valley</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed B.Sc. degree, establishing a disciplined analytical
              foundation, logical reasoning, and methodical problem-solving
              abilities applied directly to software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (10+2)</h4>
                <h5>B.V.K Junior College • Visakhapatnam</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Completed intermediate secondary education (+2) with focus on
              science stream, developing strong quantitative aptitude and
              curiosity for computing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School</h4>
                <h5>Modamamba Vidya Kendram • Paderu</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Completed Class 10 board schooling with distinction, laying the
              foundations for strong communication, teamwork, and proactive
              learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
