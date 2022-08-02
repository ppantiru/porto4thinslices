import React from 'react'
import { useTranslation } from "react-i18next"

function Skills() {
  const { t } = useTranslation(['translationGeneral'])
  
  return (
    <>
    <a className='classicalCV' href='https://docs.google.com/document/d/0BxzCvgAQ8Us2NHpVeDJTWHVPem8/edit?usp=sharing&ouid=118417990376597084560&resourcekey=0-1wQCc31-RjkyIYtCvhRUMw&rtpof=true&sd=true'>Get classical CV here</a>
    <div className='info'>{t('no-translation')}</div>
    <h1>Alright, so what exactly do I consider to be good at?</h1>
    <p>So let's start with a mandatory disclaimer. I'm not gonna list here every thing I've done since I was a baby (that's in the CV sort of),
      but rather what my current interests are when it comes to technologies and what skills from my toolbelt I consider useful for a smooth operating company.
      So let's start with the basics:
    </p>
    <h2>Communication</h2>
    <p>An important soft skill that takes more than meets the eye.</p>
    <p>Besides the languages, of which I am <em>fluent in Romanian and English</em> with a bit of French understanding sprinkled in,
     communication includes other things, most importantly <em>active listening and understanding</em> and <em>tailored response for the interlocutor</em>.</p>
    <p>The ability to formulate a coherent and clear message does not mean the same thing for everyone, 
      so if the message is intended for a specific person or group, creating a very structured and rational response might not cut it (although it is my preferred way of communication).</p>
    <p>This understanding kept me in friendly relations with everyone I worked with.</p>

    <h2>Curiosity</h2>
    <p>Curiosity killed the cat... because the cat was stupid and didn't take the necessary precautions. (I don't hate cats... put the rotten tomato down)</p>
    <p>Curiosity is the fuel for understanding, and I like understanding how the world works,
       including new technologies and ways of using it (even if it was not necessarily intended for a certain use case).</p>
    <p>In short, I have lots of “How does X work?” in my browser history. From the web, browsers, compilers, computers, electricity down to quantum mechanics and far into space.</p>

    <h2>Problem solver</h2>
    <p>I've basically written a paper on this, and I go into a lot more detail in the <a href='/problem-solving'>next tab</a>.</p>
    <p>The very short version is: Any problem can be solved if you understand it and actively look for the right perspective to approach it.</p>
    <p>After going through different types of work within the company I work for at the moment, development,
       infra, technical support and working with people of different skill levels
       I have on many occasions ended up with a task on my lap with the message "Stuff not working, we don't know why... pls fix!",
       Or the occasional "We want to... nay, we NEED to implement X" where the response had to always be "I have no clue how to do this, but I'll figure something out."
    </p>

    <h2>Technologies</h2>
    <p>The standard model I've seen for this kind of section is to lay down a long list of programming languages and other technologies, the more, the better.</p>
    <p>I don't believe that's an actual indication of what a person can actually do, but rather of their preferences, and even preferences change over time.</p>
    <p>The main point of this section is that the programming languages and the other technologies used are a tool to reach an objective,
       not a lifestyle, and they can be learned rather fast with enough curiosity/motivation/determination</p>
    <p>However, it is still important to have worked with at least some technologies to be able to learn new ones, 
      therefor, I will still enumerate some of the stuff I either used recently or have in my preference list:</p>
      <ul>
        <li>javascript</li>
        <li>nodejs</li>
        <li>react</li>
        <li>python</li>
        <li>bash</li>
        <li>docker</li>
        <li>mongodb & mysql</li>
        <li>graphql</li>
        <li>apache velocity</li>
        <li>groovy</li>
        <li>unreal engine 5</li>
        <li>godot</li>
        <li>Preferred OS: Linux, but I can work with whatever.</li>
      </ul>
      

      <p>I could continue, but there's already a scrollbar here, meaning there's too much text for the average attention span of a human,
       but I will close with what reality considers very important.</p>

      <h2>Adaptability</h2>
      <p>Having had enough "opportunities" to work on stuff without enough permissions, limited access, or difficult people, I gathered experience in making due.</p>
      <p>I will change the things that need changing and adapt to those that don't.</p>
    </>
  )
}

export default Skills