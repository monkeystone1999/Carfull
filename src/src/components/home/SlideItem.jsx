import React from 'react';

function SlideItem(props) {
    const {src} = props;
    
    return (
        <img src={src} alt="" />
    );
}

export default SlideItem;