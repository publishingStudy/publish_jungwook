import React,{useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import Image from './sections/Image';
import SideText from './sections/SideText';

const SliderTemplate = styled.div`
    display: flex;
    justify-content: flex-start;
    position: relative;
    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width:100%;
        height:auto;
    }
`;
const ImageTemplate = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 680px;
    height: 383px;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 960px){
        width:100%;
        height:auto;
    }
`;
const SideTextTemplate = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 320px;
    position: relative;
    @media screen and (max-width: 960px){
        width:100%;
        height:auto;
    }
`;

function Slider({object}) {

    const [chIdx,setChIdx] = useState(0);
    const tmp = useRef();

    const onAutoIncrease = () => {
        if(chIdx != object.length-1){
            setChIdx(chIdx+1);
        }else{
            setChIdx(0);
        }
    }
    /* react에서 Interval 사용시 아래와 같이 사용해야함!! */
    useEffect(() => {
        tmp.current = onAutoIncrease;
      });

    useEffect(()=>{
        function tick() {
            tmp.current();
          }
         
          let id = setInterval(tick, 2000);
          return () => clearInterval(id);
    },[])

    const onClickLeftButton = ()=>{
        if(chIdx != 0){
            setChIdx(chIdx-1);
        }else{
            setChIdx(object.length-1)
        }
    }
    const onClickRightButton = ()=>{
        if(chIdx != object.length-1){
            setChIdx(chIdx+1);
        }else{
            setChIdx(0);
        }
    }

    return (
        <SliderTemplate>
            <ImageTemplate>
                {
                    object.map((obj,idx)=>(
                        <Image
                        key={`Image-${idx}`} chIdx={chIdx} obj={obj}
                        >
                        </Image>
                    ))
                }
            </ImageTemplate>
            <SideTextTemplate>
                {
                    object.map((obj,idx)=>(
                        <SideText
                        chIdx={chIdx}
                        obj={obj}
                        key={`SideText-${idx}`}
                        onClickLeftButton={onClickLeftButton}
                        onClickRightButton={onClickRightButton}
                        >
                        </SideText>
                    ))
                }
            </SideTextTemplate>
        </SliderTemplate>
    )
}
export default Slider
