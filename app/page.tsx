'use client'

import { MessageList } from '@/components/message-list';
import { TokenModal } from '@/components/token-modal';
import { TextField } from '@mui/material';
import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-between">
      <MessageList messages={messages} />
      <form className='p-4 duration-300 w-full sm:p-6 lg:w-[960px]' onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="fullWidth"
          label="Message"
          onChange={handleInputChange}
          value={input}
        />
      </form>
      <TokenModal />
    </main>
  );
}
