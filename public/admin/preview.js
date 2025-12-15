const React = window.React
const { List } = window.Immutable

const ProductPreview = ({ entry }) => {
  const items = entry.getIn(['data', 'items']) || List()

  if (!items.size) {
    return React.createElement('p', { style: { color: '#6b7280' } }, 'Belum ada properti.')
  }

  return React.createElement(
    'div',
    { className: 'preview-grid' },
    items.map((item, idx) => {
      const name = item.get('name') || 'Tanpa nama'
      const price = item.get('price') || '-'
      const image = item.get('image') || ''
      const description = item.get('description') || ''
      const specs = item.get('specs') || List()
      const slug = item.get('slug') || 'slug-belum-ada'

      return React.createElement(
        'div',
        { key: idx, className: 'preview-card' },
        [
          React.createElement('span', { key: 'badge', className: 'preview-badge' }, slug),
          React.createElement('img', {
            key: 'img',
            src: image,
            alt: name,
            className: 'preview-card__image',
            onError: (e) => {
              e.target.style.display = 'none'
            },
          }),
          React.createElement('div', { key: 'title', className: 'preview-card__title' }, name),
          React.createElement('div', { key: 'price', className: 'preview-card__price' }, price),
          React.createElement('p', { key: 'desc', className: 'preview-card__desc' }, description),
          React.createElement(
            'div',
            { key: 'specs', className: 'preview-card__specs' },
            specs.map((spec, sIdx) =>
              React.createElement('span', { key: sIdx, className: 'preview-chip' }, spec)
            )
          ),
        ]
      )
    })
  )
}

if (window.CMS) {
  window.CMS.registerPreviewStyle('/admin/admin.css')
  window.CMS.registerPreviewTemplate('items', ProductPreview)
}
