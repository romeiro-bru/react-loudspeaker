import "./style.css";
import { useState } from "react";
import prom from "./promotion.svg";

export default function Input() {
  const [shout, setShout] = useState("");

  const handleShout = (event) => {
    setShout(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleShout}></input>
      <div className="shouting">
        <img src={prom} alt="loudspeaker" />
        {shout.toUpperCase()}
      </div>
    </div>
  );
}
