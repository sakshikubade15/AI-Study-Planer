import { pineconeIndex }
from "../config/pinecone.js";

export const saveEmbedding = async (
  id,
  embedding,
  chunk
) => {

  await pineconeIndex.upsert([
    {
      id,

      values: embedding,

      metadata: {
        text: chunk,
      },
    },
  ]);

};