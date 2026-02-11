import ProjectsRows from './ProjectsRows'
import TableLayout from './TableLayout'

export default function Projects(){
    const columns = [
        { title: 'companies', id: 1 },
        { title: 'members', id: 2 },
        { title: 'budget', id: 3 },
        { title: 'completion', id: 4 }
    ]

    return (
        <TableLayout title='Projects' columns={columns}>
            <ProjectsRows></ProjectsRows>
        </TableLayout>
    )
}
