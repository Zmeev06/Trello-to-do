import { Layout } from '@components/Layout'
import { ProjectPage } from 'pages/ProjectPage'
import { ProjectsPage } from 'pages/ProjectsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<ProjectsPage />} />
            <Route path="project/:id" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
