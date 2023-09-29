import { Heading } from '@components/UI/Heading'
import { IProject } from 'interfaces/serviceInterfaces'
import { ProjectBtn } from '../ProjectBtn'
import styles from './style.module.scss'

interface ProjectsBlockProps {
  projects: IProject[]
}

export const ProjectsBlock = ({ projects }: ProjectsBlockProps) => {
  return (
    <div className={styles.root}>
      <div
        className={`${styles.content} ${projects.length === 0 && styles.empty}`}
      >
        {projects.length > 0 ? (
          projects.map((item) => (
            <ProjectBtn key={item.id} title={item.title} id={item.id} />
          ))
        ) : (
          <Heading fontSize={25}>
            У вас еще нет проектов, создайте новый
          </Heading>
        )}
      </div>
    </div>
  )
}
