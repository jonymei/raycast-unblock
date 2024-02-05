import type { FastifyReply, FastifyRequest } from 'fastify'
import { getAIConfig } from '../../utils/env.util'
import { GeminiChatCompletion } from '../../features/ai/completions'
import { OpenAIChatCompletion } from '../../features/ai/completions/openai'

export function Completions(request: FastifyRequest, reply: FastifyReply) {
  const config = getAIConfig()
  switch (config.type) {
    case 'gemini':
      return GeminiChatCompletion(request, reply)
    case 'openai':
      return OpenAIChatCompletion(request, reply)
    default:
      break
  }
}
