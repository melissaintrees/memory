import React from 'react';
import ImgCard from './ImgCard'


class ImgList extends React.Component {

    render(){
        //mapping over the images array, sending props to imgCard
        console.log(this.props.score)
        const imgList = this.props.images.map((img, ind) => {
            return <ImgCard 
                        images={this.props.images} 
                        image={img} 
                        key={ind + 1} 
                        info={`crystal spread number ${ind + 1}`} 
                    />
        });
        console.log(imgList)
        return (
            <div>
                <div className="ui four stackable cards">
                    {imgList}
                </div>
            </div>
        )

    }


}

export default ImgList;