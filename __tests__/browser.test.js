import nightmare from 'nightmare'

describe('When visiting the homepage', () => {

  it('it welcomes the user', async () => {
    let page = nightmare().goto('http://localhost:3030')

    let text = await page.evaluate(() => document.body.textContent)
                         .end()

    expect(text).toContain('Blog')
  })

  it('displays page title', async () => {
    let page = nightmare().goto('http://localhost:3030');

    let title = await page.evaluate(() => (document.title)).end();

    expect(title).toContain('Список постов')
  })
})
