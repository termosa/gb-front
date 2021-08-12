import React, { useState, useMemo } from 'react'

const useModule = modules => {
  const [current, setCurrent] = useState(() => {
    const selected = location.pathname.split('/')[1]
    return modules.find(m => m.name === selected)
  })
  const set = module => {
    setCurrent(module)
    history.pushState({}, '', `/${module.name}`)
  }
  return [current, set]
}

export default function Gallery({ items }): React.ReactElement {
  const [current, setCurrent] = useModule(items)

  const sorted = useMemo(() => items.sort((a, b) => (a.name < b.name ? -1 : 1)), [items])
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div
        style={{
          padding: '1em',
          borderRight: '1px solid lightgray',
          width: '250px',
          maxWidth: '250px',
          flex: '1 0 auto',
          height: '100%',
          overflow: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <h2>List</h2>
        {sorted.map((item) => (
          <p
            key={item.name}
            title={item.name}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              cursor: 'pointer',
              fontWeight: item.name === current?.name ? 'bold' : 'normal'
            }}
            onClick={() => setCurrent(item)}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div style={{ flex: '1 0 auto', height: '100%', overflow: 'auto', padding: '1em', boxSizing: 'border-box', position: 'relative' }}>
        {current
          ? React.createElement(current.component)
          : (
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p style={{ fontSize: '2em', color: 'grey' }}>Click on any module to see its docs</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
