import React, { useState } from "react";

const SingleProdImage = ({ imgArr = [{ url: "" }] }) => {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <>
      <div>
        {imgArr.map((imgObj, index) => {
          return (
            <img
              key={index}
              src={imgObj?.url}
              alt="prod-img"
              className="h-28 w-52 my-4"
              onClick={() => {
                setImgIdx(index);
              }}
            />
          );
        })}
      </div>
      <div className="mx-2 mt-[25%]">
        <img
          src={imgArr[imgIdx].url}
          alt={imgArr[imgIdx].filename}
          className="h-[224px] w-[416px]"
        />
      </div>
    </>
  );
};

export default SingleProdImage;
