import { useEffect } from "react";


const useTitle = title => {
    useEffect( () => {
        document.title = `Toyfinity | ${title}`;
    }, [title])
}

export default useTitle;