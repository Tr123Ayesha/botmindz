import React from "react";
import './landingPages.css';
import Topbar from "../../components/Navbar";
import div1Image from "../../assets/div1.svg";
import ArrowCircle from '../../assets/arrowCircle.svg';
import Arrow from '../../assets/Arrow.svg';
import div2 from '../../assets/div2.svg';
import Box from '../../assets/rectangleBox.svg';
import box1 from '../../assets/box1.svg';
import Box2Main from '../../assets/box2Main.svg';
import box2 from '../../assets/box2.svg';
import Box3Main from '../../assets/Box3Main.svg';
import box3 from '../../assets/box3.svg';
import Box4Main from '../../assets/Box4Main.svg';
import box4 from '../../assets/box4.svg';
import div5 from '../../assets/div5Image.svg';
import div6 from '../../assets/div6.svg';
const LandingPage =()=>{
return(
<div className="landinPage">
<Topbar />
<div className="div1">
<div className="textDiv1">
    <p className="letsHorizon">  Let’s Horizon </p>
    <p className="roboticshandle"> <span className="Robotics"> Robotics </span> <span className="handle"> Handle It, </span></p>
    <p className="div1para">In publishing and graphic design, Lorem ipsum is a
         placeholder text commonly used to 
         demonstrate the visual form of a document.</p>
         <div className="learnMore"> 
            <img src={ArrowCircle} alt="arrow circle" />
            <p className="learn">Learn More</p>
            <img style={{width:'18px'}} src={Arrow} alt="Arrow" />


         </div>

</div>
<div className="div1Image">
    <img  style={{width:"100%"}}src={div1Image} alt="Div1Image"/>

</div>
</div>
<div className="div2">
    <div className="div2Image">
        <img src={div2} alt='Div 2 Imge' />
    </div>
    <div className="div2Text">
        <p className="service">Services</p>
        <p className="promisingCare">Promising Care:</p>
        <p className="rightAtTime">Right At Home</p>
        <p className="div2Para">In publishing and graphic design, Lorem ipsum is
             a placeholder text commonly used to demonstrate the visual form of a document.</p>
    </div>

</div>
<div className="div3">
    <div className="divrow1">
        <div className="box">
            <img src={Box} alt="Box"/>
            <div className="boxRight">
                <img src={box1} alt="box1" />
                <p className="machineLearning">Machine Learning</p>
                <p className="boxPara">In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
        </div>
        <div className="box">
            <img src={Box2Main} alt="Box"/>
            <div className="boxRight">
                <img src={box2} alt="box1" />
                <p className="machineLearning">Machine Learning</p>
                <p className="boxPara">In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
        </div>

    </div>
    <div className="divrow1">
        <div className="box">
            <img src={Box3Main} alt="Box"/>
            <div className="boxRight">
                <img src={box3} alt="box1" />
                <p className="machineLearning">Machine Learning</p>
                <p className="boxPara">In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
        </div>
        <div className="box">
            <img src={Box4Main} alt="Box"/>
            <div className="boxRight">
                <img src={box4} alt="box1" />
                <p className="machineLearning">Machine Learning</p>
                <p className="boxPara">In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
        </div>

    </div>


</div>
<div className="div4">
    <div className="innerBoxes">
    <div className="InnerBox">
        <p className="calculation">234+</p>
        <p className="main">Services</p>
    </div>
    <div className="InnerBox">
        <p className="calculation">712+</p>
        <p className="main">Services</p>
    </div>
    <div className="InnerBox">
        <p className="calculation">850+</p>
        <p className="main">Services</p>
    </div>
    <div className="InnerBox">
        <p className="calculation">234+</p>
        <p className="main">Services</p>
    </div>
    </div>

</div>
<div className="div5">
    <div className="div5text">
        <div className="div51">
        <p className="about">About Us</p>
        <p className="empoweringPeople">Empowering<span className="people"> People</span> By
        Keeping Them Well</p>
        <p className="div51para">In publishing and graphic design, Lorem ipsum
             is a placeholder text commonly used to demonstrate 
             the visual form of a document. </p>
             </div>
             <div className="div52">
                <div className="div52sub">
                    <img src={box1} alt="box1"/>
                    <div className="subpara">
                        <p className="mavhines">Machine Learning</p>
                        <p className="div52subpara">In publishing and graphic design, Lorem ipsum 
                            is a placeholder text commonly . </p>
                    </div>


                </div>
                <div className="div52sub">
                    <img src={box3} alt="box1"/>
                    <div className="subpara">
                        <p className="mavhines">Machine Learning</p>
                        <p className="div52subpara">In publishing and graphic design, Lorem ipsum 
                            is a placeholder text commonly . </p>
                    </div>


                </div>
                <button className="clickhere">Click Here</button>


             </div>
    </div>
    <div className="div5Image">
        <img src={div5} alt="Div5"/>
    </div>


</div>
<div className="div6">
    <div className="div6left">
        <img src={div6} alt="div6"/>
    </div>
    <div className="div6right">
        <p className="div6Para">Artificial Intelligence Is The New Big Thing In <span className="techh">Technology</span></p>
        <button className="clickhere">Click Here</button>
          </div>

</div>
<div className="div7">
    <p className="Team">Team</p>
    <p className="teamPara">Our Certified<span className="scientists"> Scientists</span> With Smart Solutions</p>

</div>

</div>

);

};
export default LandingPage;