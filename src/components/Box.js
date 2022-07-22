import { useDrag } from 'react-dnd'
export const ItemTypes = {
  BOX: 'box',
}

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'red',
  borderRadius: '25px',
  width: '25px',
  height: '25px',
  cursor: 'move',
}
export const Box = ({ id, left, top, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  )
  if (isDragging) {
    return <div ref={drag} />
  }
  return (
    <div
      className="box"
      ref={drag}
      style={{ ...style, left, top }}
      data-testid="box"
    >
      {children}
    </div>
  )
}
