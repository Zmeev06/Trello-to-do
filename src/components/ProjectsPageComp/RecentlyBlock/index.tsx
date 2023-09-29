import { useAppSelector } from 'hooks/redux'
import styles from './style.module.scss'
import { ProjectBtn } from '../ProjectBtn'
import { Heading } from '@components/UI/Heading'

export const RecentlyBlock = ({}) => {
  const recentlyProjects = useAppSelector((state) => state.projects.value)
  return (
    <div className={styles.root}>
      <Heading mb={20} fontSize={20} color='#878585'>
        Недавние
      </Heading>
      <div className={styles.content}>
        {recentlyProjects.slice(0, 10).map((item) => (
          <ProjectBtn key={item.id} project={item} />
        ))}
      </div>
    </div>
  )
}
