function About() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h1>About the tool</h1>

          <h2>How does it work?</h2>
          <p>
            This AI can predict how well you are likely to adapt to online
            classes. The AI makes this prediction based on your entered data and
            a trained model. With the click of a button, it is predicted how
            well you can adapt to taking classes online or working from home.
          </p>

          <h2>How do we handle your data?</h2>
          <p>
            The entered data is used only once by our trained AI. That is why it
            is never stored anywhere on our servers, we do this because we value
            your privacy!
          </p>

          <h2>Why is the prediction reliable?</h2>
          <p>
            The data was collected by researchers through questionnaires in the
            region of Bangladesh. The dataset is from
            <a href="https://www.kaggle.com/datasets/mdmahmudulhasansuzan/students-adaptability-level-in-online-education">
              {" "}
              Kaggle
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
