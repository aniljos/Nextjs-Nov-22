import Counter from "@/components/Counter";
//import Message from "@/components/Message";


export default function Home() {
  return (
   <div>
        <h4>React Application</h4>
        {/* <Message text="Hello React" color="blue"/>
        <Message text="Hello JSX" color="red"/> */}

        <Counter initialValue={10}/>
   </div>
  );
}
