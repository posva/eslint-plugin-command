import antfu from '@antfu/eslint-config'
// eslint-disable-next-line antfu/no-import-dist
import command from './dist/config.mjs'

export default antfu(
  {
    ignores: ['vendor'],
  },
)
  .replace(
    'antfu/command/rules',
    command(),
  )
  .append(
    {
      files: ['**/*.md/**/*'],
      rules: {
        'command/command': 'off',
        'antfu/top-level-function': 'off',
        'style/max-statements-per-line': 'off',
      },
    },
    {
      rules: {
        'antfu/top-level-function': 'off',
      },
    },
    {
      files: ['**/*.test.ts'],
      rules: {
        'antfu/indent-unindent': 'error',
      },
    },
  )
