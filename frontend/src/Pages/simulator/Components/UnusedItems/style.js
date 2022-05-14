import { Paper, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const Base = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: end;

    position: absolute;
    top: 0;
    left: 0;

    pointer-events: none;
`

export const Background = styled.div`
    width: 100%;

    ${props => !props.open && "visibility: hidden;"}

    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 1;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    background-color: rgba(0, 0, 0, .3);
    opacity: ${props => props.open ? 1 : 0};

    pointer-events: initial;

    transition: opacity .3s, visibility .3s;
`

export const Title = styled.div`
    width: 100%;
    height: 50px;

    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 28px;
    border-top: 1px solid rgba(0, 0, 0, .24);

    color: rgba(0, 0, 0, 0.73);
    background: white;

    cursor: pointer;
    user-select: none;
    pointer-events: initial;

    ${props => !props.open && `
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        box-shadow: 0px -1px 1px -1px rgb(0 0 0 / 20%);
    `}
`

export const CollapseBase = styled.div`
    width: 100%;
    height: 40vh;
    min-height: 150px;

    padding: 8px 12px;
    border-top: 1px solid rgba(0, 0, 0, .12);
    
    background: white;

    pointer-events: initial;
`

export const ContainerPaper = withStyles(() => ({
    root: {
        height: "100%",
        background: "#fafafa",
        overflowY: "auto"
    }
}))(Paper)