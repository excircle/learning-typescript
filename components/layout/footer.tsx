import Link from "next/link";

export default function Footer() {
    return (
        <div className="items-center">
            <hr></hr>
            <footer className="flex justify-center items-center">
                <Link className="text-blue-500 hover:underline cursor-pointer font-bold" href="/">Home</Link>
                    <span className="px-1">|</span>
                <Link className="text-blue-500 hover:underline cursor-pointer font-bold" href="/data-types">Data Types</Link>
            </footer>
            <div className="flex justify-center">
                <p className="text-sm">&copy; Copyright by:</p>
                <span className="px-1"> </span>
                <p className="italic text-bold text-sm">Alexander Kalaj</p>
            </div>
        </div>
    )
}
