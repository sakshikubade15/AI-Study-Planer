import { pineconeIndex }
from "../config/pinecone.js";

export const searchSimilarChunks =
async (embedding) => {

  const result =
    await pineconeIndex.query({

      vector: embedding,

      topK: 5,

      includeMetadata: true,

    });

  return result.matches;

};