import { useRouter } from "next/router";
import { useEffect } from "react";

function IndexPage() {
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("userUid");
        if (accessToken) router.push("/tasks/myday");
        setTimeout(() => {
            localStorage.removeItem("userUid");
        }, 1000 * 60 * 60);
    }, []);

    return <></>;
}

export default IndexPage;
