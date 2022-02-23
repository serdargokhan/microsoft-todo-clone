import { useEffect, useState } from "react";

function useWindowDimension() {
    const [windowSize, setWindowSize] = useState<{ width: number }>({
        width: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize.width;
}

export default useWindowDimension;
