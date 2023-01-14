import { useState } from "react";

function PredictLogic() {
  const [data, setData] = useState(undefined);
  const [errors, setErrors] = useState(undefined);
  const [showExplanation, setShowExplanation] = useState(false);

  // Show loading or failed
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

    // Reset isFailed
    setIsFailed(false);

    // Show loading bar
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

    const response = await fetch("http://127.0.0.1:5041/api/predict", options);
    console.log(options);
    console.log(response);

    try {
      console.log("try");

      data = await response.json();
      console.log(data);

      if (result.errors.length > 0) {
        console.log("error");
        setErrors(data.errors);
        return;
      }
    } catch {
      console.log("catch");
      setIsFailed(true);
    }

    setData(data);
    setErrors(undefined);
    setIsLoading(false);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  // return {
  //     values: {
  //         label,
  //         icon,
  //         result,
  //         isLoading,
  //         isFailed
  //     },
  //     onClick: {
  //         fileUpload,
  //         reset,
  //         enableShapImg
  //     },
  //     onSubmit: {
  //         predict
  //     },
  //     onChange: {
  //         fileChange
  //     },
  //     set: {
  //         gender: setGender,
  //         age: setAge,
  //         education: setEducation,
  //         institution: setInstitution,
  //         student: setStudent,
  //         location: setLocation,
  //         load: setLoad,
  //         financial: setFinancial,
  //         internet: setInternet,
  //         network: setNetwork,
  //         duration: setDuration,
  //         lms: setLms,
  //         device: setDevice
  //     }
  // }

  return {
    result: {
        data,
        explanation: {
            show: showExplanation,
            toggle: toggleExplanation,
          },
    },
    values: {
      isFailed,
      isLoading,
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
