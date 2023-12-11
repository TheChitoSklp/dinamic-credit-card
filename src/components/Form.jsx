import React, { useState } from "react";
import { InputField } from "./InputField";
import { ThanksMessage } from "./ThanksMessage";

export const Form = ({ formValues, setFormValues }) => {
  const [errors, setErrors] = useState({});
  const [showThanks, setShowThanks] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation = () => {
    let isValid = true;
    const newErrors = {};

    if (!formValues.holder.trim()) {
      newErrors.holder = "Cardholder name is required";
      isValid = false;
    }

    const creditCardNumber = formValues.creditFront.replace(/\D/g, "");
    if (!/^\d{16}$/.test(creditCardNumber)) {
      newErrors.creditFront = "Credit card number must be a 16-digit number";
      isValid = false;
    }

    const month = parseInt(formValues.month, 10);
    if (isNaN(month) || month < 1 || month > 12) {
      newErrors.month = "Invalid month";
      isValid = false;
    }

    const year = parseInt(formValues.year, 10);
    if (isNaN(year) || formValues.year.length !== 2) {
      newErrors.year = "Invalid year";
      isValid = false;
    }

    const cvc = parseInt(formValues.cvc, 10);
    if (isNaN(cvc) || formValues.cvc.length !== 3) {
      newErrors.cvc = "Invalid CVC";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      setShowThanks(true);
      setFormValues({
        holder: "",
        creditFront: "",
        month: "",
        year: "",
        cvc: "",
      });

      setTimeout(() => {
        setShowThanks(false);
      }, 5000);
    } else {
      console.log("Formulario inválido, por favor revisa los campos");
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center max-w-md mt-11 bg-white p-6 shadow-md rounded-md"
      style={{ zIndex: 1 }}
    >
      {showThanks ? (
        <ThanksMessage />
      ) : (
        <>
          <InputField
            label="Cardholder Name:"
            name="holder"
            type="text"
            value={formValues.holder}
            onChange={handleChange}
            placeholder="Write your name here"
            className="w-full"
            showError={!!errors.holder}
            error={errors.holder}
          />

          <InputField
            label="Credit Card Number:"
            name="creditFront"
            type="text"
            value={formValues.creditFront}
            onChange={handleChange}
            placeholder="0000 0000 0000 0000"
            className="w-full"
            showError={!!errors.creditFront}
            error={errors.creditFront}
          />

          <div className="flex -mx-3 mb-4">
            <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0">
              <InputField
                label="(MM/YY)"
                name="month"
                type="text"
                value={formValues.month}
                onChange={handleChange}
                placeholder="00"
                showError={!!errors.month}
                error={errors.month}
              />
            </div>
            <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0 self-end">
              <InputField
                label=""
                name="year"
                type="text"
                value={formValues.year}
                onChange={handleChange}
                placeholder="00"
                showError={!!errors.year}
                error={errors.year}
              />
            </div>
            <div className="w-full sm:w-1/3 px-3 ">
              <InputField
                label="CVC:"
                name="cvc"
                type="text"
                value={formValues.cvc}
                onChange={handleChange}
                placeholder="000"
                showError={!!errors.cvc}
                error={errors.cvc}
              />
            </div>
          </div>

          <button
            className="bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </>
      )}
    </div>
  );
};
