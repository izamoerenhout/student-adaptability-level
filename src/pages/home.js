import { Link } from "react-router-dom";
import student_tired from "./_shared/images/student.png";
import student_chat from "./_shared/images/student-chat.jpg";

function Home() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="inside">
            <div className="info-text">
              <h1>Test your adaptability level!</h1>
              <h3>
                How well can you adapt to online education or working online?
              </h3>
              <p>
                Have you ever wondered why you find it difficult to take the
                class online? That must have been the case during the Covid-19
                period. Take the test and find out if taking online classes is
                for you or find out which factors are causing you to fail.
              </p>

              <Link
                to="/predict"
                className="btn"
              >
                <span>Click here to start</span>
              </Link>
            </div>

            <img
              src={student_tired}
              alt="tired student"
              className="img-tired"
            />
          </div>

          <div className="inside">
            <div className="info-text">
              <h3>How does it work?</h3>

              <Link
                to="/about"
                className="btn"
              >
                <span>Click here for more explanation</span>
              </Link>
            </div>

            <img
              src={student_chat}
              alt="question"
              className="img-chat"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
