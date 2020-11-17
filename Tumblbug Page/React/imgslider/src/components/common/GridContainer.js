import React from 'react'
import styled from 'styled-components';
import Grid from './secions/Grid';

const Template = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    @media only screen and (max-width: 996px){
        width:100%;
        height:auto;
    }
`;
const TitleText = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
    align-self: flex-start;
    margin-left: 15px;
`;
const GridContainerTemplate = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto;
    grid-gap: 20px;
    @media only screen and (max-width: 996px){
        grid-template-columns: repeat(2, minmax(220px,1fr));
        width:97%;
    }
`;
function GridTemplate({titletext, object}) {
    return (
        <Template>
            <TitleText>{titletext}</TitleText>
            <GridContainerTemplate>
            {
                object.map((obj,idx)=>(
                    <Grid
                    obj={obj}
                    key={`Grid-${idx}`}
                    ></Grid>
                ))
            }
            </GridContainerTemplate>
        </Template>
    )
}

export default GridTemplate
