import React from 'react';
import './App.css'
import ImagesArr from "./ImagesArr.js"
import Header from './Header'
import Score from './Score'
import ImgCard from './ImgCard'
import Footer from './Footer'
import crystals1 from './images/crystals1.jpg'



class App extends React.Component {
    state = {
        images: [],
        score: 0,
        topScore: 0,
        clickedImages: []
    }
    

    componentDidMount() {

        console.log(ImagesArr[0].path)
        this.setState(
            {images: ImagesArr}) 
    }
    handleImgClick = id => {
        const { score, clickedImages, images } = this.state;
        console.log(clickedImages)
        // initialize an empty array for clicked items
        // if hasn't been clicked before, and is clicked now
            // it can be added to the array of clicked items
            // score is incremented by one
        if (clickedImages.indexOf(id) < 0){
            this.setState({
                score: score + 1,
                clickedImages: [...clickedImages, id],
                images: images.sort(() => Math.random() - 0.5)
            }) 

        // else clicked id is included in the array
            // the game resets, 
            // score is set to 0
            // clicked value array clears
        } 
        else {
            console.log("you lose")
            if (this.state.score > this.state.topScore) {
                this.setState({
                    topScore: this.state.score
                });
            }
            this.setState({
                score: 0,
                clickedImages: []
            })
        }

        if (score === 12){
            console.log("you win!")
        }
        console.log("this img was clicked: ", id);
        console.log("this is the users score: ", score);
    }
    randomShuffle(){
        this.state.images.sort(() => Math.random() - 0.5)
    }
    render(){
        return (
            <div>
                <Header />
                <Score currentScore={this.state.score} topScore={this.state.topScore}/>

                <div className="ui grid custom-grid">
                    <div className="ui cards centered">
                    {this.state.images.map((img) => {
                        return (
                            <ImgCard
                                handleImgClick={this.handleImgClick}
                                image={crystals1}
                                key={img.id}
                                id={img.id}
                                info={`crystal spread number ${img.id}`}
                            />
                        ) 
                    })
                    }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
            
export default App;