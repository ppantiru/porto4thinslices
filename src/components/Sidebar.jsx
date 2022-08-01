import '../stylesheets/Cyber.css'
import { Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next"
import { useNavigate, useLocation } from 'react-router-dom'

function Sidebar(props) {
	const {width, breakpoint, scrollToContent} = props;
    const { t } = useTranslation(['translationGeneral'])
    const buttons = ['home', 'portfolio', 'skills', 'problem-solving', 'still-learning', 'fun']
	const navigate = useNavigate()
	const location = useLocation()

	function onClick(path){
		if(path === 'home')
			navigate('')
		else
			navigate(`${path}`)

		if(width < breakpoint)
			scrollToContent()
	}

	
  return (
		<Col xs='12' lg='2' className={width < breakpoint ? 'd-lg-none mobile-outer' : "d-none d-lg-block sidebar"} >
			<Col className={width < breakpoint ? 'mobile-inner' : 'sidebar-inner scrollable'} xs='12' sm='12' lg='2'>
				{buttons.map((translationKey) =>
					<button key={translationKey} 
					className={
						`${translationKey} cybr-btn ${`/${translationKey}` === location.pathname ? 'active' : ''}
						${translationKey === 'home' && location.pathname === '/' ? 'active' : '' }
						`
					}
					onClick={
						()=>onClick(`${translationKey}`)
					} >
						{t(translationKey)}<span aria-hidden>_</span>
						<span aria-hidden className="cybr-btn__glitch">root_</span>
						<span aria-hidden className="cybr-btn__tag">R25</span>
					</button>
				)}
			</Col>
		</Col>
  )
}

export default Sidebar