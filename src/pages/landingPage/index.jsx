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
import firstwomen from '../../assets/firstwomen.svg';
import second from '../../assets/second.svg';
import black from '../../assets/black-woman-black.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import whatsapp from '../../assets/whatsapp.svg';
import box8image from '../../assets/box8Image.svg';
import comma from '../../assets/comma.svg';
import div8box2 from '../../assets/div8box2.svg';
import div9Box from '../../assets/div9Box.svg';
import div10 from '../../assets/div10.svg';
import div11 from '../../assets/div11.svg';
import plus from '../../assets/plus.svg';
import box131 from '../../assets/box131.svg';
import box132 from '../../assets/box132.svg';
import box133 from '../../assets/box133.svg';
import box134 from '../../assets/box134.svg';
import div14 from '../../assets/div14.svg';
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
<div className="div7boxes">
    <div className="div7box">
        <img src={firstwomen} alt='girl'/>
        <div className="subbox">
            <p className="machineee">Machine Learning</p>
            <p className="inPublishingg">In publishing  </p>
            <div className="socialMedia"> 
                <img src={whatsapp} alt='socialmedia' />
                <img src={instagram} alt='socialmedia' />
                <img src={facebook} alt='socialmedia' />

            </div>

        </div>


    </div>
    <div className="div7box">
        <img src={second} alt='girl'/>
        <div className="subbox">
            <p className="machineee">Machine Learning</p>
            <p className="inPublishingg">In publishing  </p>
            <div className="socialMedia"> 
                <img src={whatsapp} alt='socialmedia' />
                <img src={instagram} alt='socialmedia' />
                <img src={facebook} alt='socialmedia' />

            </div>

        </div>


    </div>
    <div className="div7box">
        <img src={black} alt='girl'/>
        <div className="subbox">
            <p className="machineee">Machine Learning</p>
            <p className="inPublishingg">In publishing  </p>
            <div className="socialMedia"> 
                <img src={whatsapp} alt='socialmedia' />
                <img src={instagram} alt='socialmedia' />
                <img src={facebook} alt='socialmedia' />

            </div>

        </div>


    </div>

</div>
</div>
<div className="div8">
    <p className="testimonial">Testimonial</p>
    <p className="succour">Succour The<span className="customerbetter"> Customer Better</span></p>
    <p className="div8para">In publishing and graphic design, Lorem ipsum is a placeholder text commonly . </p>
<div className="div8Rowboxes">
    <div className="div8box">
        <p className="para8">In publishing and graphic design, Lorem ipsum 
            is a placeholder text commonly used to 
            demonstrate the visual form of a document. </p>
            <div className="div8Images">
             <img src={box8image} alt="box8"/>
             <img src={comma} alt="box8"/>
            </div>
    </div>
    <div className="div8box">
        <p className="para8">In publishing and graphic design, Lorem ipsum 
            is a placeholder text commonly used to 
            demonstrate the visual form of a document. </p>
            <div className="div8Images">
             <img src={div8box2} alt="box8"/>
             <img src={comma} alt="box8"/>
            </div>
    </div>
</div>
</div>
<div className="div9">
    <p className="project9">Projects</p>
    <p className="ourproject9">Our <span className="project99">Projects</span></p>
    <div className="div9boxess">
        <div className="div9box">
            <img  className="Microscope" src={div9Box} alt="div9box"/>
            <div className="divbox9para"> 
                <p className="div9testimonial">Testimonial</p>
                <p className="div9boxpara">In publishing and graphic design, Lorem ipsum is a placeholder text commonly  </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
            
        </div>
        <div className="div9box">
            <img className="Microscope" src={div9Box} alt="div9box"/>
            <div className="divbox9para"> 
                <p className="div9testimonial">Testimonial</p>
                <p className="div9boxpara">In publishing and graphic design, Lorem ipsum is a placeholder text commonly  </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
            
        </div>

    </div>

</div>
<div className="div10">
<p className="div10pricing">Pricing Plan</p>
<p className="div10our">Our <span className="div10plan">Pricing Plan</span></p>
<div className="div10row">
    <div className="div10box">
        <img style={{height:'89px'}} src={div10} alt="Div10"/>
        <p className="Premium">Premium</p>
        <p className="dollar"> 2.99$</p>
        <div className="div10paras">
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>

        </div>
        <button className="GetaQuote">Get a Quote</button>

    </div>
    <div className="div10box">
        <img  style={{height:'89px'}}src={div10} alt="Div10"/>
        <p className="Premium">Premium</p>
        <p className="dollar"> 2.99$</p>
        <div className="div10paras">
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>
            <div className="div10para">
                <div className="dot"></div>
                <p className="dotpara">In publishing and graphic </p>
            </div>

        </div>
        <button className="GetaQuote">Get a Quote</button>

    </div>
</div>

</div>
<div className="div11">
<div className="div11text">
    <p className="FAQ"> FAQ</p>
    <p className="robots">How Are Robots <span className="enhansing">Enhansing </span>Health
Care
</p>
<div className="loremIpsumdiv">
    <p className="loremPara">1. What is Lorem Ipsum?</p>
</div>
<p className="div11paraaa">In publishing and graphic design, Lorem ipsum is a 
    placeholder text commonly used to demonstrate 
    the visual form of a document. </p>
    <div className="oremparas">
    <div className="plsdiv">
        <p>1. What is Lorem Ipsum?</p>
        <img src={plus} alt="plus"/>

    </div>
    <div className="plsdiv">
        <p>2. What is Lorem Ipsum?</p>
        <img src={plus} alt="plus"/>

    </div>
    <div className="plsdiv">
        <p>3. What is Lorem Ipsum?</p>
        <img src={plus} alt="plus"/>

    </div>
    </div>

    </div>
    <div className="div11image">
<img src={div11} alt=" div11"/>
    </div>

</div>
<div className="div12">
<div className="div12image">
<img src={div2} alt='Div 2 Imge' />
</div>
<div className="div12Text">
<p className="contect">Contact</p>
<p className="stayCalm">Be Well Stay Calm And <span className="keepintouch"> Keep In Touch</span></p>
<form className="form">
<div className="formrow">
<input 
      type="text" 
      id="firstName" 
      name="firstName" 
      className="firstName" 
      placeholder="First Name" 
   
    />
    <input 
      type="text" 
      id="lastname" 
      name="lastname" 
      className="firstName" 
      placeholder="Last Name" 
   
    />
</div>
<div className="formrow">
<input 
      type="text" 
      id="Email" 
      name="Email" 
      className="firstName" 
      placeholder="Email" 
   
    />
    <input 
      type="text" 
      id="phonenumber" 
      name="phonenumber" 
      className="firstName" 
      placeholder="Phone Number" 
   
    />
</div>
<textarea 
  id="description" 
  name="description" 
  className="firstName" 
  placeholder="Message"
></textarea>

<button className="Submit">Submit</button>
</form>
</div>
</div>
<div className="div13">
    <p className="Insight">In sights</p>
    <p className="para13">Tapping <span className="para13Untel">Intelligence </span>Through Talent.</p>
    <div className="div13bottom">
   
    <div className="box13">
            <img style={{width:'100%'
            }} src={box131} alt="Box13"/>
            <div className="boxRight"  style={{paddingRight:'35px'}}>

                <p className="Cobot">Cobot Success Stories</p>
                <p className="box13boxPara">In publishing and graphic design, Lorem ipsum is a placeholder.  </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
    </div>

   
    <div className="box13">
            <img style={{width:'100%'
            }} src={box132} alt="Box13"/>
            <div className="boxRight" style={{paddingRight:'35px'}}>

                <p className="Cobot">Cobot Success Stories</p>
                <p className="box13boxPara">In publishing and graphic design, Lorem ipsum is a placeholder.  </p>
                <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
            </div>
        </div>
       
    </div>
    <div className="div13bottom2">
   
   <div className="box13">
           <img style={{width:'100%'
           }} src={box133} alt="Box13"/>
           <div className="boxRight"  style={{paddingRight:'35px'}}>

               <p className="Cobot">Cobot Success Stories</p>
               <p className="box13boxPara">In publishing and graphic design, Lorem ipsum is a placeholder.  </p>
               <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
           </div>
       </div>

  
   <div className="box13">
           <img style={{width:'100%'
           }} src={box134} alt="Box13"/>
           <div className="boxRight" style={{paddingRight:'35px'}}>

               <p className="Cobot">Cobot Success Stories</p>
               <p className="box13boxPara">In publishing and graphic design, Lorem ipsum is a placeholder.  </p>
               <div className="servicesss"> <p>Services</p><img src={Arrow} alt="arrow" /></div>
           </div>
       </div>
 </div>
 </div>
 <div className="div14">
    <div className="div14left">
        <p className="newsletter">News Letter</p>
        <p className="subscribe">Subscribe To Our <span className="subscribenews">Newsletter </span></p>
        <div class="message-container">
  <input type="text" class="message-input" placeholder="Enter Your Message" />
  <button class="subscribe-button">Subscribe</button>
</div>
    </div>
    <div className="div14right">
<img style={{width:'100%'}} src={div14} alt="div14" />
    </div>

 </div>

 <div class="footer">
 <div className="sociall">
    <p className="social"> Home</p>
    <p className="social"> About</p>
    <p className="social"> Service </p>
    <p className="social"> Contact</p>
    <p className="social"> Plan </p>
 </div>
 <div className="finalFooter">
    <div className="socialApp">
        <img  src={whatsapp} alt="whatsapp"/>
        <img src={instagram} alt="whatsapp"/>
        <img  src={facebook} alt="whatsapp"/>
    </div>
<div className="copyRight">
    <p>Copyright © 2024 Botmindz. All rights reserved.</p>
</div>
 </div>
</div>

    


</div>

);

};
export default LandingPage;