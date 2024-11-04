export default {
  '*.{ts,tsx}': ['npm run lint', 'prettier . --write', () => 'tsc --noEmit'],
};
