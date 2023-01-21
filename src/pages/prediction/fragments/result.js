// import { v4 as uuid } from "uuid";

function Result(props) {
  const result = props.logic;

  return (
    <>
      <div className="header">
        <div className="container predict">
          <h1>Your result</h1>
          <h3>Your adaptability level is: {result.res["adaptability"]}</h3>
          <h4></h4>
          <img
            src={"data:image/png;base64, " + result.res["shap-img"]}
            alt="shap"
            className="img-shap"
          />
          <p>How does this shap image work?</p>
          Informatie: {result.res["content"]["Gender"]}
        </div>
      </div>
    </>
  );
}

export default Result;
