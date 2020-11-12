import React from 'react'
import styled from 'styled-components';

const GridTemplate = styled.div`
    display: flex;
    flex-direction: column;
    width: 235px;
    height: 292px;
    padding-bottom: 64px;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    @media only screen and (max-width: 996px){
        flex:1;
    }
`;
const Like = styled.div`
    width: 27px;
    height: 27px;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50%;
    &:hover{
        background-color: white;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LikeImg = styled.img`
    width: 20px;
    height: 20px;
    z-index:2;
`;
const Img = styled.img`
    width: 235px;
    height: 160px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transform:scale(1.05);
        ${Like} {
            transform:scale(1.2);
        }
    }
`;
const TextBox = styled.div`
    margin-bottom: 20px;
    padding-top: 12px;
    height: 76px;
`;
const TagText = styled.div`
    width:100%;
    color: rgb(158, 158, 158);
    font-size: 11px;
    margin: 3px 0;
`;
const TitleText = styled.div`
    width: 100%;
    color: rgb(61, 61, 61);
    font-size: 16px;
    margin: 10px 0;
`;
const SuccessRate = styled.div`
    width: 100%;
    color: rgb(255, 87, 87);
    font-size: 14px;
    font-weight: bold;
`;
function Grid({obj}) {
    return (
        <GridTemplate>
            <Like>
                <LikeImg src="https://tumblbug.com/wpa/1d4978f729cd37a38573e85f399b74c1.png"></LikeImg>
            </Like>
            <Img src={obj.img}></Img>
            <TextBox>
                <TagText>{obj.tagText}</TagText>
                <TitleText>{obj.titleText}</TitleText>
            </TextBox>
            <SuccessRate>{obj.successRate}</SuccessRate>
        </GridTemplate>
    )
}

export default Grid
