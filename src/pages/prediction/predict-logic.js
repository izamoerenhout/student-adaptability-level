import { useState } from "react";

function PredictLogic() {
  const [res, setResult] = useState(undefined);
  const [errors, setErrors] = useState(undefined);
  const [showExplanation, setShowExplanation] = useState(false);

  // Show loading
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  // Features
  const [gender, setGender] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [education, setEducation] = useState(undefined);
  const [institution, setInstitution] = useState(undefined);
  const [student, setStudent] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [load, setLoad] = useState(undefined);
  const [financial, setFinancial] = useState(undefined);
  const [internet, setInternet] = useState(undefined);
  const [network, setNetwork] = useState(undefined);
  const [duration, setDuration] = useState(undefined);
  const [lms, setLms] = useState(undefined);
  const [device, setDevice] = useState(undefined);

  // Handles when the form is submitted, so it can make the prediction
  const onSubmit = async (event) => {
    // The form has default behavior that we don't need
    event.preventDefault();

    setIsFailed(false);
    setIsLoading(true);

    // Get the file so when can include in our prediction request
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Gender: gender,
        Age: age,
        "Education Level": education,
        "Institution Type": institution,
        "IT Student": student,
        Location: location,
        "Load-shedding": load,
        "Financial Condition": financial,
        "Internet Type": internet,
        "Network Type": network,
        "Class Duration": duration,
        "Self Lms": lms,
        Device: device,
      }),
    };

    // const response = await fetch("http://127.0.0.1:5041/api/predict", options);
    const response = await fetch("https://iza.hcaid.nl/api/predict", options);

    const res = await response.json();
    console.log(res);

    if (res.errors.length > 0) {
      console.log("error");
      setErrors(res.errors);
      setIsLoading(false);
      setIsFailed(true);
      return;
    }

    setResult(res);
    setErrors(undefined);
    setIsLoading(false);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return {
    result: {
        res,
        explanation: {
            show: showExplanation,
            toggle: toggleExplanation,
          },
    },
    values: {
      isLoading,
      isFailed
    },
    form: {
      errors,
      data: {
        gender,
        age,
        education,
        institution,
        student,
        location,
        load,
        financial,
        internet,
        network,
        duration,
        lms,
        device,
      },
      set: {
        gender: setGender,
        age: setAge,
        education: setEducation,
        institution: setInstitution,
        student: setStudent,
        location: setLocation,
        load: setLoad,
        financial: setFinancial,
        internet: setInternet,
        network: setNetwork,
        duration: setDuration,
        lms: setLms,
        device: setDevice,
      },
      onSubmit,
    },
  };
}

export default PredictLogic;
