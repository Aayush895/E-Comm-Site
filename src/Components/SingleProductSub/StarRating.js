import React from "react";

const StarIcon = () => {
  return <i className="fa-solid fa-star text-yellow-500"></i>;
};

const StarBorder = () => {
  return <i className="fa-solid fa-star text-gray-300"></i>;
};

const StarRating = ({ stars, reviews }) => {
  const activeStars = Math.round(stars);

  return (
    <div className="flex gap-x-4 mt-3 leading-10 text-slate-400">
      <div>
        {Array(5)
          .fill(undefined)
          .map((star, index) => {
            const id = index + 1;
            return index < activeStars ? <StarIcon key={id}/> : <StarBorder key={id}/>;
          })}
      </div>

      <p>({reviews} Customer reviews)</p>
    </div>
  );
};

export default StarRating;
