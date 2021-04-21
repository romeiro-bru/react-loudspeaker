import "./style.css";
import { useState } from "react";
import loudspeaker from "./loudspeaker.svg";

export default function Input() {
  const [shout, setShout] = useState("");

  const handleChange = (event) => {
    setShout(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <div className="shouting">
        <img src={loudspeaker} alt="loudspeaker" />
        {shout.toUpperCase()}
      </div>
    </div>
  );
}
