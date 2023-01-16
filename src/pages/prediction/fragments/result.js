// import { v4 as uuid } from "uuid";

function Result(props) {
  const result = props.logic;

  return (
    <>
      <div className="header">
        <div className="container">
          <h1>Result</h1>
          {result.res["adaptability"]}
        </div>
      </div>
    </>
  );
}

export default Result;
