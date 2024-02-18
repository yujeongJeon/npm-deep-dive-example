const { gitmojis } = require('gitmojis')

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\[#[0-9]+\])?(\s?:\w+:\s?)?(.+)/,
      headerCorrespondence: ['issue', 'type', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'gitmoji-rule': ({ header, issue = '', type }) => {
          const commit = header.trim()

          const [commitEmoji, ...rest] = commit
            .replace(issue, '')
            .trim()
            .split(' ')
          const commitMessage = rest.join(' ').trim()

          if (!commitEmoji) {
            return [false, 'Commit emoji is required.']
          }

          const gitmoji = gitmojis.find(
            (_gitmoji) =>
              _gitmoji.emoji === commitEmoji || _gitmoji.code === type,
          )

          if (!gitmoji) {
            return [
              false,
              `'${commitEmoji}' isn't valid Gitmoji. One of ${gitmojis.map(({ emoji }) => emoji).join(',')}`,
            ]
          }

          if (!commitMessage) {
            return [false, 'Commit message is required.']
          }

          return [true]
        },
      },
    },
  ],
  rules: {
    'gitmoji-rule': [2, 'always'],
    'type-enum': [2, 'never'],
    'subject-case': [2, 'never', ['sentence-case']],
  },
}
