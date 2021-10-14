import React from 'react';

const PutModal = (props) => {
    if (!props.open) {
        return null
    } 
    console.log(props)
    return (
        <div>
            Olá
        </div>
    );                                                                          
}

export default PutModal;
