const dedent = require('dedent')

describe('Tree-sitter HTML grammar', () => {

  beforeEach(async () => {
    atom.config.set('core.useTreeSitterParsers', true)
    await atom.packages.activatePackage('language-ruby')
  })

  it('tokenizes HTML tag punctuation', async () => {
    const editor = await atom.workspace.open('test.html')
    editor.setText(dedent`
      <html lang="en">
        <head></head>
        <body>
      </html>
    `)

    expect(editor.scopeDescriptorForBufferPosition([0, 0]).toString()).toBe(
      '.text.html.basic .punctuation.definition.tag.begin.html'
    )
  })

})
