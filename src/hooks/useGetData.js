import { useEffect, useState } from "react";

import fetchData from  '../utils/fetchData';

const useGetData = (pathList) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchData(pathList).then(data => setList(data)).finally(() => setLoading(false));
    }, [pathList])
    return {
        ...list,
        loading,
    };
}

export default useGetData;