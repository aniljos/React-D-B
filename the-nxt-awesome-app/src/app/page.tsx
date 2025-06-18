import Counter from "@/components/Counter";



export default function Home() {

  //console.log("rendering Home page...");
  return (
    <div>
      <h3>Welcome to Next.js</h3>

      <Counter initialValue={10}/>
    </div>
  );
}
