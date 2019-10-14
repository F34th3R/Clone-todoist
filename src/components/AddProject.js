import React, { useState } from 'react'
import { firebase } from '../firebase'
import { generatePushId } from '../helpers'
import { useProjectsValue } from '../context'

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow)
  const [projectName, setPRojectName] = useState('')

  const projectId = generatePushId()
  const { setProjects } = useProjectsValue()

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'jlIFXIwyAL3tzHMtzRbw'
      })
      .then(() => {
        setProjects([])
        setPRojectName('')
        setShow(false)
      })
  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={e => setPRojectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="buttom=n"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      {!show && (
        <>
          <span className="add-project__plus">+</span>
          <span
            aria-label="Add Project"
            data-testid="add-project-action"
            className="add-project__text"
            onClick={() => setShow(!show)}
            onKeyDown={() => setShow(!show)}
            role="button"
            tabIndex={0}
          >
            Add Project
          </span>
        </>
      )}
    </div>
  )
}
