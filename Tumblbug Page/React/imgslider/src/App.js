import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Slider from './components/imageSlider/Slider';
import GridContainer from './components/common/GridContainer';

const object = [
  {
      idx : 0,
      img : "/imgs/img0.jpg",
      mainTxt1 : "2030년 마침내",
      mainTxt2 : "인류 최후의 유토피아",
      subTxt: "전원이 힘을 모아서 기술 중심 유토피아 건설하기"
  },
  {
      idx : 1,
      img : "/imgs/img1.jpg",
      mainTxt1 : "동그란 반지는",
      mainTxt2 : "고정관념이지",
      subTxt: "창에 비치는 달빛을 모티브로 한 사각 반지"
  },
  {
      idx : 2,
      img : "/imgs/img2.jpg",
      mainTxt1 : "성별에 상관없이",
      mainTxt2 : "멋진 우리는",
      subTxt: "말랑과 샤이앤, 트렌스젠더입니다"
  },
  {
      idx : 3,
      img : "/imgs/img3.jpg",
      mainTxt1 : "발그레한 장미색은",
      mainTxt2 : "어떻게 만들어질까",
      subTxt: "디자이너가 직접 만든 CMYK 컬러배합 맞추기"
  },
  {
      idx : 4,
      img : "/imgs/img4.jpg",
      mainTxt1 : "500년의 폐기물보다",
      mainTxt2 : "500년의 지구를 위해",
      subTxt: "CLAP 3기에서 플라스틱Free 창작자를 찾습니다"
  }
]
const attentionProject = [
  {
    idx: 1,
    img: "https://tumblbug-pci.imgix.net/e7b13b3d1a6192bf563ca14c255e8020e4c57615/75561a6696f15f1e41ed120333eb849cebd9e200/e670c17caccfb3bb16c5aba1c35f50fd485ead69/4bc09b8d-74eb-4f7d-81db-c9266d4dd6bb.jpg?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=6274a2e637f21046eeba37726ed9d44e",
    tagText: "재즈 음악 | 애쉬 Ahreum Ash Hanyou",
    titleText: "애쉬퀄텟, <For Your Solitary Night>",
    successRate: "146% 달성" 
  },
  {
    idx: 2,
    img: "https://tumblbug-pci.imgix.net/4c27b82455371c99574bd44a44866092d611ef5a/4cf250605dfdc169475ee719987c99b52d753e96/2e942f6c3dd97d9b6b1d6d09b3008b78cd0adc5f/d3ec45ce-20da-42da-8b90-d0ee64cd7817.jpg?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=05cc9549d7c4456ecaaf524b40d6f31c",
    tagText: "잡지 | 스튜디오 어중간",
    titleText: "[매거진 병:맛] 2030의 투병을 기록합니다.",
    successRate: "248% 달성" 
  },
  {
    idx: 3,
    img: "https://tumblbug-pci.imgix.net/e7b13b3d1a6192bf563ca14c255e8020e4c57615/7f61e900bd55545ab02dc7fab282d554986ec578/bb06ecb4cd1e1e8a5ec6a2a44b13e416d865a568/5abb6357-39f0-4eeb-901a-a6ed29123596.png?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=0aad2832e5f67933ba7e0f494fa6ad14",
    tagText: "잡지 | GLIT",
    titleText: "음악의 이면을 담은 잡지 'Ambivalence'",
    successRate: "79% 달성" 
  },
  {
    idx: 4,
    img: "https://tumblbug-pci.imgix.net/4c27b82455371c99574bd44a44866092d611ef5a/2be584d43f58e6fafc85fbfe771f80e4f13000b9/a11def31b0da0b4fa039e5b0e9a21d93a628f413/408e4e07-7674-432f-8a92-4bb4fdefd781.jpg?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=ba5df68addff84ddd0ea1b7d576ac1c7",
    tagText: "제품 디자인 | woothic",
    titleText: "세상에 단 하나뿐인, 새로운 방향성의 미니멀리즘 인센스홀더",
    successRate: "202% 달성" 
  },
  {
    idx: 5,
    img: "https://tumblbug-pci.imgix.net/4c27b82455371c99574bd44a44866092d611ef5a/f08dbd4b592b3d10da37b558a6b44197e33518c6/b636cd333d862a26e5c0f89e658003acd33108e9/6fc9b7c5-5696-46e3-886c-dc9c5c353b93.png?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=ad15aac62edb78998ee9adebedf077c9",
    tagText: "잡화 | NARINJI",
    titleText: "이보다 더 편하고 가벼울 순 없는 기능성 한지 로퍼!",
    successRate: "69% 달성" 
  },
  {
    idx: 6,
    img: "https://tumblbug-pci.imgix.net/4c27b82455371c99574bd44a44866092d611ef5a/def81a46cce12455f9a4730255f153af95f119e4/679627e02f20c9dbd6a6789388fb4f856c34dae8/cf6b0c54-1c00-4d04-8296-d7891912147c.png?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=ff6fd90016f8af47a1166b0f812dc643",
    tagText: "모바일 게임 | 루시드 드림",
    titleText: "좀비 세계에서 살아남는 성장형 게임! [위험한 쉘터]",
    successRate: "66% 달성" 
  },
  {
    idx: 7,
    img: "https://tumblbug-pci.imgix.net/e7b13b3d1a6192bf563ca14c255e8020e4c57615/30efdb70d07fc9a016c7672fb43f9df62fc71e0f/aa4160506f4b212844af996c019a5f9e6ded0fbd/8fce0e47-729b-4c43-9cf0-f0278fa1a47e.jpg?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=d29d16f9d08f7955500f1c658c131c1b",
    tagText: "의류 | 메종드르뷔",
    titleText: "당신의 일상에 쉼표하나 두고갈께요,",
    successRate: "21% 달성" 
  },
  {
    idx: 8,
    img: "https://tumblbug-pci.imgix.net/4c27b82455371c99574bd44a44866092d611ef5a/d9db064c8693264a4db338c3747aeeea2d39b4e7/fbaac0a02f7c7e2811fb603daba04dcf488c4d1b/3ae8a13b-a139-40f9-8a8f-48bc6050ee40.jpg?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=f38688a41400937d1020d33fba652a1e",
    tagText: "의류 | 김고래",
    titleText: "온전히 바라볼 준비가 된 사람들을 위한 옷",
    successRate: "292% 달성" 
  }
]
const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NavTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
function App() {
  return (
    <>
      <NavTemplate>
        <Navbar></Navbar>
      </NavTemplate>
      <Template>
        <Slider object={object}></Slider>
        <GridContainer
        titletext="주목할 만한 프로젝트"
        object={attentionProject}
        >
        </GridContainer>
      </Template>
    </>
  );
}

export default App;
