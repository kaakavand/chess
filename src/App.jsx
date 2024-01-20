import React, { useEffect, useState } from "react";
import { PiCastleTurretFill } from "react-icons/pi";

const App = () => {
  const [totalRows, settotalRows] = useState(5);
  const [position, setPosition] = useState({ position: null, type: true });
  const [Rows, setRows] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  
  useEffect(() => {

    // window.addEventListener("keydown", (e) => {
    //     if (position.position) {
    //       const item = position.position.split("*");
    
    
    //       if (e.key === "ArrowUp") {
    //         if(+item[0] !== 1){
    //             setPosition({ position: `${+item[0] - 1}*${+item[1]}`, type: true });
    //         }
    //       } else if (e.key === "ArrowDown") {
    //         if(+item[0] !== totalRows - 1){
    //             setPosition({ position: `${+item[0] + 1}*${+item[1]}`, type: true });
    //         }
    //       } else if (e.key === "ArrowRight") {
    //         setPosition({ position: `${+item[0]}*${+item[1] + 1}`, type: true });
    //       } else if (e.key === "ArrowLedt") {
    //         setPosition({ position: `${+item[0]}*${+item[1] + 1}`, type: true });
    //       }
    //     }
    //   });

    const activeBlock = positionHandler(position.position);
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

  function positionHandler(value) {
    if (value) {
      const arr = [value];
      for (let i = 0; i < 50; i++) {
        const block = arr[arr.length - 1].split("*");
        if (
          Number(block[0]) !== totalRows + 1 &&
          Number(block[1]) !== totalRows + 1
        ) {
          arr.push(`${Number(block[0]) + 1}*${Number(block[1]) + 1}`);
        } else {
          const block = arr[0].split("*");
          if (Number(block[0]) !== 1 && Number(block[1]) !== 1) {
            arr.unshift(`${Number(block[0]) - 1}*${Number(block[1]) - 1}`);
          }
        }
      }

      const reverse = [value];
      for (let i = 0; i < 50; i++) {
        const block = reverse[reverse.length - 1].split("*");
        if (
          Number(block[0]) !== totalRows + 1 &&
          Number(block[1]) !== totalRows + 1
        ) {
          reverse.push(`${Number(block[0]) + 1}*${Number(block[1]) - 1}`);
        } else {
          const block = reverse[0].split("*");
          if (Number(block[0]) !== 0 && Number(block[1]) !== 0) {
            reverse.unshift(`${Number(block[0]) - 1}*${Number(block[1]) + 1}`);
          }
        }
      }

      return [...arr, ...reverse];
    }
    return [];
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <section>
        <div className="flex items-center p-1">
          <button
            onClick={() => settotalRows(+inputValue)}
            className="mb-6 border border-sky-950 text-sky-200 mr-2 text-sm rounded-lg w-20 block p-2.5 bg-sky-950 "
          >
            Confirm
          </button>
          <input
            type="number"
            onChange={({ target }) => setInputValue(target.value)}
            className="mb-6 text-sky-200 text-sm rounded-lg block w-full p-2.5 bg-gray-700 outline-none focus:border-2 border-2 border-sky-950"
          />
        </div>
        {Rows.map((el , i) => (
          <div key={i} className="flex">
            {el.map((item , index) => (
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
