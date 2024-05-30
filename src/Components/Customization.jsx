import { SharedText } from "./SharedText"
import { useContext } from "react"

export default function Customization(){
    const Defau = 7;
    const {direction,setDirection} = useContext(SharedText)
    const {Speed,setSpeed} = useContext(SharedText)
    const {Blink,setBlink} = useContext(SharedText)
    const {BlinkSpeed,setBlinkSpeed} = useContext(SharedText)

    const handleRight= ()=>{
        setDirection(1)
        console.log(direction);
    }
    const handleStop= ()=>{
        setDirection(9)
        console.log(direction);
    }
    const handleLeft= ()=>{
        setDirection(0)
        console.log(direction);
    }
    const handleSpeed= ()=>{
        var inputSpeed = parseInt(document.querySelector(".Speed").value) 
        if ( 1<= inputSpeed <=20){
            var n =  21-inputSpeed
        }
        setSpeed(n)
        console.log(n);
    }
    const handleBlinkOn = ()=>{
        setBlink(true)
    }
    const handleBlinkOff = ()=>{
        setBlink(false)
    }
    const handleBlinkSpeed= ()=>{
        var InputBlink = parseInt(document.querySelector(".InputBlink").value) 
        var n = 1<= InputBlink <=20 ? 21-InputBlink:
        console.log(n);
        setBlinkSpeed(n)
    }
    return (
        <div class="ml-3 mr-3 rounded-md bg-[#F0F0F0] p-4">
        <div class="head font-bold text-2xl">Customization</div>     
        <hr/>   
        <div class="operate ">
            {/* //Scroll Direction */}
            <div class="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
                <div class="left flex justify-center items-center gap-2 font-bold">
                    <svg class="bg-[#529EE4] p-1 rounded-xl text-white w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"></path></svg>
                    <div>Scroll Directions </div>
                </div>     
                <div class="right flex justify-center items-center gap-2 ">
                    <button onClick={handleLeft} type="button" class="btn left btn-light"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                    </button>
                    <button onClick={handleStop}  class="stop btn left btn-light"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7V17H17V7H7ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"></path></svg>
                    </button>
                    <button onClick={handleRight} class="righ btn left btn-light"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                    </button>
                </div>            
            </div>
            {/* // Scroll Speed */}
            <div class="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
                <div class="left flex justify-center items-center gap-2 font-bold">
                    <svg class="bg-[#529EE4] p-1 rounded-xl text-white w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.5 12.5 12.5 14.5 16.7072 9.70718 15.293 8.29297Z"></path></svg>
                    <div>Scroll Speed</div>
                </div>     
                <div class="right flex justify-center items-center gap-2 ">
                    <input onChange={handleSpeed} class="w-[153px] Speed" type="range" min="1" max="20" />
                </div>            
            </div>
            {/* // Blink ON OFF  */}
            <div class="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
                <div class="left flex justify-center items-center gap-2 font-bold">
                    <svg class="bg-[#529EE4] p-1 rounded-xl text-white w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path></svg>
                    <div>Blink</div>
                </div>     
                <div class="right flex justify-center items-center gap-2  ">
                    <button onClick={handleBlinkOn} class="righ btn left btn-light ">ON</button>
                    <button onClick={handleBlinkOff} class="righ btn left btn-light ">OFF</button>
                </div>            
            </div>
            {/* // Blink Frequency */}
            <div class="scrollDirection bg-white flex justify-between p-2 rounded-md mt-2">
                <div class="left flex justify-center items-center gap-2 font-bold">
                    <svg class="bg-[#529EE4] p-1 rounded-xl text-white w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z"></path></svg>
                    <div>Blink Frequency</div>
                </div>     
                <div class="right flex justify-center items-center gap-2 ">
                    <input onChange={handleBlinkSpeed} class="InputBlink w-[153px]" type="range" min="1" max="20" />
                </div>                            
            </div>
        </div>
    </div>
    )
}