import openai from "../config/openai.js";

export const generateAnswer =
async (
  question,
  context
) => {

  const prompt = `
Context:
${context}

Question:
${question}

Answer only using
the provided context.
`;

  const response =
    await openai.chat.completions.create({

      model: "gpt-4.1-mini",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  return response.choices[0]
    .message.content;

};