export default function Navbar() {
    return (
        <nav className="h-16 p-2 w-full bg-fuchsia-800  shadow-xl  font-mono" role="navigation">
            <div className="container mx-auto">
                <ul className="flex justify-between items-center ">
                    <li className="">
                        <a href="/" className=" px-5 py-1  text-black bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Home</a>
                    </li>
                    <li className="">
                        <a href="/week2" className=" px-3 py-1  text-black bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 2</a>
                    </li>
                    <li className="">
                        <a href="/week3" className=" px-3 py-1  text-black bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 3</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}