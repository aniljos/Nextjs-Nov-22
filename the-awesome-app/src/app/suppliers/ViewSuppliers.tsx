import { Supplier } from "@/model/Supplier"

type ViewSuppliersProps = {
    suppliers: Supplier[]
}

export default function ViewSuppliers(props: ViewSuppliersProps){

    const {suppliers} = props;

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => {

                        return (
                            <tr key={supplier.id}>
                                <td>{supplier.id}</td>
                                <td>{supplier.name}</td>
                                <td>{supplier.location}</td>
                                <td>{supplier.contactPerson}</td>
                                <td>{supplier.email}</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>

        </div>
    )
}