import type { FC } from "react";

type Role = 'user' | 'bot';

export interface ChatContentProps {
  role: Role;
  msg: string;
}

const ChatContent: FC<ChatContentProps> = ({ role, msg }) => {
  const direction = role === 'user' ? 'justify-end' : 'justify-start';
  return (
    <div className={`flex ${direction}`}>
      <div className="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        <div className="flex">
          {msg}
        </div>
      </div>
    </div>
  )
}

export default ChatContent