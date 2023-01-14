// import { v4 as uuid } from "uuid";

function Result(props) {
  const result = props.logic;

  return (
    <>
      <h1>Result</h1>
      {result.data['adaptability']}
    </>
  );
}

export default Result;
