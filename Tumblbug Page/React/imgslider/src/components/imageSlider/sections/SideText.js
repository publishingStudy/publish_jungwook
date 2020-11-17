import React from 'react'
import styled, {css} from 'styled-components';

const SideWrap = styled.div`
    width: 100%;
    height: auto;
    background-color: #222222;
    display: flex;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    //box-sizing: border-box;
    transition-property: background-color;
    transition-duration: 0.8s;
    ${props =>
            props.chIdx == 1? css`background-color: #378eb5;` 
            :
                (props.chIdx == 2? css`background-color: #d77847;`
                :
                    (props.chIdx == 3? css`background-color: #f4adac;`
                    :
                        (props.chIdx == 4? css`background-color: #2fa789;`
                        : css`background-color: #222222;`)))
    };
    /*     ${props =>
        css`
            transform: translate(-${(props.chIdx)*100}%,0px);
        `
    }*/
`;
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0 40px;
    margin-right: 20px;
    width: 260px;
    @media screen and (max-width: 960px){
        width: 100%;
        height: auto;
        margin: 0 20px;
    }
`;
const MainText = styled.div`
    font-size: 30px;
    font-weight: bolder;
    @media screen and (max-width: 960px){
        margin-top: 20px;
        font-size: 20px;
    }
`;
const MainTxt1 = styled.div`
    margin-bottom:10px;
`;
const MainTxt2 = styled.div`
    margin-bottom:10px;
    @media screen and (max-width: 960px){
        margin-bottom:4px;
    }
`;
const SubText = styled.div`
    margin-top: 20px;
    font-size: 13px;
    @media screen and (max-width: 960px){
        font-size: 11px;
        margin-top: 0;
        margin-bottom: 10px;
    }
`;
const ButtonAndPage = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonBox = styled.div`
    display : flex;
    color: white;
    margin-top:10px;
    margin-left: 40px;
`;
const ButtonLeft = styled.div`
    border: white solid 1px;
    background-color: rgba(0, 0, 0, 0.10);
    border-radius: 50%;
    margin-right: 10px;
    padding: 10px;
    cursor: pointer;
    width:13px;
    height:13px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 960px){
        position: absolute;
        left:10px;
        bottom: 320px;
        background-color: rgba(0, 0, 0, 0.50);
        border: none;
    }
`;
const ButtonRight = styled.div`
    border: white solid 1px;
    background-color: rgba(0, 0, 0, 0.10);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    width:13px;
    height:13px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 960px){
        position: absolute;
        right:10px;
        bottom: 320px;
        background-color: rgba(0, 0, 0, 0.50);
        border: none;
    }
`;
const PageCnt = styled.div`
    color: white;
    background-color: rgba(0, 0, 0, 0.20);
    font-size: 7px;
    margin-top:16px;
    margin-left: 10px;
    border: 1px;
    border-radius: 40%;
    padding: 5px 8px;
    @media screen and (max-width: 960px){
        position: absolute;
        right: 10px;
        bottom: 20px;
    }    
`;
function SideText({chIdx, obj, onClickLeftButton, onClickRightButton}) {

    return (
        chIdx == obj.idx?
        <>
            <SideWrap chIdx={chIdx}>
                <TextBox>
                        <MainText>
                            <MainTxt1>{obj.mainTxt1}</MainTxt1>
                            <MainTxt2>{obj.mainTxt2}</MainTxt2>
                        </MainText>
                        <SubText>{obj.subTxt}</SubText>
                </TextBox>
                <ButtonAndPage>
                    <ButtonBox>
                        <ButtonLeft
                         onClick={onClickLeftButton}>
                            <i className="fas fa-chevron-left"></i>
                        </ButtonLeft>
                        <ButtonRight
                        onClick={onClickRightButton}>
                            <i className="fas fa-chevron-right"></i>
                        </ButtonRight>
                    </ButtonBox>
                    <PageCnt>{obj.idx+1}&nbsp;/&nbsp;5</PageCnt>
                </ButtonAndPage>
            </SideWrap>
        </>
        :null
    )
    
}

export default SideText
