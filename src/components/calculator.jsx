import { useState } from "react";
import "../components/calc.css";
export function Calculator() {
  const [display, setDisplay] = useState("");
  function handlechange(e) {
    setDisplay(display.concat(e.target.value));
  }
  function handleans() {
    try {
      setDisplay(eval(display).toString());
    } catch (err) {
      setDisplay("Syntax Error");
    }
  }
  function handleclear() {
    setDisplay("");
  }
  function handledel() {
    setDisplay(display.slice(0, display.length - 1));
  }
  return (
    <>
      <div className="box">
        <div className="screen">
          <input
            type="text"
            className="textt"
            value={display}
            placeholder="0"
            className="screen"
          />
        </div>
        <div className="operations">
          <input
            type="button"
            value="7"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="8"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="9"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="DEL"
            onClick={handledel}
            className="buttons"
          />
          <input
            type="button"
            value="AC"
            onClick={handleclear}
            className="buttons"
          />
          {/* <div></div> */}
          <input
            type="button"
            value="4"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="5"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="6"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="*"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="/"
            onClick={handlechange}
            className="buttons"
          />
          {/* <div></div> */}
          <input
            type="button"
            value="1"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="2"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="3"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="+"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="-"
            onClick={handlechange}
            className="buttons"
          />
          {/* <div></div> */}
          <input
            type="button"
            value="0"
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="."
            onClick={handlechange}
            className="buttons"
          />
          <input
            type="button"
            value="("
            className="buttons"
            onClick={handlechange}
          />
          <input
            type="button"
            value=")"
            className="buttons"
            onClick={handlechange}
          />
          <input
            type="button"
            value="="
            onClick={handleans}
            className="buttons"
          />
        </div>
      </div>
    </>
  );
}
