import React from "react"
import SEO from "../gatsby-theme-blog/components/seo"
import { graphql } from "gatsby"

import "./resume.css"

const Resume = ({ data }) => {
  const resumeData = data.allAssetsJson.edges[0].node
  console.log("resume JSON:", resumeData)

  return (
    <>
      <SEO title="Resume" />
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <main className="py-1 px-6">
        <Basics {...resumeData.basics} />
        {/* TODO This commented line doesn't apply 3-column layout to print styles */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2"> */}
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Work {...resumeData} />
          </div>
          <div className="col-auto">
            <Skills {...resumeData} />
            <Education {...resumeData.education} />
            <Honors {...resumeData} />
            <Projects {...resumeData} />
          </div>
        </div>
      </main>
    </>
  )
}

const Basics = ({ name, headline, location, email, siteURL }) => (
  <section className="mb-3">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-6xl small-caps">{name}</h1>
        <strong className="text-xl">{headline}</strong>
      </div>
      <div className="flex flex-col text-right text-lg">
        <a
          href={`mailto:${email}`}
          className="underline font-bold text-indigo-400"
        >
          {email}
        </a>
        <a href={siteURL} className="underline font-bold text-indigo-400">
          {siteURL}
        </a>
        <p>{location}</p>
      </div>
    </div>
  </section>
)

const Work = ({ workExperience }) => (
  <section>
    <h2 className="text-2xl mb-1">Work Experience</h2>
    <ul>
      {/* Exclude first internship */}
      {workExperience.slice(0, workExperience.length - 1).map(job => (
        <li key={job.company}>
          <p className="mb-0">
            <strong className="text-lg">{job.position}</strong>{" "}
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <span className="text-gray-600">// {job.company}</span>
          </p>
          <p className="mb-0 text-sm">
            {job.startDate} &ndash; {job.endDate}
          </p>
          <ul className="mt-0">
            {job.details.map((detail, i) => (
              <li key={i} className="mb-0 list-disc">
                {detail}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
)

const Skills = ({ skills }) => (
  <section className="mb-4">
    <h2 className="text-2xl mb-1">Skills</h2>
    <ul>
      {skills.map(skill =>
        skill.name !== "Markup" && skill.name !== "Tools" ? (
          <li key={skill.name}>
            <strong className="mb-0">{skill.name}</strong>
            <ul className="mt-0 ml-0">
              {skill.keywords.map((keyword, i) => (
                <li key={i} className="inline mb-0 comma-separated-item">
                  {keyword}
                </li>
              ))}
            </ul>
          </li>
        ) : null
      )}
    </ul>
  </section>
)

const Education = ({
  school,
  degree,
  startDate,
  endDate,
  gpa,
  relevantCoursework,
}) => (
  <section className="mb-4">
    <h2 className="text-2xl mb-1">Education</h2>
    <strong>{school}</strong>
    <p>
      {degree}, {gpa}
    </p>
    <p className="text-sm">
      {startDate} &ndash; {endDate}
    </p>
  </section>
)

const Honors = ({ activitiesAndHonors }) => (
  <section className="mb-4">
    <h2 className="text-2xl mb-1">Honors</h2>
    {/* Only include Eagle Scout */}
    {activitiesAndHonors.slice(1).map(honor => (
      <>
        <strong>{honor.name}</strong>
        <p className="text-sm">{honor.date}</p>
      </>
    ))}
  </section>
)

const Projects = ({ projects }) => (
  <section>
    <h2 className="text-2xl mb-1">Projects</h2>
    <ul>
      {projects.slice(0, 3).map(project => (
        <li key={project.name}>
          <strong>{project.name}</strong>{" "}
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span className="text-gray-600">// {project.recipient}</span>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </section>
)

export const query = graphql`
  query JsonQuery {
    allAssetsJson {
      edges {
        node {
          education {
            school
            degree
            endDate
            gpa
            startDate
          }
          basics {
            email
            siteURL
            name
            location
            headline
          }
          activitiesAndHonors {
            details {
              endDate
              name
              startDate
            }
            date
            name
          }
          projects {
            date
            description
            name
            recipient
          }
          workExperience {
            company
            details
            endDate
            position
            startDate
          }
          skills {
            keywords
            name
          }
        }
      }
    }
  }
`

export default Resume
