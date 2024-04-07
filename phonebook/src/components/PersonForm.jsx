import React from "react"

const Formulary = (prop) => {
    return (
      <form onSubmit={prop.addperson}>
        <div>
          name: <input type='text' value={prop.newName} onChange={prop.handlenameChange} />
        </div>
        <div>
          number: <input type='number' value={prop.newNumber} onChange={prop.handlenumberChange} />
        </div>
        <div>
          <button type="submit">{prop.text2}</button>
        </div>
      </form>
    )
  }

export default Formulary;
