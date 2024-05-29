import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Filter({onSort}){
    const [isOpen, setIsOpen]=useState(false) //état du menu déroulant
    const [sortOrder, setSortOrder]=useState('asc') //gère l'ordre de tri actuellement sélectionné

    const toggleMenu = () => { //fonction qui bascule l'ouverture du menu
        setIsOpen(!isOpen)
    }

    const handleSort = (order)=>{ //fonction qui gère le tri
        setSortOrder(order);//met à jour le libellé du bouton avec l'ordre de tri sélectionné.
        onSort(order); //trier article dans composant parent
        setIsOpen(false);//ferme le menu déroulant 
        }


    return(
        <div className='sort-menu'>
            <button onClick={toggleMenu}>
                <p className='container_order_first'>
                    Trier prix {sortOrder === 'asc' ? 'Croissant' : 'Décroissant'}
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </p>
            {isOpen && (
                <div className='container_order'>
                    <p onClick={() => handleSort('asc')}>Croissant</p>
                    <p onClick={() => handleSort('desc')}>Décroissant</p>
                </div>
                )}
            </button>
        </div>
    )
}

export default Filter;