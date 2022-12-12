function Hello({ color, name }) {
  return <div style={{ color }}>Hello {name}</div>
}

Hello.defaultProps = {
  name: "no name",
  color: "black"
}

export default Hello;