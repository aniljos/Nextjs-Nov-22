'use server'

//Server action
export async function sayHello(msg: string){

    console.log("invoking sayHello...")
    return "Hello " + msg
}

//server action
export async function saveSupplier(prevData: object,  formData: FormData){
    //'use server'

    const id = formData.get("productId");
    const name = formData.get("name");
    const location = formData.get("location");
    const contactPerson = formData.get("contactPerson");
    const email = formData.get("email");

    const supplier = {
        id, name, location, contactPerson, email
    }

    //validations
    if(supplier.id){
         //saving to the database
        console.log("saving supplier", supplier);

        return {status: 0, message: "success"}
    }

    return {status: 1, message: "failed"}

   

}