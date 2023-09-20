
import ItemList from './item-list';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-fuchsia-800   ">
      <div className="">
        <h1 className="text-6xl font-bold text-center text-slate-900  ">
            My Shopping List
            
        </h1>
      
      <ItemList />
     
      </div>
    </main>
  )
}