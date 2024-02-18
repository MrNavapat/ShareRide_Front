import React from "react";

export default function TripCard({buttonMessage,src,startLoc,endLoc,startDate,endDate}) {
  return (
    <>
      <div className="card card-compact w-5/6 bg-base-100 shadow-xl">
        <figure style={{width:"100%",height:"250px"}} >
          <img
            src={src}
            lt="Shoes"
            style={{width:"100%" ,height:"100%"}}
          />
        </figure>
        <div className="card-body">
                  <h2 className="card-title">{startLoc} - {endLoc}</h2>
                  <p>{startDate} {endDate}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{buttonMessage}</button>
          </div>
        </div>
      </div>
    </>
  );
}
