import React, { useCallback, useEffect, useState } from "react";
import { PiCastleTurretFill } from "react-icons/pi";
import positionHandler from "../functions/positionHandler";
import keyDownHandler from "../functions/keyDownHandler";

const App = () => {
  const [totalRows, settotalRows] = useState(4);
  const [position, setPosition] = useState<any>({ position: null, type: true });
  const [Rows, setRows] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const activeBlock = positionHandler(position.position, totalRows);
    const arr = [];
    for (let i = 1; i < totalRows + 1; i++) {
      const list = [];
      for (let j = 1; j < totalRows + 1; j++) {
        if (`${i}*${j}` === position.position) {
          list.push({ position: `${i}*${j}`, type: null });
        } else if (activeBlock.includes(`${i}*${j}`)) {
          list.push({ position: `${i}*${j}`, type: true });
        } else {
          list.push({ position: `${i}*${j}`, type: false });
        }
      }
      arr.push(list);
    }

    setRows(arr);
  }, [position, totalRows]);

  const handleUserKeyPress = useCallback((e : any) => keyDownHandler(totalRows , setPosition , position , e), [position]);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <section className="flex justify-center flex-col items-center">
        <div className=" items-center p-1 hidden sm:flex">
          <button
            onClick={() => settotalRows(+inputValue > 8 ? 8 : +inputValue)}
            className="mb-6 border border-sky-950 text-sky-200 mr-2 text-sm rounded-lg w-20 block p-2.5 bg-sky-950 "
          >
            Confirm
          </button>
          <input
            type="number"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                settotalRows(+inputValue > 8 ? 8 : +inputValue);
              }
            }}
            onChange={({ target }) => setInputValue(target.value)}
            className="mb-6 text-sky-200 text-sm rounded-lg block w-full p-2.5 bg-gray-700 outline-none focus:border-2 border-2 border-sky-950"
          />
        </div>
        {Rows.map((el, i) => (
          <div key={i} className="flex">
            {el.map((item: any, index: number) => (
              <span
                onClick={() => setPosition(item)}
                key={index}
                className="w-20 h-20 flex justify-center items-center rounded-md cursor-pointer hover:shadow-sm m-1 bg-sky-900 border shadow-xl border-sky-950 duration-300 hover:bg-sky-800"
              >
                {item.type === true ? (
                  <PiCastleTurretFill
                    className="fill-sky-950 animate-pulse animate-infinite animate-duration-[1000ms] animate-ease-linear"
                    size={35}
                  />
                ) : item.type === null ? (
                  <PiCastleTurretFill size={50} className="fill-sky-950" />
                ) : (
                  ""
                )}
              </span>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
