export default function positionHandler(value: string) {
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
