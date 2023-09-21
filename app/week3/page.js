
import Navbar from '../navbar';
import ItemList from './item-list';
export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col p-24 bg-fuchsia-800   ">
    <Navbar />
      <div className="pt-10">
        <h1 className="pb-5 text-6xl font-bold text-center text-slate-900  ">
            My Shopping List
            
        </h1>
      
      <ItemList />
     
      </div>
    </main>
  )
}