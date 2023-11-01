import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'
          >About
          </p>
        </div>

        <p className='text-xl mt-20'>
        My name is Ryan Milsap, originally from Overland Park, Kansas. I'm currently a Sophomore at the University of Alabama, majoring in Computer Science. During my time at UA, I've been exposed to various programming languages, including C/C++, Java, and HTML. Presently, I'm part of a team of six, where we're simulating the agile software development process. This hands-on experience is teaching me real-world skills, complemented by tools like Git.
        </p>

        <br />
        
        <p className='text-xl'>
        I'm always eager to learn and advance my skills in technology and programming. I believe hands-on experience, through internships and projects, is the best way to truly understand and apply what I've learned in class. I'm excited to explore new opportunities and challenges that come my way.
        </p>
      </div>
    </div>
  )
}

export default About