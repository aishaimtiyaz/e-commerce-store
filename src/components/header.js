import React from 'react';
import { ReactComponent as SearchIcon } from './images/search.svg';
import { ReactComponent as UserIcon } from './images/userIcon.svg';
import { ReactComponent as BagIcon } from './images/shopping-bag.svg';
    const Header =()=> {
        return( 
            <div className="header p-4 sticky top-0 flex justify-around bg-white z-10">
                <div className="left">
                    <img src={require('./images/logo.png')} alt="logo" className='w-2/3'/>
                </div>
                <div className="center flex justify-between w-1/4">
                    <a href=" " className=''> Watches </a>
                    <a href=" "> Eyewear </a>
                    <a href=" "> Accessories </a>
                    <a href=" "> News </a>
                </div>
                <div className="right flex">
                    <SearchIcon alt="search icon" className="rightIcon"/>

                    <div className='login'>
                    <UserIcon alt="search icon" className="rightIcon"/>
                    <div className='loginText'>Login</div>
                    </div>

                    <div className="shopingBag"><BagIcon alt="shoppingbagIcon" className="rightIcon"/></div>
                </div>
           </div>
        );
    }
    export default Header;