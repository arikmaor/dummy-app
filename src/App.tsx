import './App.css'
import Shape, { ShapeProps } from './Shape'
import data from './shapes.json'

const shapesData = data.shapes as Partial<ShapeProps>[]

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '50px',
  padding: '50px',
  background: 'darkblue'
};


function App() {
  return (
    <div style={gridStyle}>
      {shapesData.map((props, idx) => (
        <Shape key={idx} text={idx.toString()} {...props} />))
      }
    </div>
  )
}

export default App
