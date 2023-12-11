import "./App.css";
import { Cards } from "./components/Cards";
import { Form } from "./components/Form";
import { ThanksMessage } from "./components/ThanksMessage";
import { useState } from "react";

function App() {
  const [formValues, setFormValues] = useState({
    holder: "",
    creditFront: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <div className="relative h-screen p-4">
      <div className="relative z-1 h-40">
        <Cards formValues={formValues} />
      </div>
      <Form formValues={formValues} setFormValues={setFormValues} />
    </div>
  );
}

export default App;
