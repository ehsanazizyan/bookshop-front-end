import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:gap-0">
            <div>
                <img src="./img.png" />
            </div>
            <div className="flex gap-4 flex-col">
                <div className="flex gap-4">
                    <Link href="/books" className="btn btn-primary">
                        show All book
                    </Link>
                    <Link href="/login" className="btn bg-orange-500">
                        Login
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="/register" className="btn btn-accent">
                        Register
                    </Link>
                    <Link href="/create-book" className="btn btn-secondary">
                        Create Book
                    </Link>
                </div>
            </div>
        </div>
    );
}
