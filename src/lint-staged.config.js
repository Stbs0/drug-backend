export default {
  'src/**/*.ts': ['npm run lint', 'prettier . --write', () => 'tsc --noEmit'],
};
