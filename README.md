# Student Adaptability Level Predictor App
The frontend app is live on: https://izamoerenhout.github.io/student-adaptability-level/ <br />
The API runs on: https://iza.hcaid.nl/

## How do you make a prediction for a specific category?
A student's level of adaptability can be classified into three categories, namely:
* Low
* Moderated
* High

### Example for Low Adaptability Level
```json
{
    "Gender": 0.0, 
    "Age": 0.0, 
    "Education Level": 0.0, 
    "Institution Type": 0.0, 
    "IT Student": 0.0, 
    "Location": 0.0, 
    "Load-shedding": 1.0, 
    "Financial Condition": 0.0, 
    "Internet Type": 0.0, 
    "Network Type": 0.0, 
    "Class Duration": 1.0, 
    "Self Lms": 0.0, 
    "Device": 2.0
}
```

### Example for Moderated Adaptability Level
```json
{
    "Gender": 1.0, 
    "Age": 0.0, 
    "Education Level": 1.0, 
    "Institution Type": 1.0, 
    "IT Student": 1.0, 
    "Location": 0.0, 
    "Load-shedding": 1.0, 
    "Financial Condition": 1.0, 
    "Internet Type": 0.0, 
    "Network Type": 1.0, 
    "Class Duration": 1.0, 
    "Self Lms": 0.0, 
    "Device": 1.0
}
```

### Example for High Adaptability Level
```json
{
    "Gender": 1.0, 
    "Age": 1.0, 
    "Education Level": 1.0, 
    "Institution Type": 1.0, 
    "IT Student": 1.0, 
    "Location": 1.0, 
    "Load-shedding": 1.0, 
    "Financial Condition": 2.0, 
    "Internet Type": 1.0, 
    "Network Type": 1.0, 
    "Class Duration": 1.0, 
    "Self Lms": 1.0, 
    "Device": 1.0
}
```


