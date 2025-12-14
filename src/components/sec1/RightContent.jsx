import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='rightOverFlowDiv' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>

     {props.users.map(function (e,idx){
      return <RightCard key={idx} color={e.color} id={idx} img={e.img} tag={e.tag} intro={props.intro}  />
     })}
    </div>
  )
}

export default RightContent
