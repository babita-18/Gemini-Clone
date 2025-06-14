///////
/*

// node  --version # should be >=18
// npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory, 
    HarmBlockThreshold,
}  from "@google/generative-ai" ;

const MODEL_NAME ="gemini-pro";
const API_KEY ="AIzaSyBM8Trw27_MNk9R8kqIaDzfdVUYMF-agLg" ;

async function runChat(prompt){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });


    const generationConfig ={
        temperature: 0.9, 
        topK: 1,
        topP :1,
        maxOutputTokens : 2048,
    };

   const safetySettings =[
        {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE ,
    },

    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE ,
    },
     {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE ,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE ,
    },
];

const chat = model.startChat({
    generationConfig,
    safetySettings, 
    history :[
    ],
});

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
}
 export default runChat;
*/
 ////////

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = "AIzaSyBM8Trw27_MNk9R8kqIaDzfdVUYMF-agLg";

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;

  console.log(await response.text());
  
  return response.text();
}

export default runChat;











