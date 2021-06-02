import React, {Component} from 'react'

export default class GifSearch extends Component {
    state = {
        searchTerm: ""
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.searchTerm)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Enter search term to find more Gifs<br></br>
                        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} /><br></br>
                        <input type="submit" value="Find Gifs"/>
                    </label>
                </form>
            </div>
        )
    }
}