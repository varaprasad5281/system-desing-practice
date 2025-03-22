import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/Progressbar.jsx";

const progressArray = [0, 20, 40, 60, 80, 100];

function App() {
  const [progressIndex, setProgressIndex] = useState(3);

  const handleNext = () => {
    setProgressIndex((prev) =>
      prev < progressArray.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setProgressIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          This is Progress Bar
        </h1>
        <ProgressBar
          progress={progressArray[progressIndex]}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </>
  );
}

export default App;
