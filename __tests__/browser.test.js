import nightmare from 'nightmare'

describe('When visiting the homepage', () => {
  it('displays content head', async () => {
    let page = nightmare().goto('http://localhost:3030')
    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Blog')
  })

  it('displays page title', async () => {
    let page = nightmare().goto('http://localhost:3030');
    let title = await page.evaluate(() => (document.title)).end();

    expect(title).toContain('Список постов')
  })
})

describe('When visiting the contacts', () => {
  it('displays content head', async () => {
    let page = nightmare().goto('http://localhost:3030').click('a[href$="/contacts"]');
    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Contacts')
  })

  it('displays page title', async () => {
    let page = nightmare().goto('http://localhost:3030').click('a[href$="/contacts"]');
    let title = await page.evaluate(() => (document.title)).end();

    expect(title).toContain('Обратная связь')
  })
})
