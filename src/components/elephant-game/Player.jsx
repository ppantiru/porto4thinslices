import { useState, useEffect } from 'react'
import useKeyPress from '../../utils/KeysHandler'
import elFrame1 from '../../assets/game/downFrame.png'
import elFrame2 from '../../assets/game/neutralFrame.png'
import elFrame3 from '../../assets/game/upFrame.png'



function Player({playerPosX, playerPosY, setPlayerPosY, groundLevel, playerWidth, playerHeight}) {

  const jumpHight = 200
  const jumpSpeed = 40
  const GRAVITY = 10
  const [ falling, setFalling ] = useState(true)
  const [ step, setStep ] = useState(0)
  const upPressed = useKeyPress('ArrowUp')

  // Fly lil dragon, fly
  useEffect(() => {
    let gameTimerId
    let frameTimerId
    
    if(upPressed && (playerPosY < jumpHight)){
        gameTimerId = setInterval(() => {
          setPlayerPosY(playerPosY => playerPosY + jumpSpeed)
        }, 30)
    }else{
      clearInterval(gameTimerId)
      setFalling(true)
    }

    if(playerPosY > groundLevel && falling) {
      clearInterval(gameTimerId)
      gameTimerId = setInterval(() => {
        setPlayerPosY(playerPosY => playerPosY - GRAVITY)
      }, 30)
    }else if(playerPosY === groundLevel){
      setFalling(false)
    }

    if(playerPosY === groundLevel && !falling){
      frameTimerId = setInterval(() => {
        setStep(step => {
          const framsList = [0,1,2,3,0] //frames: neutral = 0 || 2, up = 1, down = 3, 
          return framsList[step+1]
        })
      }, 300)
    }

    return () => {
      clearInterval(gameTimerId)
      clearInterval(frameTimerId)
    }
  }, [ groundLevel, falling, upPressed, playerPosY, setPlayerPosY])

  return (
    <div className='collisionBox' style={{
        position: 'absolute',
        width: playerWidth,
        height: playerHeight,
        left: playerPosX,
        bottom: playerPosY,
        zIndex:5
    }}>
      <img className='palyerAsset' src={
        (step === 0) ? elFrame2
        : (step === 1) ? elFrame3
        : (step === 2) ? elFrame2
        : (falling) ? elFrame3
        : elFrame1
      } alt='dragon?'/>
    </div>
  )
}

export default Player