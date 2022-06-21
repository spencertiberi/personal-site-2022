/* eslint-disable */

import ccsd from './images/ccsd.png'
import bhs from './images/bhs.png'
import harvard from './images/harvard.png'
import edx from './images/edx2.svg'
import path1 from './images/path1.png'
import path2 from './images/path2.png'
import memhall from './images/memhall.png'
import unlvhall from './images/unlvhall.png'
import longfellow from './images/longfellow.png'

const data = {
    education: [
        {
            institution: `University of Nevada,
Las Vegas`,
            degree: "BS",
            concentration: "Secondary Education and Mathematics",
            image: unlvhall,
            startDate: "2009",
            endDate: "2013",
            courses: [],
            shift: "10vw",
            color: "#B10202"
        },
        {
            institution: `Harvard Univserity
Extension School`,
            degree: "ALM",
            concentration: "Mathematics for Teachers",
            image: memhall,
            startDate: "2015",
            endDate: "2017",
            courses: [],
            shift: "",
            color: "#A51C30"
        },
        {
            institution: `Harvard Graduate
School of Education`,
            degree: "EdM",
            concentration: "Technology, Innovation, and Education",
            image: longfellow,
            startDate: "2020",
            endDate: "2021",
            courses: [],
            shift: "3vw",
            color: "#213153"
        }
    ],
    experience: [
        {
            institution: "Clark County School District",
            title: "High School Mathematics and Computer Science Teacher",
            image: ccsd,
            startDate: "2013",
            endDate: "2017",
            description: "Taught Algebra 2 Honors and AP Computer Science",
            shift: "-5.5vw"
        },
        {
            institution: "Belmont Hill School",
            title: "Computer Science Faculty",
            image: bhs,
            startDate: "2017",
            endDate: "2018",
            description: "Taught AP Computer Science and Introduction to Python",
            shift: "-10.5vw"
        },
        {
            institution: "Harvard University",
            title: "Product Manager, HSA DEV",
            image: harvard,
            startDate: "2018",
            endDate: "2020",
            description: "managed a college student-run web and app development agency",
            shift: "-3.5vw"
        },
        {
            institution: "edX",
            title: "Product Manager, Open Courses",
            image: edx,
            startDate: "2021",
            endDate: "Present",
            description: "Product management stuff",
            shift: "-11.5vw"
        }
    ]
}

export default data
