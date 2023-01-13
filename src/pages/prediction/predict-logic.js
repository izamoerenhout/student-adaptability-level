import {useRef, useState} from "react";

function PredictLogic() {
    const [result, setResult] = useState(undefined);
    const [errors, setErrors] = useState(undefined);

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
    const predict = async (event) => {
        // The form has default behavior that we don't need
        event.preventDefault();

        // Reset isFailed
        setIsFailed(false);

        // Show loading bar
        setIsLoading(true);

        // Get the file so when can include in our prediction request
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "Gender": gender,
                "Age": age,
                "Education Level": education,
                "Institution Type": institution,
                "IT Student": student,
                "Location": location,
                "Load-shedding": load,
                "Financial Condition": financial,
                "Internet Type": internet,
                "Network Type": network,
                "Class Duration": duration,
                "Self Lms": lms,
                "Device": device
            })
        };

        const url = await fetch("http://127.0.0.1:5041/api/predict");


        try {
            const response = await fetch(url, options);
            result = await response.json();

            if (result.errors.length > 0) {
                setErrors(result.errors);
                return;
            }
        } catch {
            setIsFailed(true);
        }

        setResult(result);
        setErrors(undefined);
        setIsLoading(false);
    }

    return {
        values: {
            label,
            icon,
            result,
            isLoading,
            isFailed
        },
        onClick: {
            fileUpload,
            reset,
            enableShapImg
        },
        onSubmit: {
            predict
        },
        onChange: {
            fileChange
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
            device: setDevice
        }
    }
}

export default PredictLogic;