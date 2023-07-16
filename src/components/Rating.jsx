import React from "react";

export default function Rating({ rate }) {
  return (
    <div className="py-3">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          // console.log(rate);
          const thisStarValue = rate - index;

          return (
            <span key={index}>
              <i
                style={{ color: "#f8e825", fontSize: "20px" }}
                className={
                  thisStarValue >= 1
                    ? "fa-solid fa-star"
                    : thisStarValue >= 0.5
                    ? "fa-solid fa-star-half-stroke"
                    : "fa-regular fa-star"
                }
              />
            </span>
          );
        })}
    </div>
  );
}
