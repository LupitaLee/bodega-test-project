import React from "react"
import { connect } from "react-redux"
import { fetchStore } from "../actions/store"


class Store extends React.Component{

    componentDidMount(){
        this.props.fetchStore()
    }

    render(){
        const stores = this.props.store.map(s => <p> {s.name} </p>)
        return(
            <div>
                {stores}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        store: state.store
    }
        
    
}

export default connect(mapStateToProps, {fetchStore})(Store)