const ProgressBar = ({ progress, handleNext,handlePrev }) => {
  return (
    <div className="main-container">
      <div className="outer-container">
        <div
          style={{
            width: `${progress}%`,
            padding: "10px",
            backgroundColor: "darkviolet",
            borderRadius: "50px",
          }}
        ></div>
      </div>
      <div className="btn-group">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
export default ProgressBar;
