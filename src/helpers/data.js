export const pathsToOmit = [
  'content',
  'word_count',
  'direction',
  'total_pages',
  'rendered_pages',
  'next_page_url'
]

export const slugify = string =>
  string
    .trim()
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/:|\/|\?|#|\[|\]|@|!|\$|&|'|\(|\)|\*|\+|,|;|=|%|\./g, '-')
    .replace(/--+/g, '-')
