import React from 'react'
import Videopage from '../videosection/videopage'
import ClassContent from '../Class/classes'
import Guidance from '../guidance/guidance'
import Book from '../booksection/book'
import Areastudent from '../Areastudent/area'
import Course from '../Futurecourse/Course'
import Skillbar from '../Skill/Skillbar'

function home() {
  return (
    <>
    <div>
      <Videopage />
      <ClassContent />
      <Guidance />
      <Book />
      <Areastudent />
      <Course />
      <Skillbar />
    </div>
    </>
  )
}

export default home