// import { v4 as uuid } from "uuid";

function Result(props) {
  const result = props.logic;

  return (
    <>
      <div className="header">
        <div className="container predict">
          <h1>Your result</h1>
          <h3>Your adaptability level is: {result.res["adaptability"]}</h3>
          <p className="trust-text">
            <i>
              Don't worry if the result is low or moderated. It is almost
              impossible to score high on the level of attention in online
              classes. For example, Education First (
              <a target="_blank" href="https://www.ef.nl/blog/language/online-lessen-vs-naar-school-wat-is-beter/">
                EF
              </a>
              ) writes that face-to-face learning wins over taking the lesson
              online. However, there will always be students who like to take
              lessons in their own environment, for example it can be easier to
              ask a question than in a room full of students.
            </i>
          </p>

          <img
            src={"data:image/png;base64, " + result.res["shap-img"]}
            alt="shap"
            className="img-shap"
          />

          <div className="inside">
            <div className="info-text">
              <h3>Tips and advice based on your answers</h3>
              <ul>
                {result.res["content"]["Age"] > "3.0" && (
                  <li>
                    Based on your age, it is wise to give the online lessons
                    some time, because the concentration level is somewhat lower
                    than with people who are slightly older.
                  </li>
                )}
                {result.res["content"]["Financial Condition"] == "2.0" &&
                  result.res["adaptability"] == "1.0" && (
                    <li>
                      You indicated that you are in good shape financially. You
                      can consider looking for better resources, such as
                      headphones with noise canceling or a good office chair for
                      at home.
                    </li>
                  )}
                {result.res["content"]["Load-shedding"] == "1.0" && (
                  <li>
                    You indicated that your load shedding is high. We recommend
                    that you check whether working with a schedule and
                    distributing the tasks can already help to reduce the
                    workload. Another suggestion we would like to make is to
                    talk to your mentor to look at your study load together.
                  </li>
                )}
                {result.res["content"]["Device"] != "2.0" && (
                  <li>
                    You indicated that you do not use a computer for your
                    studies. It may be that the school or study asks you to work
                    with a tablet. We do advise you to use a mobile phone as
                    little as possible, because other apps can be quite
                    distracting. We advise you to use a good screen for studying
                    and preferably also a fixed workplace.
                  </li>
                )}
                {result.res["content"]["Internet Type"] == "0.0" &&
                  result.res["content"]["Financial Condition"] != "1.0" && (
                    <li>
                      You indicated that you already use WiFi, but if it does
                      not work properly, we have the following tip. Try
                      connecting an ethernet cable to your modem, this should
                      make your internet faster and more stable.
                    </li>
                  )}
                {result.res["content"]["Internet Type"] == "1.0" &&
                  result.res["content"]["Financial Condition"] != "1.0" && (
                    <li>
                      You use mobile data, which is not bad, but not ideal
                      either. See if you have a place nearby where you can use
                      the wifi. This saves you costs and probably also gives you
                      a more stable environment to work in.
                    </li>
                  )}
                {result.res["content"]["Network Type"] != "0.0" &&
                  result.res["content"]["Financial Condition"] != "1.0" && (
                    <li>
                      You are currently using 2G or 3G, but we advise you to see
                      if you can switch to 4G. With 4G you have a better
                      connection than with 2G or 3G.
                    </li>
                  )}
                <li>
                  For free advice, search YouTube for online school videos.
                  There are a lot of them. The video on this page is a good
                  example of someone also speaking from their own experience.
                </li>
              </ul>
            </div>

            <div className="clip">
              <iframe
                width="520"
                height="315"
                src="https://www.youtube.com/embed/SMpDr6pVNfE"
                alt="tips for online school"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
