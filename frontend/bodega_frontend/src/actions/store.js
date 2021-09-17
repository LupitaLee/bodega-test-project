
export const fetchStore= ()=>{
    return(dispatch)=>{
        fetch("http://localhost:3000/stores")
        .then(res => res.json())
        .then(stores => {
            dispatch({
                type: "GET_STORE",
                payload: stores
            })
        })
    }
}

