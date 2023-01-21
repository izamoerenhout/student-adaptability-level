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
              {/* <div className="row">
                    <SelectOption title={ "What is your gender?" } options={ options_gender } update={ form.set.gender } />
                </div> */}

              {/* </form> */}

              {/* <div className="px-lg-5 py-lg-5"> */}
              {/* <form onSubmit={form.onSubmit}> */}
              {/* <div className="row content-inside"> */}
              {/* <div className="col-12"> */}
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
              {/* </div> */}

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
                      <span>Boy</span>
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
                      <span>Girl</span>
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
                      <span>1-5</span>
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
                      <span>6-10</span>
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
                      <span>11-15</span>
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
                      <span>16-20</span>
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
                      <span>21-25</span>
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
                      <span>26-30</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* </div> */}

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
                      <span>University</span>
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
                      <span>College</span>
                    </label>
                  </div>
                  <div>
                    <input
                      id="education3"
                      name="eduction"
                      type="radio"
                      value={(form.data.education = "2.0")}
                      onChange={(e) => form.set.education(e.target.value)}
                    />
                    <label htmlFor="education3">
                      <span>School</span>
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
                      <span>Non Government</span>
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
                      <span>Government</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="row content-inside">
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">Are you an IT student?</label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="student1"
                        name="student"
                        type="radio"
                        value={(form.data.student = "1.0")}
                        onChange={(e) => form.set.student(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="student1"
                      >
                        <span>Yes</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="student2"
                        name="student"
                        type="radio"
                        value={(form.data.student = "0.0")}
                        onChange={(e) => form.set.student(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="student2"
                      >
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    Is your location in town?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="location1"
                        name="location"
                        type="radio"
                        value={(form.data.location = "0.0")}
                        onChange={(e) => form.set.location(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="location1"
                      >
                        <span>Yes</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="location2"
                        name="location"
                        type="radio"
                        value={(form.data.location = "1.0")}
                        onChange={(e) => form.set.location(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="location2"
                      >
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row content-inside">
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    How is your level of load-shedding?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="load1"
                        name="load"
                        type="radio"
                        value={(form.data.load = "0.0")}
                        onChange={(e) => form.set.load(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="load1"
                      >
                        <span>Low</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="load2"
                        name="load"
                        type="radio"
                        value={(form.data.load = "1.0")}
                        onChange={(e) => form.set.load(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="load2"
                      >
                        <span>High</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    How is your financial condition?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="financial1"
                        name="financial"
                        type="radio"
                        value={(form.data.financial = "1.0")}
                        onChange={(e) => form.set.financial(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="financial1"
                      >
                        <span>Poor</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="financial2"
                        name="financial"
                        type="radio"
                        value={(form.data.financial = "0.0")}
                        onChange={(e) => form.set.financial(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="financial2"
                      >
                        <span>Mid</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="financial3"
                        name="financial"
                        type="radio"
                        value={(form.data.financial = "2.0")}
                        onChange={(e) => form.set.financial(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="financial3"
                      >
                        <span>Rich</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row content-inside">
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    Which type of internet do you use?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="internet1"
                        name="internet"
                        type="radio"
                        value={(form.data.internet = "0.0")}
                        onChange={(e) => form.set.internet(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="internet1"
                      >
                        <span>Wifi</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="internet2"
                        name="internet"
                        type="radio"
                        value={(form.data.internet = "1.0")}
                        onChange={(e) => form.set.internet(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="internet2"
                      >
                        <span>Mobile Data</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    Which type of network do you use?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="network1"
                        name="network"
                        type="radio"
                        value={(form.data.network = "2.0")}
                        onChange={(e) => form.set.network(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="network1"
                      >
                        <span>2G</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="network2"
                        name="network"
                        type="radio"
                        value={(form.data.network = "1.0")}
                        onChange={(e) => form.set.network(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="network2"
                      >
                        <span>3G</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="network3"
                        name="network"
                        type="radio"
                        value={(form.data.network = "0.0")}
                        onChange={(e) => form.set.network(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="network3"
                      >
                        <span>4G</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row content-inside">
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    What is the average duration of your classes on a daily
                    bases?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="duration1"
                        name="duration"
                        type="radio"
                        value={(form.data.duration = "2.0")}
                        onChange={(e) => form.set.duration(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="duration1"
                      >
                        <span>0</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="duration2"
                        name="duration"
                        type="radio"
                        value={(form.data.duration = "1.0")}
                        onChange={(e) => form.set.duration(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="duration2"
                      >
                        <span>1-3</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="duration3"
                        name="duration"
                        type="radio"
                        value={(form.data.duration = "0.0")}
                        onChange={(e) => form.set.duration(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="duration3"
                      >
                        <span>3-6</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    Does your institution own LM's availability?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="lms1"
                        name="lms"
                        type="radio"
                        value={(form.data.lms = "1.0")}
                        onChange={(e) => form.set.lms(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="lms1"
                      >
                        <span>Yes</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="lms2"
                        name="lms"
                        type="radio"
                        value={(form.data.lms = "0.0")}
                        onChange={(e) => form.set.lms(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="lms2"
                      >
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row content-inside">
                <div className="col-md-12 col-lg-6">
                  <label className="form-label">
                    Which type of device do you use for study?
                  </label>
                  <div className="row ml-1 mb-3">
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="device1"
                        name="device"
                        type="radio"
                        value={(form.data.device = "2.0")}
                        onChange={(e) => form.set.device(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="device1"
                      >
                        <span>Computer</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="device2"
                        name="device"
                        type="radio"
                        value={(form.data.device = "1.0")}
                        onChange={(e) => form.set.device(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="device2"
                      >
                        <span>Mobile Device</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio pr-3">
                      <input
                        className="custom-control-input"
                        id="device3"
                        name="device"
                        type="radio"
                        value={(form.data.device = "0.0")}
                        onChange={(e) => form.set.device(e.target.value)}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="device3"
                      >
                        <span>Tablet</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  className="btn"
                  color="#af8fe9"
                  type="submit"
                >
                  <span>Predict</span>
                </button>
              </div>
              {/* </form> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
