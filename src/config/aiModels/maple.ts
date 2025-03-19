import { AIChatModelCard } from '@/types/aiModel';

const mapleChatModels: AIChatModelCard[] = [
  {
    contextWindowTokens: 4096,
    description: 'Maple 提供强大的推理能力，支持西工大特色定制。',
    displayName: 'Maple',
    id: 'maple',
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
    type: 'chat',
  },
];

export const allModels = [...mapleChatModels];

export default allModels;
