/* eslint-disable jsx-a11y/no-static-element-interactions */
import deleteIcon from '@assets/img/icons/delete.svg'
import editIcon from '@assets/img/icons/edit.svg'
import { Heading } from '@components/UI/Heading'
import { useAppDispatch } from 'hooks/redux'
import { useNavigate } from 'react-router-dom'
import { deleteProject } from 'store/slices/projectsSlice'
import styles from './style.module.scss'
import { Modal } from '@components/UI/Modal'
import { useState } from 'react'
import { IProject } from 'interfaces/serviceInterfaces'

interface ProjectBtnProps {
  project: IProject
}

export const ProjectBtn = ({ project }: ProjectBtnProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={styles.root}
        onClick={() => {
          navigate(`/project/${project.id}`)
        }}
      >
        <div className={styles.content}>
          <Heading fontSize={20}>{project.title}</Heading>
          <div className={styles.btns}>
            <div
              className={styles.iconBtn}
              onClick={(e) => {
                setIsOpen(true)
                e.stopPropagation()
              }}
            >
              <img src={editIcon} alt="edit" />
            </div>
            <div
              className={styles.iconBtn}
              onClick={(e) => {
                dispatch(deleteProject(project.id))
                e.stopPropagation()
              }}
            >
              <img src={deleteIcon} alt="edit" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          type="edit"
          forWhat="project"
          id={project.id}
          setIsOpen={setIsOpen}
          title={project.title}
        />
      )}
    </>
  )
}
