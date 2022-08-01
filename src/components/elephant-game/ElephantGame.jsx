import { useState, useEffect } from 'react'
import Elephant from './Elephant.jsx'
import Obstacles from './Obstacles'
import Landscape from './Landscape'
import useKeyPress from '../../utils/KeysHandler'
import { useTranslation } from "react-i18next"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ElephantGame() {

  const { t } = useTranslation();
  const groundLevel = 30
  const playerWidth = 60
  const playerHeight = 50
  const playerPosX = 100
  const obstaclePosY = groundLevel
  const obtacleWidth = 20
  const obstacleHeight =  20
  const [ gameRun , setGameRun ] =  useState(false)
  const [ playerPosY, setPlayerPosY ] = useState(groundLevel)
  const [ obstaclePosX, setObstaclePosX ] = useState(900)
  const [ offset, setOffset ] = useState(30)
  const [ score, setScore ] = useState(0)

  function reset(){
    setPlayerPosY(groundLevel)
    setObstaclePosX(900)
    setScore(0)
  }

  const enterPressed = useKeyPress('Enter')

  useEffect(() => {
    if(enterPressed && !gameRun){
      setGameRun(true)
      reset()
    }
    if(
        (
          playerPosX + playerWidth > obstaclePosX &&
          playerPosX < obstaclePosX + obtacleWidth &&
          playerPosY - playerHeight < obstacleHeight
        ) ||
        (
          playerPosX + playerWidth > obstaclePosX + offset &&
          playerPosX < obstaclePosX + obtacleWidth + offset &&
          playerPosY - playerHeight < obstacleHeight
        )
      ){
        setGameRun(false)
      }
  },[obstaclePosX, enterPressed, playerPosY, offset, gameRun])

  useEffect(() => {
    let scoreIntervalId
    if (gameRun){
      scoreIntervalId = setInterval(() => {
        setScore(score => (score + 15))
      }, 1000);
    }
    return () => clearInterval(scoreIntervalId)
    
  },[gameRun])

  return (
    <div className='gamewindow'>
      <Landscape/>
      {gameRun ?
        <>
          <Elephant
            playerWidth={playerWidth}
            playerHeight={playerHeight}
            gameRun={gameRun}
            setGameRun={setGameRun}
            groundLevel={groundLevel}
            playerPosX={playerPosX}
            playerPosY={playerPosY}
            setPlayerPosY={setPlayerPosY}
          /> 
          <Obstacles
            obtacleWidth={obtacleWidth}
            obstacleHeight={obstacleHeight}
            obstaclePosX={obstaclePosX}
            obstaclePosY={obstaclePosY}
            setObstaclePosX={setObstaclePosX}
            getRandomInt={getRandomInt}
            offset={offset}
            setOffset={setOffset}
          />
          <p style={{position:'absolute', right:10}}>Score: {score}</p>
        </>
       : 
        <div className='score'>
          <div className='score-inner'>
            <p>{t('score')}: {score}</p>
            <p>{t('press-enter')}</p>
            <p>{t('press-up')}</p>
          </div>
        </div>
       }
    </div>
  )
}

export default ElephantGame