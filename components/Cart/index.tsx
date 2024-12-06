import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import ActionCart from "../ActionCart";
import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/router";

const CartComponent = () => {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [messageCheckout, setMessageCheckout] = useState<string>("");
    const { selectedItems, totalPrice, totalItems, checkout } = useCartStore();

    const checkoutHandler = (): void => {
        setIsChecked(true);
        setMessageCheckout("Your order is placed successfully you push to home page");
        setTimeout(() => {
            router.push("/");
            checkout();
        }, 4000);
    };

    if (isChecked)
        return (
            <div className="bg-info w-full text-white p-4 rounded-md text-lg">
                {messageCheckout}
            </div>
        );

    if (selectedItems.length === 0 && !isChecked)
        return (
            <div className="flex flex-col gap-4 shadow-xl p-4 border border-blue-500 rounded-2xl justify-end">
                <span className="text-center font-mono text-2xl">Your cart is empty</span>
                <Link href="/books" className="btn btn-ghost text-primary">
                    Go to shop
                </Link>
            </div>
        );

    return (
        <div className="flex flex-col gap-4">
            {selectedItems.length > 0 && (
                <div className="sticky z-40 top-20 font-semibold shadow-lg p-4 rounded-md border border-gray-300 bg-base-300 flex items-center justify-between">
                    <span>
                        Amount Paid :
                        <span className="bg-primary p-2 rounded-md text-white font-normal">
                            $ {totalPrice}
                        </span>
                    </span>
                    <span>
                        total Count in your Cart:{" "}
                        <span className="bg-orange-500 p-2 rounded-md text-white font-normal">
                            {totalItems}
                        </span>
                    </span>
                    <div>
                        <Button
                            label="Checkout"
                            onClick={checkoutHandler}
                            styleBtn="btn-primary  "
                        />
                    </div>
                </div>
            )}

            {selectedItems?.map((item) => (
                <div key={item.id}>
                    <div className="card card-side bg-blue-100 shadow-xl">
                        <div className="card-body flex flex-col justify-end">
                            <h2 className="card-title text-2xl justify-center mb-auto">
                                {item.title}
                            </h2>
                            <p className="">Author : {item.author}</p>
                            <div className="card-actions justify-end font-semibold">
                                <p>Items:{item.quantity}</p>
                                <p>Price: ${item.price}</p>
                                <ActionCart book={item} />
                            </div>
                        </div>
                        <figure>
                            <img src="/roman.jpg" alt="romance" className="w-52" />
                        </figure>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default CartComponent;
