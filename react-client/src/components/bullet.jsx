import React from 'react';
import '../styles/bullet.css'

const Bullets = (props) => {
  //console.log(props.bulletLocations)
  var bullets = props.bulletLocations
  //console.log(bullets)
  return (

    <svg>
      {bullets.map((bullet)=> {
       if(bullet[3]==='Pea-Shooter') {
        return(
         <circle className='bullets' cx={Number(bullet[0])} cy={Number(bullet[1])} r="10"  />
         )
        } else if(bullet[3]==='Cabbage') {
          return(
            <circle className='cabbage' cx={Number(bullet[0])} cy={Number(bullet[1])} r="20"  />
            )
        }else if(bullet[3]==='Laser') {
          return(
            <rect className='laser' x={Number(bullet[0])} y={Number(bullet[1])-10}  height='20' width='1000'>
              <animate attributeName="width" from='100' to="1000" dur="0.3s"/>
            </rect>
            )
        }
       })}
    </svg>
)}

export default Bullets;