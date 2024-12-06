import { FC, use, useEffect, useState } from "react";
import { IconCart, IconMinus, IconPlus, IconTrash } from "../icon";
import { useCartStore } from "@/store/cartStore";
import { IBook } from "@/types/fetchbook";
import Button from "../Button";
import Cookies from "js-cookie";

interface ActionCartProps {
    book: IBook;
}

const ActionCart: FC<ActionCartProps> = ({ book }) => {
    const [token, setToken] = useState<string | undefined>("");
    const { addItem, selectedItems, removeItem, increment, decrement } = useCartStore();

    useEffect(() => {
        setToken(Cookies.get("token"));
    }, []);

    const selectedItem: IBook | undefined = selectedItems?.find((item) => item.id === book.id);
    const styleButton = "btn-sm";

    return (
        <div>
            {!selectedItem && (
                <div
                    className={token ? "" : "tooltip tooltip-warning tooltip-left md:tooltip-top"}
                    data-tip="Please Login / Register to add item to cart">
                    <Button
                        disabled={!token}
                        styleBtn={styleButton}
                        icon={<IconCart className="size-5" color="blue" strokeWidth={1.7} />}
                        onClick={() => addItem(book)}
                    />
                </div>
            )}
            {selectedItem?.quantity === 1 && (
                <div className="flex gap-2 items-center">
                    <Button
                        styleBtn={styleButton}
                        icon={<IconTrash className="size-5" color="red" strokeWidth={1.5} />}
                        onClick={() => removeItem(book)}
                    />
                    <span>{selectedItem?.quantity}</span>

                    <Button
                        styleBtn={styleButton}
                        icon={<IconPlus className="size-5" color="blue" strokeWidth={2} />}
                        onClick={() => increment(book)}
                    />
                </div>
            )}
            {selectedItem && selectedItem?.quantity > 1 && (
                <div className="flex gap-2 items-center">
                    <Button
                        styleBtn={styleButton}
                        icon={<IconMinus className="size-5" color="orange" strokeWidth={3} />}
                        onClick={() => decrement(book)}
                    />
                    <span>{selectedItem?.quantity}</span>

                    <Button
                        styleBtn={styleButton}
                        icon={<IconPlus className="size-5" color="blue" strokeWidth={2} />}
                        onClick={() => increment(book)}
                    />
                </div>
            )}
        </div>
    );
};

export default ActionCart;
