import { Link } from "react-router-dom";
import student from "./_shared/images/student.png";

function Home() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="info-text">
            <h1>Test your adaptability level!</h1>
            <h3>
              How well can you adapt to online education or working online?
            </h3>
            <p>
              Have you ever wondered why you find it difficult to take the class
              online? That must have been the case during the Covid-19 period.
              Take the test and find out if taking online classes is for you or
              find out which factors are causing you to fail.
            </p>

            <Link
              to="/predict"
              className="btn"
            >
              <span>Click here to start</span>
            </Link>

            <br />

            
          </div>
          
          <img
              src={student}
              alt="tired student"
              height={"200px"}
            />
        </div>
      </div>
    </>
  );
}

export default Home;
