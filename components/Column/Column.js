export const Column = ({ children, width, backgroundColor, textColor }) => {
  const texColorStyle = textColor ? { color: textColor } : "";
  const texBgStyle = backgroundColor ? { backgroundColor } : "";

  const widthStyle = width
    ? { minWidth: width }
    : { flexGrow: 1, flexBasis: 0 };

  return (
    <div
      style={{ ...widthStyle, ...texColorStyle, ...texBgStyle }}
      className="px-7 py-5"
    >
      {children}
    </div>
  );
};
