import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../api/auth/getAllUsers"
import AdminRoute from "../routes/AdminRoute"
import TableLayout from "../components/tables/TableLayout"

export default function ShowUsers() {
    const { data, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })

    const columns = [
        { title: "Email", id: 1 },
        { title: "User ID", id: 2 },
        { title: "Created", id: 3 },
        { title: "Last Sign In", id: 4 }
    ]

    const users = data?.data?.users ?? []

    if (isLoading) {
        return (
            <AdminRoute>
                <p>Loading...</p>
            </AdminRoute>
        )
    }
    return (
        <AdminRoute>
            <TableLayout title="Users" columns={columns} firstColumnWide={false}>
                {users.length === 0 ? (
                    <tr>
                        <td colSpan={4} className="text-center text-gray-500">No users found.</td>
                    </tr>
                ) : (
                    users.map((user) => (
                        <tr key={user.id}>
                            <td className="font-bold">{user.email ?? "-"}</td>
                            <td className="text-gray-500">{user.id}</td>
                            <td>{user.created_at ? new Date(user.created_at).toLocaleDateString() : "-"}</td>
                            <td>{user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : "-"}</td>
                        </tr>
                    ))
                )}
            </TableLayout>
        </AdminRoute>

    )
}
