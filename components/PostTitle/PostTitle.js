import { Heading } from "components/Heading";
import { usePageContext } from "context/page";

export const PostTitle = ({ textAlign, level }) => {
  const { title } = usePageContext();

  return <Heading content={title} level={level} textAlign={textAlign} />;
};
