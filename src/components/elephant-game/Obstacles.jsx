import { useEffect } from 'react'
import rock1 from '../../assets/elephant-game/rock1.png'
import rock2 from '../../assets/elephant-game/rock2.png'


function Obstacles({obtacleWidth, obstacleHeight, obstaclePosX, setObstaclePosX, obstaclePosY, getRandomInt, offset, setOffset}) {

const obstacleSpeed = 5
const initialPos = 900


useEffect(() => {
  let obstTimerId
  if(obstaclePosX > -offset){
    obstTimerId = setInterval(() => {
        setObstaclePosX(obstaclePosX => (obstaclePosX - obstacleSpeed))
    },10)
  }else{
    setObstaclePosX(initialPos)
    setOffset(getRandomInt(0,1) ? getRandomInt(20, 70): getRandomInt(200,700))
  }


  return () => {
    clearInterval(obstTimerId)
  }
},[obstaclePosX, setObstaclePosX, getRandomInt, offset, setOffset])


  return (
    <>
      <div style={{
          position: 'absolute',
          backgroundColor: '',
          width: obtacleWidth,
          height: obstacleHeight,
          left: obstaclePosX,
          bottom: obstaclePosY,
          zIndex: 5
      }}><img src={rock1} alt='rock' width={obtacleWidth} height={obstacleHeight}/></div>
      <div style={{
        position: 'absolute',
        backgroundColor: '',
        width: obtacleWidth,
        height: obstacleHeight,
        left: obstaclePosX + offset,
        bottom: obstaclePosY,
        zIndex: 5
      }}><img src={rock2} alt='rock' width={obtacleWidth} height={obstacleHeight}/></div>
    </>
  )
}

export default Obstacles