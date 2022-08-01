import { Col } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BackToTop from './BackToTop'
import Skills from '../pages/Skills'
import StillLearning from '../pages/StillLearning'
import Portfolio from '../pages/Portfolio'
import ProblemSolving from '../pages/ProblemSolving'
import Fun from '../pages/Fun'
import LoginForm from '../auth/LoginForm'
import RegisterForm from '../auth/RegisterForm'


function Pages(){

    return (
            <Col lg='10' xs='12' className='MainBody-outer'>
                <div id='Mainbody' >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/problem-solving' element={<ProblemSolving />} />
                        <Route path='/still-learning' element={<StillLearning />} />
                        <Route path='/fun' element={<Fun />} />
                        <Route path='/login' element={<LoginForm/>} />
                        <Route path='/register' element={<RegisterForm/>} />
                    </Routes>
                    <BackToTop />
                </div>
            </Col>
    );
}

export default Pages;