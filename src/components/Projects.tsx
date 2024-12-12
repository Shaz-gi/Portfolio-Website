import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    {
        id: 0,
        title: "ATM Machine",
        desc: "A typescript based ATM machine for knowing balance and withdrawal of cash",
        img: "/ATMmachine.jpg",
        tags: ["Typescript"],
    },
    {
        id: 1,
        title: "Calculator",
        desc: "A typescript based Calculator for solving mathematical problems that includes addition, Division, Subtraction and Multiplication",
        img: "/Calculator.jpg",
        tags: ["Typescript"],
    },
    {
        id: 2,
        title: "Resume Builder",
        desc: "A nextjs powered application that helps you build your own personalized resume with custom link and downloadable option",
        img: "/resumeBuilder.jpg",
        tags: ["Typescript", "CSS", "Node", "Next.JS"],
    },
    {
        id: 3,
        title: "Word Counter",
        desc: "A typescript based application to count words in your given text",
        img: "/wordCounter.jpg",
        tags: ["Typescript"],
    },
]


const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
        <Heading title="My Projects"/>
<div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    {data.map((el) => (<Card 
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}
    />))}
</div>
    </div>
  )
}

export default Projects