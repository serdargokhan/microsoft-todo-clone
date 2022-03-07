import { useRouter } from "next/router";
import React, { useEffect } from "react";

function IndexPage() {
    const router = useRouter();

    useEffect(() => {
        router.push("/tasks");
    }, []);

    return <></>;
}

export default IndexPage;
