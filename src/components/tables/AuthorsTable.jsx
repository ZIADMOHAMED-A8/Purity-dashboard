import AuthorProjectRows from './AuthorProjectrows'
import TableLayout from './TableLayout'



export default function AuthorsTable() {
    const columns = [
        { title: 'Author', id: 1 },
        { title: 'Function', id: 2 },
        { title: 'Status', id: 3 },
        { title: 'Employed', id: 4 }
    ]

    return (
        <TableLayout title='Authors' columns={columns}>
            <AuthorProjectRows></AuthorProjectRows>
        </TableLayout>
    )
}
