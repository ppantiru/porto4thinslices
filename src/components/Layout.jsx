import React, { useRef } from 'react'
import {Container, Tab, Row} from 'react-bootstrap'
import Sidebar from './Sidebar'
import Pages from './Pages'


function Layout() {
    const width = window.innerWidth;
    const breakpoint = 991;

    const contentRef = useRef()
    function scrollToContent () {
        contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
  return (
    <Container id='MainbodyContainer' fluid>
        <Tab.Container id="left-tabs" defaultActiveKey="aboutsite">
            <Row>
                <Sidebar width={width} breakpoint={breakpoint} scrollToContent={scrollToContent} />
                {width < breakpoint ? <div ref={contentRef}/> : null}
                <Pages />
            </Row>
        </Tab.Container>
    </Container>
  )
}

export default Layout