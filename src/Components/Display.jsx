  import { useContext, useState } from "react"
import { SharedText } from "./SharedText";
import MyComponent from "./MyComponent";
import { useRef } from 'react';
import { useEffect } from 'react';

  function Display(){
  const {setText} = useContext(SharedText)
  const {Init} = useContext(SharedText)
  const {Bg} = useContext(SharedText)
  const {fullscreen,setFullScreen} = useContext(SharedText)

  useEffect(() => {
    // Function to check if value is true
    const checkValue = () => {
      if (fullscreen === true) {
          setFullScreen(false)
        !document.fullscreenElement ? componentRef.current.requestFullscreen():
        console.log('Value is true!' + fullscreen);
      }
    };
    checkValue();

    return () => {
    };
  }, [fullscreen]);


  function handle(){
    const Input = document.querySelector(".Input").value
    Input == "" ?  setText(Init) : setText(Input)
  }

  const handleBackground = {
    backgroundColor: Bg
    }
  
    const componentRef = useRef();
    // document.addEventListener("" ,() => {
    //     fullscreen ? !document.fullscreenElement ? componentRef.current.requestFullscreen() : document.exitFullscreen() : ""
    // });
    const exitFS = () =>{

    }


return(
        <div class="flex m-3 rounded-md flex-col ">
            <div 
            // onClick={
            //     fullscreen ? !document.fullscreenElement ? componentRef.current.requestFullscreen() : document.exitFullscreen() : ""
            // }
            ref={componentRef} 
            class="rounded-md p-10 relative" 
            style={handleBackground}
            >
                <MyComponent></MyComponent>
            </div>
            <div class="input flex mt-2 rounded-md">
                <input onChange={handle} class="Input flex-grow rounded-md p-4 bg-[#F0F0F0] text-xl" type="text" placeholder={Init}/>
            </div>
        </div>
    )
}

export default Display;

