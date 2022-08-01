import React from 'react'
import '../stylesheets/Fun.css'
import ElephantGame from '../components/elephant-game/ElephantGame'
import { useTranslation } from "react-i18next"


function Fun() {

  const { t } = useTranslation(['translationGeneral'])

  return (
    <>
    <h1>For fun</h1>
    <div>
    <p>{t('fun-sumary')}</p>
    <p>{t('why-not')}</p>
    </div>
    <div id='game1'>
      <ElephantGame/>
    </div>
    </>
  )
}

export default Fun