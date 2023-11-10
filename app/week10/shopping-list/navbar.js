
export default function Navbar() {
    return (
        <nav className="h-16 p-2 sticky top-0 z-10 w-full bg-opacity-60 bg-blue-500 rounded-md shadow-xl font-mono" role="navigation">
            <div className="">
                <ul className="flex justify-between pt-2">
                    <li className="">
                        <a href="/" className=" px-5 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Home</a>
                    </li>
                    <li className="" >
                        <a href="/week2" className=" px-3 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 2</a>
                    </li>
                    <li className="">
                        <a href="/week3" className=" px-3 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 3</a>
                    </li>
                    <li className="">
                        <a href="/week4" className=" px-3 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 4</a>
                    </li>
                    <li className="">
                        <a href="/week5" className=" px-3 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 5</a>
                    </li>
                    <li className="">
                        <a href="/week6" className=" px-3 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 6</a>
                    </li>
                    <li className="">
                        <a href="/week7" className=" px-3 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 7</a>
                    </li>
                    <li className="">
                        <a href="/week8" className=" px-3 py-1 shadow-xl text-white bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block">Week 8</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}