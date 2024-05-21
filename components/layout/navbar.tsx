import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex ">
                    <p className="font-bold text-xl">Learning Typescript | 
                    <Link className="px-1 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/">Home</Link>
                    <Link className="px-1 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/data-types">Data Types</Link>
                    <Link className="px-1 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/bmi-calculator">BMI Calculator</Link>
                    </p>
            </nav>
            <hr></hr>
        </>
    )
}