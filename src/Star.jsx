import React from "react";
import "./Star.css";


// const Star = (props) => {
//   return (
//     <div
//       className='stars'
//       onClick={props.click} >
//       <i
//         id="star"
//         className={`fa-solid fa-star ${props.active ? "active" : ""}`}
//       style={{pointerEvents: props.gameStatus ? 'all': 'none'}}
//       ></i>
//       <p>{ props.id}</p>
//     </div>
//   );
// };



const Star = (props) => {
  return (
    <div
      className='stars'
      onClick={props.gameStatus ? props.click : null} >
      <i
        id="star"
        className={`fa-solid fa-star ${props.active ? "active" : ""}`}
      style={{pointerEvents: props.gameStatus ? 'all': 'none'}}
      ></i>
      {/* <p>{ props.id}</p> */}
    </div>
  );
};


export default Star;