import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}

function Portal({ children }: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    return mounted
        ? createPortal(
              children,
              document.querySelector("#portals") as HTMLElement
          )
        : null;
}

export default Portal;
