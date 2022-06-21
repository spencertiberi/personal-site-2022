import React from 'react'
import { Container, Grid, Institution, Title, Dates, Item, ItemImage, Concentration, ContainerImage, FloatingImage, ItemDetail, Line } from './styles'
import powerline from './powerline.png'
import exp from './images/exp.png'
import edu from './images/edu.png'
import path1 from './images/path1.png'
import path2 from './images/path2.png'
import data from './data'

const Education = ({ bgcolor, src, degree, institution, concentration, finish, shift, color }) => (
    <Item shift={shift} bgcolor={bgcolor} hiColor={color}>
        <Institution>{institution}</Institution>
        <ItemImage src={src} big className="eduimage" />
        <Title >{`${degree || ""} ${`'${finish.slice(-2)}` || ""}`}</Title>
        <Concentration>{concentration}</Concentration>
    </Item>
)


const Experience = ({ bgcolor, src, title, institution, start, finish, shift, description }) => (
    <Item shift={shift} bgcolor={bgcolor}>
        <ContainerImage>
            <ItemImage src={src} className="itemimage" faded />
            <ItemDetail className="itemdetail">{description}</ItemDetail>
        </ContainerImage>
        <Institution>{institution}</Institution>
        <Title>{title}</Title>
        <Dates>{`${start} ~ ${finish}`}</Dates>
    </Item>
)

const Experiences = () => (
    <>
        <FloatingImage src={exp} left="0%" top="11vw" size="50%" />
        <img src={powerline} width="100%" />
        <Grid>
            {
                data.experience.map(item => (
                    <Experience
                        src={item.image}
                        shift={item.shift}
                        institution={item.institution}
                        title={item.title}
                        start={item.startDate}
                        finish={item.endDate}
                        description={item.description}
                        key={item.title}
                    />
                ))
            }
        </Grid>
    </>
)

const EducationHistory = () => (
    <>
        <FloatingImage src={edu} left="" top="0" size="40%" />
        <Grid>
            {data.education.map(item => (
                <Education
                    src={item.image}
                    shift={item.shift}
                    institution={item.institution}
                    degree={item.degree}
                    concentration={item.concentration}
                    start={item.startDate}
                    finish={item.endDate}
                    courses={item.courses}
                    key={item.title}
                    color={item.color}
                />
            ))
            }
        </Grid>
        <Line>
            <FloatingImage src={path1} top="-14vw" left="0.5vw" />
            <FloatingImage src={path2} top="-20.5vw" left="15vw" />
        </Line>
    </>
)

const Resume = () => (
    <Container>
        <EducationHistory />
        <Experiences />
    </Container>
)

export default Resume