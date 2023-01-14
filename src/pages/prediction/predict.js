import PredictLogic from "./predict-logic";
import Loading from "./fragments/loading";
import Form from "./fragments/form";
import Result from "./fragments/result";
import { Link } from "react-router-dom";

function Predict() {
  // let { values, onClick, onSubmit, onChange, set } = new PredictLogic();
  let { values, form, result } = new PredictLogic();

  return (
    <>
      <div className="header">
        <div className="container">
          {/* <div className="col-12">
            <div className="card"> */}
              {/* SHOW PREDICTION FORM */}
              {/* {values.result === undefined && !values.isLoading && (
                <Form logic={{ values, onClick, onSubmit, onChange, set }} />
              )} */}

              {result.data === undefined && !values.isLoading && (
                <Form logic={form} />
              )}

              {/* SHOW RESULT FROM PREDICTION */}
              {result.data !== undefined && (
                <Result logic={result} />
              )}

              {/* SHOW LOADING SPINNER */}
              {values.isLoading && (
                <Loading logic={{ form, values }} />
              )}

              {/* SHOW LOADING SPINNER */}
              {values.isFailed && (
                <div
                  className="alert alert-danger"
                  role="alert"
                >
                  Something went wrong!
                </div>
              )}
            {/* </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Predict;
