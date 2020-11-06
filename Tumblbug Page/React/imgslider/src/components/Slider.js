import React,{useState} from 'react'
import styled from 'styled-components';
import Image from './Image';

const SliderTemplate = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 1070px;
    position: relative;
    overflow: hidden;
`;
function Slider({object}) {
    const [chIdx,setChIdx] = useState(0);

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
        <>
            <SliderTemplate>
                {
                    object.map((obj,idx)=>(
                        <Image
                        onClickLeftButton={onClickLeftButton}
                        onClickRightButton={onClickRightButton}
                        key={idx} chIdx={chIdx} obj={obj}
                        >
                        </Image>
                    ))
                }
            </SliderTemplate>
        </>
    )
}

export default Slider
