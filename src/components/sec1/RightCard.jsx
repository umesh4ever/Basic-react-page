import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {

  return (
    <div className='h-full shrink-0  w-80 bg-red-500 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="HAHA" />
        <RightCardContent id={props.id} color={props.color} tag={props.tag} intro={props.intro} />
    </div>
  )
}

export default RightCard
