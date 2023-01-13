import PredictLogic from "./predict-logic";
import Loading from "./fragments/loading";
import Form from "./fragments/form";
import Result from "./fragments/result";
import { Link } from "react-router-dom";

function Predict() {
  let { values, onClick, onSubmit, onChange, set } = new PredictLogic();

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="col-12">
            <div className="card">
              {/* SHOW PREDICTION FORM */}
              {/* {values.result === undefined && !values.isLoading && (
                <Form logic={{ values, onClick, onSubmit, onChange, set }} />
              )} */}

              {values.result === undefined && !values.isLoading && (
                <Form logic={{ values, onClick, onSubmit, onChange, set }} />
              )}

              {/* SHOW RESULT FROM PREDICTION */}
              {values.result !== undefined && (
                <Result logic={{ values, onClick, onSubmit, onChange, set }} />
              )}

              {/* SHOW LOADING SPINNER */}
              {values.isLoading && (
                <Loading logic={{ values, onClick, onSubmit, onChange, set }} />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Predict;
