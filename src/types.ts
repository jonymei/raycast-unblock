export interface User {
  email: string
  token: string
}

export interface AIConfig {
  type: 'openai' | 'gemini' | 'custom'
  key: string
  endpoint?: string
}
