import { text } from "@fortawesome/fontawesome-svg-core";

export const Columns = ({
  isStackedOnMobile,
  backgroundColor,
  textColor,
  children,
}) => {
  const texColorStyle = textColor ? { color: textColor } : "";
  const texBgStyle = backgroundColor ? { backgroundColor } : "";
  return (
    <div className="my10 " style={{ ...texColorStyle, ...texBgStyle }}>
      <div
        className={`max-w-5xl mx-auto ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
