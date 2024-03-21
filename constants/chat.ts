import { Message } from 'ai';

export const ROLE_NAME_MAP: Partial<Record<Message['role'], string>> = {
  user: 'You',
  assistant: 'ChatGPT',
}