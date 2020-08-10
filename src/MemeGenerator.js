import React, {Component} from "react"
import Meme from "./Meme"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.onGen = this.onGen.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ 
                    allMemeImgs: memes
                })
            })
    }
    
    onGen(e){
        e.preventDefault();
        const randomMemeId = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMeme = this.state.allMemeImgs[randomMemeId]
        this.setState({
            randomImg: randomMeme.url
        })
    }
    
    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    
    handleChange(event) {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    
    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button onClick = {this.onGen}>Gen</button>
                </form>
                {this.state.randomImg && 
                    <Meme image = {this.state.randomImg}
                          topText = {this.state.topText}
                          bottomText = {this.state.bottomText}     
                    />}
            </div>
        )
    }
}

export default MemeGenerator