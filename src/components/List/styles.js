import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    .head {
        background-color: #eee;
        box-shadow: 2px 2px 13px -5px #444;
        border-radius: 10px;
    }
    .item, .head {
        display: grid;
        grid-template-columns:  1fr 1fr 1fr auto;
        padding: 8px 6px;
        font-size: 1rem;
    }
    .name {

    }
    .gender, .height {
        justify-content: center;
    }
    .name, .gender, .height {
        display: flex;
        align-items: center;
    }
    .item {
        position: relative;
        opacity: 1;
        border-bottom: 1px solid #ccc;
        transition: 0.6s opacity, 0.6s border, 0.6s transform;
        &:hover:not(.active) {
            transform: translateX(0.3%);
            transition: 0.6s transform;
            
        }
        &.active {
            transition: 0.6s border, 0.6s transform;
            border-bottom-color: #ccc;
            z-index: 100;
        }
        &.inactive {
            transition: 0.6s opacity, 0.6s transform;
            opacity: 0.3;
        }
    }
    .filterName {
        height: 24px;
        width: 120px;
        box-sizing: border-box;
    }
`;
export const Arrow = styled.div((props) => ({
    border: 'solid black',
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    marginLeft: '10px',
    padding: '3px',
    width: 0,
    height: 0,
    transform: props.asc ? 'rotate(45deg)' : 'rotate(-135deg)',
}))
