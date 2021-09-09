import logo from './logo.svg';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

import motercycle from './image/motercycle.gif'

function App() {









    const { ref : bicycle , getAnimation : bicycleanimation } = useWebAnimations({
      keyframes: [
             { transform: "translateX(0)" },
         { transform: "translateX(60px)" },
      ],
      timing: {
        duration: 2000, // Run for 1000ms
        direction: "alternate", // Run the animation forwards and then backwards
        iterations: Infinity, // Repeat once
        easing: "ease-in-out", // Use a fancy timing function
      },
    });





    const { ref : cloud1 , getAnimation :cloud1_animation } = useWebAnimations({
      keyframes: [
        { transform: "translateX(1500px)" },
        { transform: "translateX(-1500px)" },
      ],
    animationOptions: {
          //  delay: 500, // Start with a 500ms delay
          // delay: 500, // Start with a 500ms delay
          duration: 10000,
          iterations: Infinity,
        },})




    const { ref : cloud2 , getAnimation : cloud2_animation } = useWebAnimations({
      keyframes: [
        { transform: "translateX(1500px)" },
        { transform: "translateX(-1500px)" },
      ],
    animationOptions: {
          //  delay: 500, // Start with a 500ms delay
          // delay: 500, // Start with a 500ms delay
          duration: 10000,
          iterations: Infinity,
        },})

    const { ref : cloud3 , getAnimation :cloud3_animation } = useWebAnimations({
      keyframes: [
        { transform: "translateX(1500px)" },
        { transform: "translateX(-1500px)" },
      ],
    animationOptions: {
          //  delay: 500, // Start with a 500ms delay
          // delay: 500, // Start with a 500ms delay
          duration: 10000,
          iterations: Infinity,
        },})




const speed = ()=>{
 const  animation1=bicycleanimation()
 const  animation2=cloud1_animation()
 const  animation3=cloud2_animation()
 const  animation4=cloud3_animation()
 animation1.updatePlaybackRate(animation1.playbackRate * 1.1)
 animation2.updatePlaybackRate(animation2.playbackRate * 1.1)
 animation3.updatePlaybackRate(animation3.playbackRate * 1.1)
 animation4.updatePlaybackRate(animation4.playbackRate * 1.1)
}













// const animation1 = Cycleanum();
// const animation2 = cloud1anum();
// const animation3 = cloud2anum();
// const animation4 = cloud3anum();
// const animation5 = shipanum();
// animation1.updatePlaybackRate(animation1.playbackRate * 1.1);
// animation2.updatePlaybackRate(animation2.playbackRate * 1.1);
// animation3.updatePlaybackRate(animation3.playbackRate * 1.1);
// animation4.updatePlaybackRate(animation4.playbackRate * 1.1);
// animation5.updatePlaybackRate(animation5.playbackRate * 1.1);
// };






  return (
  
    <div >
  <div >
  <div class="sky"  ></div>


  <div id="sky" >
<img  ref={cloud1} id="cloud" src='https://clipartstation.com/wp-content/uploads/2017/11/white-cloud-clipart-no-background-9.png'/>
  </div>
    <div ref={cloud2}> 
    <img  id="cloud2" src='https://clipartstation.com/wp-content/uploads/2017/11/white-cloud-clipart-no-background-9.png'/>
    </div>
    
    <div ref={cloud3} > 
    <img  id="cloud3" src='https://clipartstation.com/wp-content/uploads/2017/11/white-cloud-clipart-no-background-9.png'/>
    </div>
    
    <div class="earth"   >

    <div id="bicycle"  >

      <img  ref={bicycle}  onClick={speed} src="https://thumbs.gfycat.com/NeglectedScarceCoral-max-1mb.gif"/>
    </div>
  </div>
  </div>
  </div>
  
  );
}

export default App;
