const Formulary = (prop) => {
    return (
      <form onSubmit={prop.addperson}>
        <div>
          name: <input type='text' value={prop.name} onChange={prop.handlenameChange} placeholder="Insert Your Name" />
        </div>
        <div>
          number: <input type='number' value={prop.number} onChange={prop.handlenumberChange} placeholder="Insert Your Phone Number"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

export default Formulary;
