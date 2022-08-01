import React from 'react'
import { useTranslation } from "react-i18next"
import "../stylesheets/ProblemSolving.css";

const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
	standardFontDataUrl: 'standard_fonts/',
  };
  

function ProblemSolving() {
	const { t } = useTranslation(['translationGeneral'])
  
	return (
	<>
	<div className='info'>{t('no-translation')}</div>
	<article className='letter'>
	<a className='getDoc' href='https://docs.google.com/document/d/19SaybC8GulX-1uEEeADJ5_rycpd47oWIDQIeEhhrH7w/edit?usp=sharing' target="_blank">Download document</a>


		<meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
		<style
			type="text/css"
			dangerouslySetInnerHTML={{
			__html:
				'.lst-kix_7inrd4e33ls4-7>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-7,lower-latin) ". "}.lst-kix_7inrd4e33ls4-8>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-8,lower-roman) ". "}.lst-kix_7inrd4e33ls4-1>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-1,lower-latin) ". "}.lst-kix_7inrd4e33ls4-0>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-0,decimal) ". "}ol.lst-kix_7inrd4e33ls4-6.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-6 0}.lst-kix_7inrd4e33ls4-5>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-5}ul.lst-kix_nb2t5c20wu9p-0{list-style-type:none}.lst-kix_ee62pkdhai73-1>li:before{content:"\\0025cb  "}ul.lst-kix_nb2t5c20wu9p-1{list-style-type:none}.lst-kix_ee62pkdhai73-0>li:before{content:"\\0025cf  "}.lst-kix_ee62pkdhai73-2>li:before{content:"\\0025a0  "}.lst-kix_ee62pkdhai73-3>li:before{content:"\\0025cf  "}ul.lst-kix_nb2t5c20wu9p-8{list-style-type:none}.lst-kix_ee62pkdhai73-5>li:before{content:"\\0025a0  "}ul.lst-kix_nb2t5c20wu9p-6{list-style-type:none}.lst-kix_ee62pkdhai73-4>li:before{content:"\\0025cb  "}.lst-kix_ee62pkdhai73-6>li:before{content:"\\0025cf  "}ul.lst-kix_nb2t5c20wu9p-7{list-style-type:none}ul.lst-kix_nb2t5c20wu9p-4{list-style-type:none}ul.lst-kix_nb2t5c20wu9p-5{list-style-type:none}ul.lst-kix_nb2t5c20wu9p-2{list-style-type:none}ul.lst-kix_nb2t5c20wu9p-3{list-style-type:none}.lst-kix_7inrd4e33ls4-6>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-6}.lst-kix_7inrd4e33ls4-3>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-3}ul.lst-kix_wenqc9icu6f1-1{list-style-type:none}ul.lst-kix_wenqc9icu6f1-0{list-style-type:none}ul.lst-kix_wenqc9icu6f1-3{list-style-type:none}ul.lst-kix_wenqc9icu6f1-2{list-style-type:none}ol.lst-kix_7inrd4e33ls4-0.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-0 0}ul.lst-kix_wenqc9icu6f1-5{list-style-type:none}ul.lst-kix_wenqc9icu6f1-4{list-style-type:none}ul.lst-kix_wenqc9icu6f1-7{list-style-type:none}ul.lst-kix_wenqc9icu6f1-6{list-style-type:none}ul.lst-kix_wenqc9icu6f1-8{list-style-type:none}.lst-kix_7inrd4e33ls4-4>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-4}.lst-kix_7inrd4e33ls4-7>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-7}.lst-kix_7inrd4e33ls4-1>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-1}ol.lst-kix_7inrd4e33ls4-1.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-1 0}ol.lst-kix_7inrd4e33ls4-7.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-7 0}ol.lst-kix_7inrd4e33ls4-1{list-style-type:none}ol.lst-kix_7inrd4e33ls4-2{list-style-type:none}ol.lst-kix_7inrd4e33ls4-3{list-style-type:none}ol.lst-kix_7inrd4e33ls4-4{list-style-type:none}ol.lst-kix_7inrd4e33ls4-5{list-style-type:none}ol.lst-kix_7inrd4e33ls4-6{list-style-type:none}ol.lst-kix_7inrd4e33ls4-7{list-style-type:none}ol.lst-kix_7inrd4e33ls4-8{list-style-type:none}ol.lst-kix_7inrd4e33ls4-0{list-style-type:none}ul.lst-kix_t7st5d3oe79x-0{list-style-type:none}.lst-kix_nb2t5c20wu9p-0>li:before{content:"\\0025cf  "}.lst-kix_nb2t5c20wu9p-2>li:before{content:"\\0025a0  "}.lst-kix_t7st5d3oe79x-6>li:before{content:"-  "}.lst-kix_t7st5d3oe79x-8>li:before{content:"-  "}.lst-kix_nb2t5c20wu9p-3>li:before{content:"\\0025cf  "}.lst-kix_t7st5d3oe79x-5>li:before{content:"-  "}.lst-kix_2fumwa78v6pm-0>li:before{content:"-  "}.lst-kix_2fumwa78v6pm-1>li:before{content:"-  "}.lst-kix_nb2t5c20wu9p-1>li:before{content:"\\0025cb  "}.lst-kix_t7st5d3oe79x-7>li:before{content:"-  "}ol.lst-kix_7inrd4e33ls4-8.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-8 0}.lst-kix_wenqc9icu6f1-2>li:before{content:"\\0025a0  "}.lst-kix_wenqc9icu6f1-1>li:before{content:"\\0025cb  "}ul.lst-kix_ee62pkdhai73-8{list-style-type:none}ul.lst-kix_ee62pkdhai73-7{list-style-type:none}ol.lst-kix_7inrd4e33ls4-5.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-5 0}ul.lst-kix_ee62pkdhai73-6{list-style-type:none}ul.lst-kix_ee62pkdhai73-5{list-style-type:none}ul.lst-kix_ee62pkdhai73-4{list-style-type:none}.lst-kix_wenqc9icu6f1-0>li:before{content:"\\0025cf  "}ul.lst-kix_ee62pkdhai73-3{list-style-type:none}ul.lst-kix_ee62pkdhai73-2{list-style-type:none}.lst-kix_7inrd4e33ls4-0>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-0}ol.lst-kix_7inrd4e33ls4-2.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-2 0}ul.lst-kix_ee62pkdhai73-1{list-style-type:none}ul.lst-kix_ee62pkdhai73-0{list-style-type:none}.lst-kix_ee62pkdhai73-8>li:before{content:"\\0025a0  "}.lst-kix_7inrd4e33ls4-2>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-2}.lst-kix_wenqc9icu6f1-3>li:before{content:"\\0025cf  "}.lst-kix_ee62pkdhai73-7>li:before{content:"\\0025cb  "}.lst-kix_wenqc9icu6f1-4>li:before{content:"\\0025cb  "}ol.lst-kix_7inrd4e33ls4-3.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-3 0}.lst-kix_wenqc9icu6f1-5>li:before{content:"\\0025a0  "}.lst-kix_7inrd4e33ls4-8>li{counter-increment:lst-ctn-kix_7inrd4e33ls4-8}.lst-kix_wenqc9icu6f1-6>li:before{content:"\\0025cf  "}.lst-kix_2fumwa78v6pm-4>li:before{content:"-  "}.lst-kix_2fumwa78v6pm-3>li:before{content:"-  "}.lst-kix_2fumwa78v6pm-5>li:before{content:"-  "}.lst-kix_nb2t5c20wu9p-8>li:before{content:"\\0025a0  "}.lst-kix_t7st5d3oe79x-0>li:before{content:"-  "}.lst-kix_2fumwa78v6pm-2>li:before{content:"-  "}.lst-kix_2fumwa78v6pm-6>li:before{content:"-  "}.lst-kix_wenqc9icu6f1-7>li:before{content:"\\0025cb  "}.lst-kix_wenqc9icu6f1-8>li:before{content:"\\0025a0  "}.lst-kix_nb2t5c20wu9p-7>li:before{content:"\\0025cb  "}.lst-kix_t7st5d3oe79x-1>li:before{content:"-  "}.lst-kix_nb2t5c20wu9p-4>li:before{content:"\\0025cb  "}.lst-kix_nb2t5c20wu9p-6>li:before{content:"\\0025cf  "}.lst-kix_t7st5d3oe79x-2>li:before{content:"-  "}.lst-kix_t7st5d3oe79x-4>li:before{content:"-  "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_nb2t5c20wu9p-5>li:before{content:"\\0025a0  "}.lst-kix_t7st5d3oe79x-3>li:before{content:"-  "}ul.lst-kix_t7st5d3oe79x-1{list-style-type:none}.lst-kix_7inrd4e33ls4-2>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-2,lower-roman) ". "}ul.lst-kix_t7st5d3oe79x-2{list-style-type:none}ul.lst-kix_t7st5d3oe79x-3{list-style-type:none}ol.lst-kix_7inrd4e33ls4-4.start{counter-reset:lst-ctn-kix_7inrd4e33ls4-4 0}ul.lst-kix_t7st5d3oe79x-4{list-style-type:none}ul.lst-kix_2fumwa78v6pm-8{list-style-type:none}ul.lst-kix_t7st5d3oe79x-5{list-style-type:none}.lst-kix_7inrd4e33ls4-3>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-3,decimal) ". "}.lst-kix_7inrd4e33ls4-4>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-4,lower-latin) ". "}ul.lst-kix_2fumwa78v6pm-7{list-style-type:none}ul.lst-kix_t7st5d3oe79x-6{list-style-type:none}ul.lst-kix_2fumwa78v6pm-6{list-style-type:none}ul.lst-kix_t7st5d3oe79x-7{list-style-type:none}ul.lst-kix_2fumwa78v6pm-5{list-style-type:none}ul.lst-kix_t7st5d3oe79x-8{list-style-type:none}ul.lst-kix_2fumwa78v6pm-4{list-style-type:none}.lst-kix_2fumwa78v6pm-8>li:before{content:"-  "}.lst-kix_7inrd4e33ls4-5>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-5,lower-roman) ". "}.lst-kix_7inrd4e33ls4-6>li:before{content:"" counter(lst-ctn-kix_7inrd4e33ls4-6,decimal) ". "}ul.lst-kix_2fumwa78v6pm-3{list-style-type:none}ul.lst-kix_2fumwa78v6pm-2{list-style-type:none}.lst-kix_2fumwa78v6pm-7>li:before{content:"-  "}ul.lst-kix_2fumwa78v6pm-1{list-style-type:none}ul.lst-kix_2fumwa78v6pm-0{list-style-type:none}ol{margin:0;padding:0}table td,table th{padding:0}.c1{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c10{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:22pt;font-family:"Arial";font-style:normal}.c3{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c4{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c7{padding-top:0pt;padding-bottom:12pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c0{padding-top:12pt;padding-bottom:12pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c8{background-color:#ffffff;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c2{margin-left:36pt;padding-left:0pt}.c5{padding:0;margin:0}.c9{font-style:italic}.c6{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}'
			}}
		/>
		<p>
		<span className="c1"><em>v1.2.2</em></span>
		</p>
		<br/>
		<p className="c7">
			<span className="c10">On the subject of problem solving</span>
			<br/>
			<span className="c1"><em>(thinking like an engineer)</em></span>
		</p>
		<p className="c0">
			<span className="c1">General algorithm of problem solving:</span>
		</p>
		<p className="c0 c6">
			<span className="c1" />
		</p>
		<p className="c1">
			<span className="c1">
				<strong>
					{"{"}State at T1{"}"} =&gt; f(ideas, perspective, actions, interval) =&gt;{" "}
			{"{"}State at T2{"}"}
				</strong>
			</span>
		</p>
		<p className="c0">
			<span className="c1">Where </span>
		</p>
		<p className="c0">
			<span className="c1">
			T1 and T2 are the the moments in time when the state is being observed
			<br />
			idea = The imagined preferred state at the moment of time T2, or the ideal
			state at T2
			<br />
			perspective = The scale and angle of visualizing the state at the moment
			of time T1
			<br />
			actions = The implementation of changes for transitioning from the state
			at T1 to the state at T2
			<br />
			interval = T2 - T1
			</span>
		</p>
		<p className="c0">
			<span className="c3">I) Defining “problem”</span>
		</p>
		<p className="c0">
			<span className="c1">
			A problem is a matter or situation regarded as unwelcome or harmful and
			needing to be dealt with and overcome. (as defined by the oxford
			dictionary)
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			In other words a “problem” is the dissonance between the state of matters
			at a given moment and the desire of an individual or group for that state
			to be something different, which causes discontentment/dissatisfaction
			which in turn causes discomfort to that individual or group.
			</span>
		</p>
		<p className="c0">
			<span className="c3">II) Defining the “objective”</span>
		</p>
		<p className="c1">
			<span className="c1">
			The objective in this case represents the best solution to our problem,
			which is the closest we can get the state of matters at the end of
			implementing our actions to the ideal state represented by our idea.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			The way we measure the success of the implementation is by the
			contentment/satisfaction level &nbsp;of the individual trying to solve a
			problem after the actions implemented have concluded, which is also
			closely tied with the contentment/satisfaction level of the other
			implicated entities (individuals, or groups of individuals).
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			If everyone or most people involved/affected agree with you, there may be
			little to no human barriers when you are trying to implement a change.
			<br />
			In order for the positive effects obtained to last as long as possible, a
			balance needs to be achieved between the level of satisfaction of the
			entity implementing the change and the level of satisfaction of the other
			implicated entities. <br />
			<br />
			<em>How do we achieve this balance?</em>
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			If the ideas of the one desiring something conflicts with the
			contentment/satisfaction of the neighboring (at the scale of impact
			produced by the actions) individuals, the result can be hindered or halted
			altogether. However, if the neighboring individuals (which also constitute
			other entities, like companies or governments) can be convinced by the
			ideas of the individual or entity in question, actions can be implemented
			to achieve the set goal without resistance, or even with extra help, hence
			bringing the one desiring some change closer to contentment/satisfaction.
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			The actions to be implemented at this step should not affect (or create
			the impression that it will affect) the satisfaction of the other
			individuals/entities implicated/impacted by said actions.
			</span>
		</p>
		<p className="c0">
			<span className="c3">III) What is the function f?</span>
		</p>
		<p className="c0">
			<span className="c1">
			In short it is the representation of the process of transitioning between
			two different states within a given interval of time.
			</span>
		</p>
		<p className="c0">
			<span>The algorithm of solving a problem, denoted with </span>
			<span className="c9">f(ideas, perspective, actions, interval)</span>
			<span>
			&nbsp;in this paper, is fundamentally a set of steps needed for different
			elements of a given situation to change and combine with each other at a
			specified level of abstraction, also known as perspective, within a given
			time frame to produce a result that is closest to the ideas of how said
			elements should be and combine in order to maximize the
			contentment/satisfaction level of the one implementing the ideas whilst
			maintaining or preferably growing the contentment/satisfaction level of
			the other implicated entities (individuals, or groups of individuals) as
			well.
			</span>
		</p>
		<p className="c0">
			<span className="c3">IV) Properties of the inputs for this process ?</span>
		</p>
		<ol className="c5 lst-kix_7inrd4e33ls4-0 start" start={1}>
			<li className="c0 c2 li-bullet-0">
			<span className="c1">
				Ideas <br />* They can change - if addressed in a particular way
				<br />* They can stay the same intentionally - if the approach is
				misguided
				<br />* They can stay the same by being ignored - if the approach is not
				engaging
			</span>
			</li>
			<li className="c0 c2 li-bullet-0">
			<span className="c1">
				Perspectives
				<br />* They can be narrow, closely tied to very specific aspects of the
				given observed state
				<br />* They can be broader and encompassing multiple or all relevant
				aspects of the given observed state
				<br />* They can be too broad where the given observed state becomes
				irrelevant.
			</span>
			</li>
			<li className="c0 c2 li-bullet-0">
			<span className="c1">
				Actions
				<br />* They can be in motion/underway with the target of changing
				something
				<br />* They can be in continuous motion with the purpose of maintaining
				a certain balance
				<br />* The are not implemented
			</span>
			</li>
			<li className="c0 c2 li-bullet-0">
			<span className="c1">
				Interval
				<br />* It can be to short for any actions to produce visible changes
				<br />* It can be long enough for the process to produce the expected
				result without the problem becoming obsolete/deprecated.
				<br />* It can be too long for the produced result to be relevant
				anymore.
			</span>
			</li>
		</ol>
		<p className="c0 c6">
			<span className="c1" />
		</p>
		<p className="c0">
			<span className="c3">V) Ideas and perspective</span>
		</p>
		<p className="c1">
			<span className="c1">
			The ideas are not constrained by laws, morality or any other human
			concept.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			Any idea can be set in motion in such a way that the balance (see section
			II ) is maintained.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			The key concept that humanity has in its toolbelt is perspective.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			Perspective sits at the core of the ideas and the set of actions that can
			be set in motion to achieve anything.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			For any given problem/desire there exists a perspective which can be
			harnessed to achieve a solution.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			A common trap is to limit the perspective to a narrow set of concepts
			close to the apparent problem and to the cultural norms of the region,
			however it does NOT have to be limited.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			The progress of humanity up to this point and moving forward was and still
			is driven by how well we can harvest the power of perspective (also
			referred to as “thinking outside of the box”) - which is the source of
			creativity and innovation.
			</span>
		</p>
		<hr />
		<p className="c4">
			<span className="c1" />
		</p>
		<p className="c1">
			<span className="c1">Example of solving a problem:</span>
		</p>
		<p className="c1">
			<span className="c1">
			(credit to Peter Sage for this example - which inspired the current paper)
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			The problem - an individual is struggling with lack of time to complete
			his daily tasks. <br />
			Desires to learn better time management skills.
			</span>
		</p>
		<hr />
		<p className="c0">
			<span className="c1">Observations:</span>
		</p>
		<p className="c0">
			<span className="c1">
			The perspective of his approach for solving the problem is limited by the
			familiar - how he used to do things - by his environment and the people he
			interacts with.
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			Devising a solution:
			<br />
			<br />
			<strong>Step 1:</strong> Setting the ides and perspective
			</span>
		</p>
		<ul className="c5 lst-kix_t7st5d3oe79x-0 start">
			<li className="c0 c2 li-bullet-0">
			<span className="c1">
				Establishing an objective for what the desired outcome is from an
				outwards to inwards perspective
			</span>
			</li>
		</ul>
		<p className="c0">
			<span className="c1">What does the individual actually want?</span>
		</p>
		<ul className="c5 lst-kix_ee62pkdhai73-0 start">
			<li className="c1 c2 li-bullet-0">
			<span className="c1">More time to do things he enjoys</span>
			</li>
			<li className="c1 c2 li-bullet-0">
			<span className="c1">Less stress about what he cannot do</span>
			</li>
			<li className="c1 c2 li-bullet-0">
			<span className="c1">
				Contentment/satisfaction of the people he interacts with with regards to
				him (the people’s perception of him)
			</span>
			</li>
			<li className="c1 c2 li-bullet-0">
			<span className="c1">
				And ultimately raising his own contentment/satisfaction in everyday
				life.
			</span>
			</li>
		</ul>
		<p className="c0">
			<span className="c1">
			<br />
			His initial idea of resolving the problem: Seeking to learn time
			management skills.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			Does it address all the points to achieve the objective? - maybe to a
			limited extent, but there is only so much time in a day to actually do
			things regardless of how you organize them.
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			How can we change the scope of the problem to have the easiest way of
			implementing a more viable solution?
			</span>
		</p>
		<p className="c1">
			<span className="c1">
			We can look for the source/cause of the issue which in this example is the
			habit of saying “yes” to too many things, most of which the individual in
			question has no reason/desire of saying “yes” to.
			</span>
		</p>
		<p className="c0">
			<span className="c1"><strong>Step 2:</strong> Actions and interval</span>
		</p>
		<p className="c1">
			<span className="c1">
			This individual can resolve the problem within a relatively short time by
			weeding out the things that are of least benefit to himself.
			</span>
		</p>
		<p className="c0">
			<span className="c1">More concretely:</span>
		</p>
		<ul className="c5 lst-kix_wenqc9icu6f1-0 start">
			<li className="c1 c2 li-bullet-0">
			<span className="c1">
				Eliminating the current tasks he is engaged in that offer the least
				benefits
			</span>
			</li>
			<li className="c1 c2 li-bullet-0">
			<span className="c1">
				Creating a stricter filter by which he engages in new tasks
			</span>
			</li>
		</ul>
		<hr />
		<p className="c4">
			<span className="c1" />
		</p>
		<p className="c0 c6">
			<span className="c1" />
		</p>
		<p className="c0">
			<span className="c1">
			This concept is applied based on the particularities of the state of a
			situation
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			Other examples of problems with a focus on perspective:
			</span>
		</p>
		<ul className="c5 lst-kix_nb2t5c20wu9p-0 start">
			<li className="c1 c2 li-bullet-0">
			<span className="c1">
				A person that cannot not afford food - One is not hungry simply because
				he is poor. It is the environment and people he surrounds himself with
				and the connections he has with the world around
			</span>
			</li>
			<li className="c1 c2 li-bullet-0">
			<span className="c1">
				A person that wants to lose weight - One is not simply overweight
				because the universe decided so, it is a state caused by certain
				external or internal factors which if identified correctly can be
				addressed to solve the problem with the least effort. (Throwing around
				ideas like diet and exercise does not address the cause, such as for an
				economically poor individual the advice “get a job” may not be a valid
				option )
			</span>
			</li>
			<li className="c1 c2 li-bullet-0">
			<span className="c1">
				One does not have to die simply because what we observe around us tries
				to convince us it is an inevitability. Biological aging has been already
				classified as a disease by the World Health Organization and progress is
				already being made to counteract it and/or the mind may not have to be
				contained by the only biological machine that has contained it up to
				this point.
			</span>
			</li>
		</ul>
		<p className="c0 c6">
			<span className="c1" />
		</p>
		<p className="c0">
			<span className="c1">
			Granted, some problems seem trickier than others due to the current
			understanding of the reality we enhabit. This means that the perspectives
			we currently use to solve these issues either require exotic actions that
			are beyond our level of technological advancement and/or demand an
			unreasonable or absurd amount of time to be implemented and run its
			course.
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			However the pool of perspectives is limitless, we just have to tune the
			perspective so that a reasonable outcome can be obtained in a reasonable
			time.
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			The ability to find better perspectives is given by knowledge and the
			understanding of the world around us. This used to be quite an important
			problem in the past, but we have partially solved this by providing access
			to the collective knowledge with the use of the internet.
			<br />
			Using this we can also gain understanding by searching for the answer to
			the dynamic question: &nbsp; “How does X work?”
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			The more we understand the reality around us, the larger the pool of
			solutions to our problems and desires, and the better the result.
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			This does not mean that by not being a physicist or some other type of
			scholar we cannot use this principle. This way of approaching problems is
			always going to provide the best possible course of action one can take to
			reach a goal given the interactions with our reality.
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			A general good way to start, as demonstrated by the example above,
			is to properly define the desired outcome from the highest level of
			abstraction that is still relevant to the individual/entity.
			</span>
		</p>
		<p className="c0">
			<span className="c1">
			One last important thing to outline is that this process scales to any
			type of problem.
			</span>
		</p>
	</article>
	</>
  )
}

export default ProblemSolving
