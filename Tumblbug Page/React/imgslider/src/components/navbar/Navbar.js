import React from 'react'
import styled from 'styled-components';

const NavBarTamplate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1035px;
`;
const NavBarLeft = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;

`;
const Menu = styled.div`
    font-size: 13px;
    margin: 10px;
    margin-right: 0px;
    cursor: pointer;
`;
const Text1= styled.div`
    margin: 0 10px;
    font-weight: bolder;
`;
const Text2 = styled.div`
    margin: 0 10px;
    font-weight: bolder;
`;
const Logo = styled.img`
    position:relative;
    right: 20px;
    width: 100px;
`;
const NavbarRight = styled.div`
    display: flex;
    align-items: center;
`;
const Info = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
const ImgSearch = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
`;
const ImgUser = styled.img`
    width: 28px;
    height: 28px;
    margin: 7px;
    margin-left: 0;
    cursor: pointer;
`;
const Text3 = styled.div`
    margin : 0 10px;
    font-weight: bolder;
`;
function Navbar() {
    return (
        <>
            <NavBarTamplate>
                <NavBarLeft>
                    <Menu>
                        <i class="fas fa-bars"></i>
                    </Menu>
                    <Text1>프로젝트 둘러보기</Text1>
                    <Text2>프로젝트 올리기</Text2>
                </NavBarLeft>
                <Logo src="/imgs/logo.png"></Logo>
                <NavbarRight>
                    <Info>
                        <ImgSearch src="https://tumblbug.com/wpa/e5aa161342e919b420a40fc6e34cce08.png"></ImgSearch>
                        <Text3>로그인 / 회원가입</Text3>
                        <ImgUser src="https://tumblbug-assets.imgix.net/assets/user-account.png?s=08b1f9ecf24209994ac9b81900936c0e"></ImgUser>
                    </Info>
                </NavbarRight>
            </NavBarTamplate>
        </>
    )
}

export default Navbar
