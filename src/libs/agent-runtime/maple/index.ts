import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';
import type { ChatModelCard } from '@/types/llm';

export interface MapleModelCard {
  id: string;
}

export const LobeMapleAI = LobeOpenAICompatibleFactory({
  baseURL: 'http://127.0.0.1:3000/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_MAPLE_CHAT_COMPLETION === '1',
  },
  models: async ({ client }) => {
    const { LOBE_DEFAULT_MODEL_LIST } = await import('@/config/aiModels');

    const modelsPage = (await client.models.list()) as any;
    const modelList: MapleModelCard[] = modelsPage.data;

    return modelList
      .map((model) => {
        const knownModel = LOBE_DEFAULT_MODEL_LIST.find(
          (m) => model.id.toLowerCase() === m.id.toLowerCase(),
        );

        return {
          contextWindowTokens: knownModel?.contextWindowTokens ?? undefined,
          displayName: knownModel?.displayName ?? undefined,
          enabled: knownModel?.enabled || false,
          id: model.id,
          reasoning: knownModel?.abilities?.reasoning || false,
          vision:
            model.id.toLowerCase().includes('vision') ||
            knownModel?.abilities?.vision ||
            false,
        };
      })
      .filter(Boolean) as ChatModelCard[];
  },
  provider: ModelProvider.Maple,
});