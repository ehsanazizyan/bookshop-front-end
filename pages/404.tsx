import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 text-blue-500 hover:underline">
                Go back to the home page
            </Link>
        </div>
    );
};

export default NotFound;
