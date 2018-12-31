import React from 'react';
import './App.css'
import Header from './Header'
import Score from './Score'
import ImgCard from './ImgCard'
import Footer from './Footer'

// helper function that grabs the images for webpack processing
function importAll(r) {
    let ImagesObj = {};
    r.keys().map((item) => { 
        return (
            ImagesObj[item.replace('./', '')] = r(item)
        ) 
    });
    return ImagesObj;
}

let ImagesObject = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

// this puts the image paths in an array:
let ImagesArr = [];
for (var key in ImagesObject) {
    ImagesArr.push(ImagesObject[key])
}

class App extends React.Component {
    state = {
        images: [],
        score: 0,
        topScore: 0,
        clickedImages: [],
    }

    componentDidMount() {
        this.setState(
            { images: ImagesArr}) 
    }

    handleImgClick = id => {
        const { score, clickedImages, images } = this.state;
        // console.log(clickedImages)
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
            this.setState({
                score: 1
            })
        }
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
                                image={img}
                                key={img}
                                id={img}
                                info={`crystal spread number ${img}`}
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