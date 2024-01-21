
const keyDownHandler = (totalRows : number , handler : any , position : any , event : any) => {
    if (position.position) {
        const item = position.position.split("*");

        if (event.key === "ArrowUp") {
          if (+item[0] !== 1) {
            handler({
              position: `${+item[0] - 1}*${+item[1]}`,
              type: true,
            });
          }
        } else if (event.key === "ArrowDown") {
          if (+item[0] !== totalRows) {
            handler({
              position: `${+item[0] + 1}*${+item[1]}`,
              type: true,
            });
          }
        } else if (event.key === "ArrowRight") {
          if (+item[1] !== totalRows) {
            handler({
              position: `${+item[0]}*${+item[1] + 1}`,
              type: true,
            });
          }
        } else if (event.key === "ArrowLeft") {
          if (+item[1] !== 1) {
            handler({
              position: `${+item[0]}*${+item[1] - 1}`,
              type: true,
            });
          }
        }
      }
}

export default keyDownHandler