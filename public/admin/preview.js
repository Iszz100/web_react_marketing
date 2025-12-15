const React = window.React
const { List } = window.Immutable

const ProductPreview = ({ entry }) => {
  const items = entry.getIn(['data', 'items']) || List()

  if (!items.size) {
    return React.createElement('p', { className: 'preview-empty' }, 'Belum ada properti.')
  }

  return React.createElement(
    'table',
    { className: 'preview-table' },
    [
      React.createElement(
        'thead',
        { key: 'head' },
        React.createElement(
          'tr',
          null,
          [
            React.createElement('th', { key: 'foto' }, 'Foto'),
            React.createElement('th', { key: 'nama' }, 'Nama'),
            React.createElement('th', { key: 'harga' }, 'Harga'),
            React.createElement('th', { key: 'slug' }, 'Slug'),
            React.createElement('th', { key: 'specs' }, 'Spesifikasi'),
          ]
        )
      ),
      React.createElement(
        'tbody',
        { key: 'body' },
        items.map((item, idx) => {
          const name = item.get('name') || 'Tanpa nama'
          const price = item.get('price') || '-'
          const image = item.get('image') || ''
          const specs = item.get('specs') || List()
          const slug = item.get('slug') || 'slug-belum-ada'

          return React.createElement(
            'tr',
            { key: idx },
            [
              React.createElement(
                'td',
                { key: 'img' },
                React.createElement('img', {
                  src: image,
                  alt: name,
                  className: 'preview-thumb',
                  onError: (e) => {
                    e.target.style.display = 'none'
                  },
                })
              ),
              React.createElement('td', { key: 'name', className: 'preview-name' }, name),
              React.createElement('td', { key: 'price', className: 'preview-price' }, price),
              React.createElement('td', { key: 'slug', className: 'preview-slug' }, slug),
              React.createElement(
                'td',
                { key: 'specs' },
                React.createElement(
                  'div',
                  { className: 'preview-specs' },
                  specs.map((spec, sIdx) =>
                    React.createElement('span', { key: sIdx, className: 'preview-chip' }, spec)
                  )
                )
              ),
            ]
          )
        })
      ),
    ]
  )
}

if (window.CMS) {
  window.CMS.registerPreviewStyle('/admin/admin.css')
  window.CMS.registerPreviewTemplate('items', ProductPreview)
}
