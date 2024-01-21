export default function positionHandler(value : string | null , totalRows : number) {
  if (value) {
    const arr = [value];
    for (let i = 0; i < totalRows + 15; i++) {
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
    for (let i = 0; i < totalRows + 15; i++) {
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