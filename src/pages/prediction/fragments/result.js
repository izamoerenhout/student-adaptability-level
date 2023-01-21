// import { v4 as uuid } from "uuid";

function Result(props) {
  const result = props.logic;

  return (
    <>
      <div className="header">
        <div className="container predict">
          <h1>Result</h1>
          {result.res["adaptability"]}

          <img src={"data:image/png;base64, " + result.res["shap-img"]} alt="shap" height={"300px"} />

          <p>komt de uitleg van de voorspelling</p>

          Informatie: {result.res["content"]["Gender"]}
        </div>
      </div>
    </>
  );
}

export default Result;
