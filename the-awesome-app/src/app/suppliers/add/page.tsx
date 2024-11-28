'use client'
import { saveSupplier } from "@/actions/util"
import { useFormState } from "react-dom"

export default function AddSupplierPage(){

    const [formState, formAction] = useFormState(saveSupplier, {status:-1, message: "pending"})
    

    return (
        <div>
            <h4>Add Supplier</h4>

            {/* Submit the form to server ==> server action */}
            <form action={formAction}>

                <div className="alert  alert-primary">
                    {"Status: " + formState.status + " Message: " + formState.message}
                </div>

                <div className="form-group">
                    <label htmlFor="id">SupplierID</label>
                    <input id="id" name="productId" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" className="form-control" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactPerson">Contact</label>
                    <input id="contactPerson" name="contactPerson" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" className="form-control" />
                </div>
                <br />
                <div>
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}