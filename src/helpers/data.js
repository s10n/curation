export const pathsToOmit = [
  'content',
  'word_count',
  'direction',
  'total_pages',
  'rendered_pages',
  'next_page_url'
]

export const setStorage = (prev, next) => {
  const lists = JSON.stringify(next.lists)
  JSON.stringify(prev.lists) !== lists && localStorage.setItem('lists', lists)

  const articles = JSON.stringify(next.articles)
  JSON.stringify(prev.articles) !== articles && localStorage.setItem('articles', articles)
}
