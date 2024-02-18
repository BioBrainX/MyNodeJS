const {
  ø,
  clog,
  dlog,
  test,
  loop,
  is,
//  MergeObjs,
} = require('./libs/BioLib');

const {
  GeminiAI,
//  OpenAI_GPT,
} = require('./libs/AI');

const prompt = `
explain how this equation is true
(ab+10b)÷10=b(1+a/10)
`;
GeminiAI(prompt);