import { useEffect, useState } from "react";

const useData = (data) => {
    const [resData, setResData] = useState(data);
    
    // sorting
    const [order, setOrder] = useState(false);
    const [orderField, setOrderField] = useState('name');
    const sortStr = (x, y) => {
        if (x < y) {
            return 1;
        }
        if (x > y) {
            return -1;
        }
        return 0;
    }
    const handleSort = (key) => {
        setResData(prev => prev.sort((a,b) => order
            ? sortStr(b[key], a[key])
            : sortStr(a[key], b[key]))
        );
        setOrder(prev => !prev)
        setOrderField(key);
    };
    
    // show details
    const [toggleState, setToggleState] = useState('');
    const handleShowDetails = (key) => {
        setToggleState(prev => prev
            ? prev === key ? '' : key
            : key
        );
    }
    
    // filtering
    const [genders, setGenders] = useState([]);
    const handleFilterGender = (e) => {
        setResData(
            e.target.value === 'default'
                ? data
                : data.filter(el => el.gender === e.target.value)
            );
    }
    const handleFilterName = (event) => {
        setResData(
            data.filter(
                el => el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0
            )
        );
    };
    
    // ----
    useEffect(()=> {
        if (data.length) {
            setResData(data.sort((a,b) => sortStr(b.name, a.name)));
            setGenders([...new Set(data.map(el => el.gender))]); 
        }
    }, [data])
    return {
        res: resData,
        orderField,
        order,
        handleSort,
        handleFilterGender,
        handleShowDetails,
        toggleState,
        genders,
        handleFilterName,
    };
};

export default useData;