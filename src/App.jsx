import React, { useEffect, useState } from "react";

const App = () => {
  const arr = 5;
  const [Rows, setRows] = useState([]);


  useEffect(() => {
    const arr = [];
    for (let i = 1; i < 6; i++) {
      const list = [];
      for (let j = 1; j < 6; j++) {
        if(`${i}*${j}` === '2*3'){

            list.push(`فیل`);
            
        } else {

            list.push(`${i}*${j}`);
        }
      }
      arr.push(list);
    }

    setRows(arr);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <section>
        {Rows.map((el) => (
          <div className="flex">
            {el.map((item) => (
              <span className="w-16 h-16 rounded-md cursor-pointer hover:shadow-sm m-1 bg-sky-800 border shadow-xl border-sky-950 block">{item}</span>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
