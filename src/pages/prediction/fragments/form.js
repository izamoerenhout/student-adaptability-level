// import SelectOption from "./select-option";

function Form(props) {
  const form = props.logic;

  //   const options_gender = [
  //     { value: "0.0", label: "Boy" },
  //     { value: "1.0", label: "Girl" },
  //   ];

  return (
    <>
      <div className="header">
        <div className="container predict">
          <h1>To make a prediction</h1>
          <div className="card bg-white pb-3">
            <h2>Find out how well you can adapted to online education</h2>

            <form onSubmit={form.onSubmit}>
              {form.errors !== undefined && (
                <>
                  <div
                    className="error-list"
                    role="alert"
                  >
                    <b>Oeps.. something went wrong:</b>
                    {form.errors.map((error, index) => {
                      return (
                        <div
                          className="form-error"
                          key={index}
                        >
                          {" "}
                          [-] {error}{" "}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="set">
                <label>
                  <b>What is your gender?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="gender1"
                      name="gender"
                      type="radio"
                      value={(form.data.gender = "0.0")}
                      onChange={(e) => form.set.gender(e.target.value)}
                    />
                    <label htmlFor="gender1">
                      Boy <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="gender2"
                      name="gender"
                      type="radio"
                      value={(form.data.gender = "1.0")}
                      onChange={(e) => form.set.gender(e.target.value)}
                    />
                    <label htmlFor="gender2">
                      Girl <span>(1.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>What is your age?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="age1"
                      name="age"
                      type="radio"
                      value={(form.data.age = "5.0")}
                      onChange={(e) => form.set.age(e.target.value)}
                    />
                    <label htmlFor="age1">
                      1-5 <span>(5.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="age2"
                      name="age"
                      type="radio"
                      value={(form.data.age = "4.0")}
                      onChange={(e) => form.set.age(e.target.value)}
                    />
                    <label htmlFor="age2">
                      6-10 <span>(4.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="age3"
                      name="age"
                      type="radio"
                      value={(form.data.age = "2.0")}
                      onChange={(e) => form.set.age(e.target.value)}
                    />
                    <label htmlFor="age3">
                      11-15 <span>(2.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="age4"
                      name="age"
                      type="radio"
                      value={(form.data.age = "1.0")}
                      onChange={(e) => form.set.age(e.target.value)}
                    />
                    <label htmlFor="age4">
                      16-20 <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="age5"
                      name="age"
                      type="radio"
                      value={(form.data.age = "0.0")}
                      onChange={(e) => form.set.age(e.target.value)}
                    />
                    <label htmlFor="age5">
                      21-25 <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="age6"
                      name="age"
                      type="radio"
                      value={(form.data.age = "3.0")}
                      onChange={(e) => form.set.age(e.target.value)}
                    />
                    <label htmlFor="age6">
                      26-30 <span>(3.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>What is your education level?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="education1"
                      name="education"
                      type="radio"
                      value={(form.data.education = "0.0")}
                      onChange={(e) => form.set.education(e.target.value)}
                    />
                    <label htmlFor="education1">
                      University <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="education2"
                      name="education"
                      type="radio"
                      value={(form.data.education = "1.0")}
                      onChange={(e) => form.set.education(e.target.value)}
                    />
                    <label htmlFor="education2">
                      College <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="education3"
                      name="education"
                      type="radio"
                      value={(form.data.education = "2.0")}
                      onChange={(e) => form.set.education(e.target.value)}
                    />
                    <label htmlFor="education3">
                      School <span>(2.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>What for type is your institution?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="institution1"
                      name="institution"
                      type="radio"
                      value={(form.data.institution = "0.0")}
                      onChange={(e) => form.set.institution(e.target.value)}
                    />
                    <label htmlFor="institution1">
                      Non Government <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="institution2"
                      name="institution"
                      type="radio"
                      value={(form.data.institution = "1.0")}
                      onChange={(e) => form.set.institution(e.target.value)}
                    />
                    <label htmlFor="institution2">
                      Government <span>(1.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>Are you an IT student?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="student1"
                      name="student"
                      type="radio"
                      value={(form.data.student = "1.0")}
                      onChange={(e) => form.set.student(e.target.value)}
                    />
                    <label htmlFor="student1">
                      Yes <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="student2"
                      name="student"
                      type="radio"
                      value={(form.data.student = "0.0")}
                      onChange={(e) => form.set.student(e.target.value)}
                    />
                    <label htmlFor="student2">
                      No <span>(0.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>Is your location in town?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="location1"
                      name="location"
                      type="radio"
                      value={(form.data.location = "0.0")}
                      onChange={(e) => form.set.location(e.target.value)}
                    />
                    <label htmlFor="location1">
                      Yes <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="location2"
                      name="location"
                      type="radio"
                      value={(form.data.location = "1.0")}
                      onChange={(e) => form.set.location(e.target.value)}
                    />
                    <label htmlFor="location2">
                      No <span>(1.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>How is your level of load-shedding?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="load1"
                      name="load"
                      type="radio"
                      value={(form.data.load = "0.0")}
                      onChange={(e) => form.set.load(e.target.value)}
                    />
                    <label htmlFor="load1">
                      Low <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="load2"
                      name="load"
                      type="radio"
                      value={(form.data.load = "1.0")}
                      onChange={(e) => form.set.load(e.target.value)}
                    />
                    <label htmlFor="load2">
                      High <span>(1.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>How is your financial condition?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="financial1"
                      name="financial"
                      type="radio"
                      value={(form.data.financial = "1.0")}
                      onChange={(e) => form.set.financial(e.target.value)}
                    />
                    <label htmlFor="financial1">
                      Poor <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="financial2"
                      name="financial"
                      type="radio"
                      value={(form.data.financial = "0.0")}
                      onChange={(e) => form.set.financial(e.target.value)}
                    />
                    <label htmlFor="financial2">
                      Mid <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="financial3"
                      name="financial"
                      type="radio"
                      value={(form.data.financial = "2.0")}
                      onChange={(e) => form.set.financial(e.target.value)}
                    />
                    <label htmlFor="financial3">
                      Rich <span>(2.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>Which type of internet do you use?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="internet1"
                      name="internet"
                      type="radio"
                      value={(form.data.internet = "0.0")}
                      onChange={(e) => form.set.internet(e.target.value)}
                    />
                    <label htmlFor="internet1">
                      Wifi <span>(0.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="internet2"
                      name="internet"
                      type="radio"
                      value={(form.data.internet = "1.0")}
                      onChange={(e) => form.set.internet(e.target.value)}
                    />
                    <label htmlFor="internet2">
                      Mobile Data <span>(1.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>Which type of network do you use?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="network1"
                      name="network"
                      type="radio"
                      value={(form.data.network = "2.0")}
                      onChange={(e) => form.set.network(e.target.value)}
                    />
                    <label htmlFor="network1">
                      2G <span>(2.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="network2"
                      name="network"
                      type="radio"
                      value={(form.data.network = "1.0")}
                      onChange={(e) => form.set.network(e.target.value)}
                    />
                    <label htmlFor="network2">
                      3G <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="network3"
                      name="network"
                      type="radio"
                      value={(form.data.network = "0.0")}
                      onChange={(e) => form.set.network(e.target.value)}
                    />
                    <label htmlFor="network3">
                      4G <span>(0.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>
                    What is the average duration of your classes on a daily
                    bases?
                  </b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="duration1"
                      name="duration"
                      type="radio"
                      value={(form.data.duration = "2.0")}
                      onChange={(e) => form.set.duration(e.target.value)}
                    />
                    <label htmlFor="duration1">
                      0 <span>(2.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="duration2"
                      name="duration"
                      type="radio"
                      value={(form.data.duration = "1.0")}
                      onChange={(e) => form.set.duration(e.target.value)}
                    />
                    <label htmlFor="duration2">
                      1-3 <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="duration3"
                      name="duration"
                      type="radio"
                      value={(form.data.duration = "0.0")}
                      onChange={(e) => form.set.duration(e.target.value)}
                    />
                    <label htmlFor="duration3">
                      3-6 <span>(0.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>Does your institution own LM's availability?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="lms1"
                      name="lms"
                      type="radio"
                      value={(form.data.lms = "1.0")}
                      onChange={(e) => form.set.lms(e.target.value)}
                    />
                    <label htmlFor="lms1">
                      Yes <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="lms2"
                      name="lms"
                      type="radio"
                      value={(form.data.lms = "0.0")}
                      onChange={(e) => form.set.lms(e.target.value)}
                    />
                    <label htmlFor="lms2">
                      No <span>(0.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <label>
                  <b>Which type of device do you use for study?</b>
                </label>
                <div className="group">
                  <div className="first-option">
                    <input
                      id="device1"
                      name="device"
                      type="radio"
                      value={(form.data.device = "2.0")}
                      onChange={(e) => form.set.device(e.target.value)}
                    />
                    <label htmlFor="device1">
                      Computer <span>(2.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="device2"
                      name="device"
                      type="radio"
                      value={(form.data.device = "1.0")}
                      onChange={(e) => form.set.device(e.target.value)}
                    />
                    <label htmlFor="device2">
                      Mobile Device <span>(1.0)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="device3"
                      name="device"
                      type="radio"
                      value={(form.data.device = "0.0")}
                      onChange={(e) => form.set.device(e.target.value)}
                    />
                    <label htmlFor="device3">
                      Tablet <span>(0.0)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="set">
                <div className="text-center">
                  <button
                    className="btn"
                    color="#af8fe9"
                    type="submit"
                  >
                    <span>Predict</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
