import PredictLogic from "./predict-logic";
import Loading from "./fragments/loading";
import Form from "./fragments/form";
import Result from "./fragments/result";

function Predict() {
  let { values, form, result } = new PredictLogic();

  return (
    <>
      <div className="header">
        <div className="container">
              {/* SHOW PREDICTION FORM */}
              {result.res === undefined && !values.isLoading && (
                <Form logic={form} />
              )}

              {/* SHOW RESULT FROM PREDICTION */}
              {result.res !== undefined && (
                <Result logic={result} />
              )}

              {/* SHOW LOADING SPINNER */}
              {values.isLoading && (
                <Loading logic={{ form, values }} />
              )}

        </div>
      </div>
    </>
  );
}

export default Predict;
