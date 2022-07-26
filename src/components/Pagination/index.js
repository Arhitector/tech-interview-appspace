import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    div {
        margin: 10px;
        cursor: pointer;
        &:hover {
            text-decoration: underline; 
        }
    }
`;

const Pagination = ({
    next,
    previous,
    handleUpdateLink,
}) => {
    
    return <Wrapper>
        { previous && <div onClick={() => handleUpdateLink(previous)}>previous</div>}
        { next && <div onClick={() => handleUpdateLink(next)}>next</div>}
    </Wrapper>
};

export default Pagination;