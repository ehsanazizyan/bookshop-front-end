import { useRouter } from "next/router";

const BookId = () => {
    const router = useRouter();
    console.log(router);

    return <div>BookId</div>;
};

export default BookId;
