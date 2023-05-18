export default {
  id: 'general-bot',
  name: 'General bot',
  description: 'A general bot of Chat database.',
  avatar: '',
  getPrompt: (): string => {
    const basicPrompt = `Please be careful to return only key information, and try not to make it too long.`;
    return basicPrompt;
  },
};
