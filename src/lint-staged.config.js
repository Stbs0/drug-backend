export default {
  '*.{ts,tsx}': ['npm run lint', 'prettier . --write'],
  '*.{ts,tsx}': [() => 'npx tsc --noEmit '],
};
