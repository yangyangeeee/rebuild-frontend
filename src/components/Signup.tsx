import React from "react";
import Rebuild_logo from '../img/Rebuild_logo.png';
import {Final_Box,PINK_BOX2,First_Box,Second_Box,Background,BlackBox,PinkBOX,Circle_Box,First_Curtain,Second_Curtain,Final_Curtain,
    FlowerIMG,Asterisk,Qurter_flower,Logo,Big_Asterisk,
    Soft_Flower,Five_Flower,SmileImg,Signup_Box,DIV,INPUT_BOX
    ,Title,INPUT_content,Signup_Button
} from '../styles/Signup';
import Flower from '../img/Flower.png';
import Asterisk2 from '../img/Asterisk2.png';
import QurterFlower from '../img/qurter_Flower.png';
import Asterisk1 from '../img/Asterisk1.png';
import SoftFlower from '../img/Soft Flower.png';
import fiveleaf from '../img/fiveleaf.png';
import Smile from '../img/Smile.png';


const Signup = () => {


    return (
      
   <Background>
    <DIV>
    {/*커튼, 로고, 이미지들 */}
    <Final_Box>
        <PinkBOX/>
        <Circle_Box>
            <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>
        </Circle_Box>
    </Final_Box>
    <FlowerIMG src={Flower} />
    <Asterisk src={Asterisk2}/>
    <Qurter_flower src={QurterFlower}/>
    <Big_Asterisk src={Asterisk1}/>
    <Soft_Flower src={SoftFlower}/>
    <Five_Flower src={fiveleaf}/>
    <SmileImg src={Smile}/>
    <Second_Box>
    <BlackBox/>
    
        <Circle_Box>
    <Second_Curtain/><Second_Curtain/><Second_Curtain/><Second_Curtain/><Second_Curtain/><Second_Curtain/></Circle_Box>
   </Second_Box>
<First_Box>
<PINK_BOX2/>
    <Circle_Box>
<First_Curtain/><First_Curtain/><First_Curtain/><First_Curtain/><First_Curtain/><First_Curtain/>
   </Circle_Box>
   </First_Box>
<Logo src={Rebuild_logo}/>
</DIV>

<Signup_Box>
<INPUT_BOX>
<Title>1. 아이디</Title><INPUT_content type="text" placeholder="입력하시오..."/>
</INPUT_BOX>
<INPUT_BOX>
<Title>2. 닉네임</Title><INPUT_content type="text"  placeholder="입력하시오..."/>
</INPUT_BOX>
<INPUT_BOX>
<Title>3. 비밀번호</Title><INPUT_content type="password" placeholder="입력하시오..."/>
</INPUT_BOX>
</Signup_Box>

<Signup_Button>
    등록하기
</Signup_Button>

   </Background>


  );
  };
  
  export default Signup;