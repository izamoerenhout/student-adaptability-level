// import { v4 as uuid } from "uuid";

function Result(props) {
  const result = props.logic;

  return (
    <>
      <div className="header">
        <div className="container">
          <h1>Result</h1>
          {result.res["adaptability"]}

          <img src={"data:image/png;base64, " + result.res["shap-img"]} alt="shap" height={"300px"} />

          <p>hier komt de shap image</p>
          <p>komt de uitleg van de voorspelling</p>

          {/* {form.data.financial !== 1.0 && (
              <p>Hier zijn opties om het thuis fijner te maken om online te studeren</p>
          )} */}
        </div>
      </div>
    </>
  );
}

export default Result;
