export const getTextAlign = (textAlign = "left") => {
  const textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return `${textAlignMap[textAlign] || ""}`;
};
export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
    1: "text-6xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-xl",
  };
  return `${fontSizeMap[level] || ""}`;
};
