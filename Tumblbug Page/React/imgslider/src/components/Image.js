import React from 'react'
import styled, {css} from 'styled-components';

const SideWrap = styled.div`
    background-color: #222222;
    display: flex;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    ${props =>
        css`
            transform: translate(-${(props.chIdx)*1070}px,0px);
        `
    }
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
`;
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0 40px;
    width:260px;
`;
const MainText = styled.div`
    font-size: 30px;
    font-weight: bolder;
`;
const MainTxt1 = styled.div`
    margin-bottom:10px;
`;
const MainTxt2 = styled.div`
    margin-bottom:10px;
`;
const SubText = styled.div`
    margin-top: 20px;
    font-size: 13px;
`;
const Img = styled.img`
    width:730px;
    ${props =>
        css`
            transform: translate(-${(props.chIdx)*1070}px,0px);
            transition: 0.5s;
        `
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
`;
const ButtonRight = styled.div`
    border: white solid 1px;
    background-color: rgba(0, 0, 0, 0.10);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
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
`;
function Image({obj, chIdx, onClickLeftButton, onClickRightButton}) {
        return (
            <>
                <Img chIdx={chIdx} src={obj.img}></Img>
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
        );
}

export default Image
