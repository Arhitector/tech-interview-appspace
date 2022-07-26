import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    z-index: 1000;
    left: 10%;
    top: 100%;
    min-width: 140px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 2px 2px 13px -5px #000;
    border-radius: 8px;
    padding: 12px;
    p {
        margin: 0;
        padding: 0;
    }
`;

const Details = ({item}) => {
    return <Wrapper>
        <div className="avatar" ></div>
        <h3>{item.name}</h3>
        <div>Specs:</div>
        <p>born at: {item.birth_year}</p>
        <p>eye color: {item.eye_color}</p>
        <p>gender: {item.gender}</p>
        <p>hair color: {item.hair_color}</p>
        <p>height: {item.height}</p>
        <p>weight: {item.mass}</p>
        <p>skin color: {item.skin_color}</p>
    </Wrapper>
};

export default Details;