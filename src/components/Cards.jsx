import React from "react";
import frontCard from "/bg-card-front.png";
import backCard from "/bg-card-back.png";

const formatCreditCardNumber = (creditCardNumber) => {
  const cleanedNumber = creditCardNumber.replace(/\D/g, "");
  const groups = cleanedNumber.match(/.{1,4}/g);
  return groups ? groups.join(" ") : "";
};

export const Cards = ({ formValues }) => {
  const { holder, creditFront, month, year, cvc } = formValues;
  const formattedCreditFront = formatCreditCardNumber(creditFront);

  return (
    <div className="relative w-64 h-40">
      <div
        className="absolute inset-0"
        style={{ zIndex: 2, transform: "translateY(20%)" }}
      >
        <img src={frontCard} alt="Front Card" className="w-full h-full" />
        <div className="absolute top-2 left-40 transform -translate-x-1/2 text-white text-lg w-full">
          <span className="block font-bold text-base ">{holder}</span>
          <span className="block mt-2">{formattedCreditFront}</span>
          <span className="block text-sm">
            {month && year ? `${month}/${year}` : `${month}${year}`}
          </span>
        </div>
      </div>
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <img
          src={backCard}
          alt="Back Card"
          className="w-full h-full object-cover rounded-md"
          style={{ transform: "translateX(35%)" }}
        />

        <span className="absolute top-16 left-80 transform -translate-x-1/2 text-white text-lg">
          {cvc}
        </span>
      </div>
    </div>
  );
};
