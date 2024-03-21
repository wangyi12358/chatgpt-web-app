import { ROLE_NAME_MAP } from '@/constants/chat';
import { Avatar } from '@mui/material';
import { deepOrange, green } from '@mui/material/colors';
import { Message } from 'ai';
import { memo } from 'react';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { Markdown } from '../markdown';

export interface MessageListProps {
  messages: Message[]
}

export const MessageList = memo<MessageListProps>(({ messages }) => {

  return (
    <div className='w-full flex-1 overflow-auto p-4 duration-300 sm:p-6 lg:w-[960px] scrollbar:bg-transparent'>
      {messages.map(message => {
        return (
          <div key={message.id} className='flex space-x-2 mb-6'>
            <Avatar
              className='w-8 h-8 text-sm'
              sx={{ bgcolor: message?.role === 'user' ? deepOrange[500] : green[500] }}
            >
              {message?.role === 'user' ? 'Y' : 'C'}
            </Avatar>
            <div className='flex flex-col flex-1'>
              <span>{ROLE_NAME_MAP[message.role]}</span>
              <Markdown
                className="prose break-words prose-p:leading-relaxed prose-pre:p-0  max-w-full"
                remarkPlugins={[remarkGfm, remarkMath]}
              >
                {message.content}
              </Markdown>
            </div>
          </div>
        )
      })}
    </div>
  );
});

MessageList.displayName = 'MessageList';