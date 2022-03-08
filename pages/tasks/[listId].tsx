import { useRouter } from "next/router";
import React from "react";

function CustomListsPages() {
    const router = useRouter();

    return <div style={{ float: "left" }}>{router.query.listId}</div>;
}

export default CustomListsPages;
