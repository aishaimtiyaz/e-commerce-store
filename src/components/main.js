import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Addcart} from './images/add-cart.svg';
import {ReactComponent as BackBtn} from './images/Frame 2.svg';
import {ReactComponent as FrwdBtn} from './images/Frame 1.svg';
import {ReactComponent as BgVector1} from './images/Vector 12.svg';
import {ReactComponent as BgVector2} from './images/Vector 13.svg';
import {ReactComponent as BgVector3} from './images/Vector 14.svg';

const Main = ()=>{
    return(
        <div className="mainContainer my-6 mx-auto flex justify-center">
            <div className="productDetails my-8 w-10/12 p-10 bg-[#F1DDC9] flex items-center justify-center">
              <div className="w-1/3 watchSuperParent flex justify-center relative ">
                    <div className=" watchParent p-4  flex justify-end mx-6 ">
                        <img src={require("./images/image 6.png")} alt="productPhoto" className="absolute -top-20 -right-0 w-4/5  mr-12"/>
                    </div>
              </div>
              <div>
                   
              </div>
               <div className="pDetailsRightSide flex flex-col w-2/3 relative mt-3 ml-7">
                 <div className="text-5xl w-3/5  my-2 ml-2  text-[#333333] font-serif leading-normal">WAY KAMBAS MINI EBONY</div>
                 <div className="underline border-b-2 border-black w-20 ml-2 "></div>
                 <div className="bgVector absolute -top-24 -right-52 "><BgVector1  className="my-2 mx-4"/></div>
                 <div className="bgVector absolute -top-12 -right-52"><BgVector2  className="my-3 mx-4"/></div>
                 <div className="bgVector absolute -top-0 -right-52"><BgVector3  className="my-2 mx-4"/></div>
                 {/* <div className="bgVector absolute -top-24 -right-48"><BgVector3  /></div> */}
                 <div className="w-7/12 py-2 text-sm ml-2 ">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</div>
                 <Link to="/" className='Link text-base font-semibold underline underline-offset-8 mb-4 ml-2 '>Discover</Link>
                
                 <div className="buttonContainer flex py-4 my-2 ml-2 ">
                    <button className="bg-[#D84727] flex justify-between px-4 py-1 text-sm mr-4">
                        <span> <Addcart className='addCart'/> </span>
                        <span className="text-white my-2">Add to cart</span>
                    </button>
                    <button className="text-[#D84727] w-1/6 px-2 py-1 border-2 border-[#D84727] flex justify-center">
                        <img src={require('./images/logo-cicil-white.png')}/>
                    </button>
                 </div>
                 <div className="nextButtonContainer flex justify-end py-0 my-0 -right-3/4 -top-0 w-fit relative">
                   <button className="absolute  text-[#D84727] border-2 border-[#D84727] flex justify-between px-1 py-1 top-4">
                        <span> <BackBtn className='backbtn'/> </span>
                    </button>
                    <button className="absolute bg-[#D84727] border-2 border-[#D84727] px-1 py-1 flex justify-center left-8 top-4">
                    <span> <FrwdBtn className='fwdbtn'/> </span>
                    </button>
                 </div>
            </div>
                 
            </div>
        </div>
    );
}
export default Main;