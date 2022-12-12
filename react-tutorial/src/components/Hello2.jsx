function Hello2({ color, name, isSpecial }) {
    return(
        <div>
            {!isSpecial && <div style={{ color }}> Hello {name} </div>}
        </div>
    ) 
  }
  
  Hello2.defaultProps = {
    name: "no name",
    color: "black"
  }
  
  export default Hello2;