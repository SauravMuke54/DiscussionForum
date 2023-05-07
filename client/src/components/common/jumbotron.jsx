import React from "react";
import as from "./banner.png"
const Jumotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">PICT Discussion Forum</h1>
      <p class="lead"></p>
      <hr class="my-4" />
      <p className="lead">A disscussion forum for enthusiastic developers.</p>
      <div style={{margin:10}}>
      <img src={as} alt="Discussion" style={{width:"100%"}}></img>
      </div>
    </div>
  );
};

export default Jumotron;
