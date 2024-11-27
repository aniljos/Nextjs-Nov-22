type CustomerViewPageProps = {

    params: {id: number}
}

export default function CustomerViewPage(props: CustomerViewPageProps){
    return (
        <div>
            <h4>Customer View: {props.params.id}</h4>
        </div>
    )
}