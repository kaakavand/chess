import React, { useEffect, useState } from "react";
import { PiCastleTurretFill } from "react-icons/pi";

const App = () => {
  const arr = 5;
  const [Rows, setRows] = useState([]);
  const activeBlock = positionHandler("2*3");

  useEffect(() => {
    const arr = [];
    for (let i = 1; i < 6; i++) {
      const list = [];
      for (let j = 1; j < 6; j++) {
        if (`${i}*${j}` === "2*3") {
          list.push(null);
        } else if (activeBlock.includes(`${i}*${j}`)) {
          list.push(true);
        } else {
          list.push(`${i}*${j}`);
        }
      }
      arr.push(list);
    }

    setRows(arr);
    console.log(positionHandler("2*3"));
  }, []);

  function positionHandler(value) {
    const arr = [value];
    for (let i = 0; i < 10; i++) {
      const block = arr[arr.length - 1].split("*");
      if (Number(block[0]) !== 5 && Number(block[1]) !== 5) {
        arr.push(`${Number(block[0]) + 1}*${Number(block[1]) + 1}`);
      } else {
        const block = arr[0].split("*");
        if (Number(block[0]) !== 1 && Number(block[1]) !== 1) {
          arr.unshift(`${Number(block[0]) - 1}*${Number(block[1]) - 1}`);
        }
      }
    }

    const reverse = [value];
    for (let i = 0; i < 10; i++) {
      const block = reverse[reverse.length - 1].split("*");
      if (Number(block[0]) !== 4 && Number(block[1]) !== 4) {
        reverse.push(`${Number(block[0]) + 1}*${Number(block[1]) - 1}`);
      } else {
        const block = reverse[0].split("*");
        if (Number(block[0]) !== 1 && Number(block[1]) !== 1) {
          reverse.unshift(`${Number(block[0]) - 1}*${Number(block[1]) + 1}`);
        }
      }
    }

    return [...arr, ...reverse];
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <section>
        {Rows.map((el) => (
          <div className="flex">
            {el.map((item) => (
              <span className="w-16 h-16 flex justify-center items-center rounded-md cursor-pointer hover:shadow-sm m-1 bg-sky-900 border shadow-xl border-sky-950 duration-300 hover:bg-sky-800">
                {item === true ? (
                  <PiCastleTurretFill
                    className="fill-sky-950 animate-pulse animate-infinite animate-duration-[1000ms] animate-ease-linear"
                    size={30}
                  />
                ) : item === null ? (
                  <PiCastleTurretFill size={40} className="fill-sky-950"/>
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
