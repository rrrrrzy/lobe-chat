import { ModelProviderCard } from '@/types/llm';

// ref https://www.volcengine.com/docs/82379/1330310
const Maple: ModelProviderCard = {
  chatModels: [],
  description:
    '西北工业大学计算机学院 Maple 课题组开发的专为西工大师生定制的 AI 模型',
  id: 'volcengine',
  modelsUrl: 'https://nwpu.edu.cn',
  name: 'Maple',
  settings: {
    disableBrowserRequest: true, // CORS error
    proxyUrl: {
      placeholder: 'http://127.0.0.1:3000/v1',
    },
    sdkType: 'openai',
    showDeployName: true,
    smoothing: {
      speed: 2,
      text: true,
    },
  },
  url: 'https://nwpu.edu.cn',
};

export default Maple;
