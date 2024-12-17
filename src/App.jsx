import Header from "./Components/Header";
import UserInputField from "./Components/UserInputField";
import Results from "./Components/Results";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Components/Contact";
import "./index.css";
function App() {
  const [fields, setFields] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleChange(inputName, inputValue) {
    setFields((prev) => {
      const updateFields = { ...prev, [inputName]: Number(inputValue) };
      return updateFields;
    });
    console.log(fields);
  }

  return (
    <div>
      <Router>
        <div className="nav">
          <Link className="link" to="/Contact">Contact</Link>
          <Link className="link"to="/">Calculator</Link>
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <UserInputField
                  inputData={fields}
                  handleChange={handleChange}
                />
                <Results inputData={fields} />
              </>
            }
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
