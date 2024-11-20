export default {
  'src/**/*.{ts,tsx}': ['npm run lint', 'prettier . --write', () => 'tsc --noEmit'],
};
