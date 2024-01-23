export default function positionHandler(value: string | null, totalRows: number) {
  if (!value) {
    return [];
  }

  const result = [value];

  for (let i = 0; i < totalRows + 15; i++) {
    const blocks = result[result.length - 1].split("*");
    const num1 = Number(blocks[0]);
    const num2 = Number(blocks[1]);

    if (num1 !== totalRows + 1 && num2 !== totalRows + 1) {
      result.push(`${num1 + 1}*${num2 + 1}`);
    } else {
      if (num1 !== 1 && num2 !== 1) {
        result.unshift(`${num1 - 1}*${num2 - 1}`);
      }
    }
  }

  return result;
}