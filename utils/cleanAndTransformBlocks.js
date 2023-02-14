import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blockJSON) => {
  const blocks = JSON.parse(blockJSON);

  const assignId = (b) => {
    b.forEach((block) => {
      block.id = uuid();

      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };
  assignId(blocks);
  return blocks;
};
