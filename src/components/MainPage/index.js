import { useState } from "react";
import styled from "styled-components";

import List from '../List';
import Pagination from '../Pagination';
import useGetData from '../../hooks/useGetData';
import {pathList} from '../../variables';

const Wrapper = styled.div((props) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: '100vh',
    pointerEvents: props.loaded ? 'none' : 'auto',
    '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: 100,
        backgroundColor: '#ccc',
        left: 0,
        top: 0,
        opacity: props.loaded ? 0.7 : 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        transition: 'opacity 0.6s ease-in-out',
    }
}))

const MainPage = () => {
    const [curLink, setCurrLink] = useState(pathList);
    const handleUpdateLink = (link) => setCurrLink(link);
    const {
        results,
        next,
        previous,
        loading,
    } = useGetData(curLink);
    return <Wrapper loaded={loading} >
        <List data={results || []} />
        <Pagination next={next} previous={previous} handleUpdateLink={handleUpdateLink} />
    </Wrapper>
};

export default MainPage;