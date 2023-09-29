/* eslint-disable jsx-a11y/no-static-element-interactions */
import deleteIcon from '@assets/img/icons/delete.svg'
import editIcon from '@assets/img/icons/edit.svg'
import { Heading } from '@components/UI/Heading'
import { useAppDispatch } from 'hooks/redux'
import { useNavigate } from 'react-router-dom'
import { deleteProject, editProject } from 'store/slices/projectsSlice'
import styles from './style.module.scss'
import { Modal } from '@components/UI/Modal'
import { useState } from 'react'

interface ProjectBtnProps {
  title: string
  id: number
}

export const ProjectBtn = ({ title, id }: ProjectBtnProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={styles.root} onClick={() => navigate(`/project/${id}`)}>
        <Heading fontSize={20}>{title}</Heading>
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
              dispatch(deleteProject(id))
              e.stopPropagation()
            }}
          >
            <img src={deleteIcon} alt="edit" />
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          type="edit"
          forWhat="project"
          id={id}
          setIsOpen={setIsOpen}
          title={title}
        />
      )}
    </>
  )
}
