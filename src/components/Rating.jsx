import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, onRate }) => {
    return <>
    {
        [...Array(5)].map((_, ind) => (
                <span key={ind} onClick={() => onRate(ind + 1)}>
                    {
                        rating > ind ?
                            <AiFillStar color='orange' size='20' />
                            :
                            <AiOutlineStar size='20' />
                    }
                </span>
        ))}
        </>    
}

export default Rating