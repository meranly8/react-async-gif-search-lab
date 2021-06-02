import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }
  
    fetchGifs = (searchTerm = "cats") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=3o69fJ4nBCPyor3B89VNuVmEYGkNluDD`)
        .then(resp => resp.json())
        .then((json) => {
            const gifs = json.data.map(gif => ({ 
                url: gif.images.original.url,
                key: gif.id
            })) 
            this.setState({ 
                gifs: gifs.slice(0,3)
            })
        })
    }

    render() {
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount() {
        this.fetchGifs()
    }
}