function Hello({ color, name, isSpecial }) {
  return <div style={{ color }}>{isSpecial && <b>*</b>} Hello {name} </div>
}

Hello.defaultProps = {
  name: "no name",
  color: "black"
}

export default Hello;