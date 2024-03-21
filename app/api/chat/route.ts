import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

let openai: OpenAI;

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  initOpenAI(req)

  const response = await openai.chat.completions.create({
    model: "openai/gpt-3.5-turbo",
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

// 初始化 openai 对象
function initOpenAI(req: Request) {
  const cookie = req.headers.get('cookie')
  if (!cookie) {
    throw new Error('No cookie found')
  }
  if (!openai) {
    const openApiToken = cookie.match(/openApiToken=([^;]+)/)?.[1]
    openai = new OpenAI({
      apiKey: openApiToken,
      baseURL: "https://openrouter.ai/api/v1",
    });
  }
}