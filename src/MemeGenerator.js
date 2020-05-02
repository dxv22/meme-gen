import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            memeData: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes}  = response.data
                this.setState({
                    memeData: memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.memeData.length)
        const randMemeImg = this.state.memeData[randNum].url
        this.setState({
            randomImage : randMemeImg
        })
    }
    render() {
        return (
            <div>
                <form className="meme-form">
                        <input 
                            type="input" 
                            name="topText" 
                            value={this.state.topText} 
                            placeholder="Top text" 
                            onChange={this.handleChange}
                        />
                        <input 
                            type="input" 
                            name="bottomText" 
                            value={this.state.bottomText} 
                            placeholder="Bottom text" 
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleSubmit}>Generate</button>
                </form>
                <div className="meme"> 
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;