import { Paginate } from '@components/ProjectsPageComp/Paginate'
import { ProjectsBlock } from '@components/ProjectsPageComp/ProjectsBlock'
import { ProjectsTopBlock } from '@components/ProjectsPageComp/TopBlock'
import { Content } from '@components/UI/Content'
import { Modal } from '@components/UI/Modal'
import { useAppSelector } from 'hooks/redux'
import { IProject } from 'interfaces/serviceInterfaces'
import { useEffect, useState } from 'react'
import { selectPaginate } from 'store/slices/paginateSlice'

export const ProjectsPage = () => {
  const projects = useAppSelector((state) => state.projects.value)
  const currentPage = useAppSelector(selectPaginate)
  const [paginateProjects, setPaginateProjects] = useState<IProject[]>(
    projects.length > 0
      ? projects.slice(currentPage * 12 - 12, currentPage * 12)
      : [],
  )
  useEffect(() => {
    setPaginateProjects(projects.slice(currentPage * 12 - 12, currentPage * 12))
  }, [currentPage, projects])

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  return (
    <Content maxW="lg" pt={20} pb={20}>
      <ProjectsTopBlock />
      <ProjectsBlock projects={paginateProjects} />
      <>{projects.length !== 0 && <Paginate projects={projects} />}</>
    </Content>
  )
}
