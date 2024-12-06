import Link from "next/link";
import Cookies from "js-cookie";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCartStore } from "@/store/cartStore";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [token, setToken] = useState<string | null | undefined>(null);
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const { totalItems } = useCartStore();

    useEffect(() => {
        setToken(Cookies.get("token"));
        console.log("token");
    }, [router]);

    const searchHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const logoutHandler = (): void => {
        Cookies.remove("token");
        router.replace("/");
    };

    const openInputSearch = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" navbar bg-neutral text-neutral-content flex items-center justify-between rounded-md">
            <div className="flex items-center gap-2 md:gap">
                <button className="btn btn-ghost btn-circle" onClick={openInputSearch}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                <input
                    onChange={searchHandler}
                    type="text"
                    placeholder="Type here"
                    className={`text-black bg-white input-bordered input w-full transition-all duration-700 input-sm ${
                        isOpen ? "" : "-translate-x-96"
                    }`}
                />
            </div>

            <div>
                {!token ? (
                    <div className="flex items-center">
                        <Link href="/register" className="btn btn-ghost">
                            Register
                        </Link>
                        |
                        <Link href="/login" className="btn btn-ghost">
                            Login
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <button onClick={logoutHandler} className="btn btn-ghost ml-auto">
                            Logout
                        </button>
                        <>
                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <Link href="/cart">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                    />
                                                </svg>
                                                <span className="badge badge-sm indicator-item">
                                                    {totalItems}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
