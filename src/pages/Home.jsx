import React from 'react'
import { useTranslation } from "react-i18next"
import "../stylesheets/Home.css";


function Home() {
  const { t } = useTranslation(['translationGeneral'])

  return (
    <>
      <div className='info'>{t('no-translation')}</div>
      <h1>About me</h1>
      <div className='aboutMe'>
      <div className='aboutMeImageSection'>
        <img src='me.jpg' alt='me' />
        <div className='contactInfo'>
          <ul>
            <li>Name: Paul Panțiru</li>
            <li>From: Iași, Romania</li>
            <li>Email: <a href = "mailto: paulp2501@gmail.com">paulp2501@gmail.com</a></li>
            <li>Phone: +40 743 562 261</li>
          </ul>
          </div>
      </div>
      <div className='aboutMeContent'>
      <p>"Who are you?", a question that we've heard in various circumstances and which has different types of answer depending on the person.
        No, I'm not going to dive here into the philosophical discussion of what makes you "you" (but I'm down for such a discussion if you're interested),
         instead, I'm going to go over some of the classical answers people give, starting with the most obvious ones:</p>
         <p><em>My name is Paul Panțiru</em>, I am a problem solver with a background in <em>software engineering</em>, currently working in the very open-source oriented company called XWiki.</p>
         <p>In the last 8 years I've dabbled into different departments starting primarily from <em>internal and client development, to software architecture, level 3 technical support, dev ops and light cloud ops</em>.</p>
         <p>I have developed over time the habit of questioning in my head or aloud if the context is appropriate, literally (and I do not use this word lightly) everything,
          meaning that I'm almost never satisfied doing something for the sake of doing, without understanding it on a deeper level.
           In practice, this approach grants me a lot more control over the things I'm building or maintaining, minimizing the entropy of my projects, especially when fine-tuning is required,
           of course this doesn't mean it's always necessary, so the first questions are always <em>"Do we need this?", "What is the cost?" and "Does it add enough value?"</em>.
         </p>
         <p>In terms of social interactions, I am what I consider the situation to require me to be, as long as the situation isn't too greedy and doesn't dig painfully deep in my personal comfort.</p>
         <p>In terms of limits, my belief is that people set their own limitations in what they can achieve, so I left that field blank.
          I am aware of some of my flaws that I either discovered myself or have been pointed out to me,
           for example, my questionable choices in the design of this website,
            however, most of these choices have a very specific purpose, with the combined end goal of only piquing your interest if we could work frictionless together.
         </p>
      </div>
    </div>
    </>
  )
}

export default Home