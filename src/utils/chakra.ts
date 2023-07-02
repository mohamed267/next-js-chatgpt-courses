export const getColor = (color: any) => {
    const colrarr = color.split(".");
    let rtrColor = "";
    colrarr.map((color: any, key: any) => {
      rtrColor += color;
      if (key < colrarr.length - 1) rtrColor += "-";
    });
    return `var(--chakra-colors-${rtrColor})`;
  };
  