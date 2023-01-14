import { Link } from "react-router-dom";
import student from "./_shared/images/student.png";

function Home() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className=".col-8 .col-md-4">
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
            </div>
            <div className=".col-4 .col-md-2">
              <img
                src={student}
                alt="tired student"
              />
            </div>
          </div>
          <Link
            to="/predict"
            className="btn roboto"
          >
            <span>Click here to start</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
