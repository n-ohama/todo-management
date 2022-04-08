import { TodoRoom } from "./screens/todo_room"

const bgStyle = {
  background: "linear-gradient(-135deg, #FFCCFF 20%, #CC33FF, #6633FF)",
  height: '100%',
  backgroundAttachment: 'fixed'
}

export const App = () => {
  return (
    <div style={bgStyle}>
      <TodoRoom />
    </div>
  )
}
