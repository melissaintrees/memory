import React from 'react';

const ImgCard = props => {
        return (     
                <div className="card">
                        <img 
                            onClick={()=>props.handleImgClick(props.id)}
                            score={props.score} 
                            src={props.image} 
                            alt={props.info}>
                        </img>
                    
                </div>
        ) 
}

export default ImgCard;