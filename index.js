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
1 tiles = 11 cm
13 × 8 × 6 tiles = ?m³
`;
GeminiAI(prompt);