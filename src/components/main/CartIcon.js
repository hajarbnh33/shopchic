import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon(){
    const [showBulle, setShowBulle]= useState(false);

    const handleBulle = () => {
        setShowBulle(true);
        setTimeout(()=> setShowBulle(false), 2000);
    }

    return(
        <div className='container_cart'>
            {showBulle && (
                <div className='bulle'>
                    Ajouter
                </div>
            )}
            <FontAwesomeIcon
                icon={faShoppingCart}
                onMouseEnter={handleBulle}
                style={{cursor:'pointer'}}
                />
        </div>
    )
}

export default CartIcon;