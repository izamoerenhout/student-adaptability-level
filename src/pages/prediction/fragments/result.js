// import { v4 as uuid } from "uuid";

function Result(props) {
  const result = props.logic;

  return (
    <>
      <div className="header">
        <div className="container predict">
          <h1>Your result</h1>
          <h3>Your adaptability level is: {result.res["adaptability"]}</h3>
          <p className="trust-text">
            <i>
              Don't worry if the result is low or moderated. It is almost
              impossible to score high on the level of attention in online
              classes. For example, Education First (
              <a href="https://www.ef.nl/blog/language/online-lessen-vs-naar-school-wat-is-beter/">
                EF
              </a>
              ) writes that face-to-face learning wins over taking the lesson
              online. However, there will always be students who like to take
              lessons in their own environment, for example it can be easier to
              ask a question than in a room full of students.
            </i>
          </p>

          <img
            src={"data:image/png;base64, " + result.res["shap-img"]}
            alt="shap"
            className="img-shap"
          />

          <div className="inside">
            <div className="info-text">
              <p>How does this shap image work?</p>
              Informatie: {result.res["content"]["Gender"]}
            </div>

            <div className="clip">
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/SMpDr6pVNfE"
                alt="tips for online school"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
