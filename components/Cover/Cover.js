import { usePageContext } from "context/page";
import Image from "next/image";

const { featuredImage } = usePageContext;

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      {(!!background || !!featuredImage) && (
        <Image
          alt="Cover"
          src={background || featuredImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="mix-blend-soft-light bg-slate-400"
        />
      )}
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
