const Filter = (prop) => {
    return(
        <>
            Filter shown with<input type="text" value={prop.filter} onChange={prop.filterHandler} placeholder="Insert something to filter"/>
        </>
    )
}

export default Filter;