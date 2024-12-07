import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex justify-center items-center ">
            <div className="my-24 space-y-12 flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-7xl">404 Not Found</h1>
                <p>Your Visited Page Not Found You May Go Home Page</p>
                <button>
                    <Link
                        href="/"
                        className="py-4 px-12 bg-[#db4444] text-white text-center text-lg font-medium rounded-md mx-auto lg:mx-0"
                    >
                        Home
                    </Link>
                </button>
            </div>
        </div>
    )
}