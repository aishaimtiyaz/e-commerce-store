import {Link} from 'react-router-dom';

const Footer =()=>{
    return(
        <div className="footer w-full flex flex-col bg-white">
            <div className='upperFooter w-full flex items-center pb-4 bg-[#DA5E42]'>
             <div className='wrapper w-3/5 mx-auto '>
                <table className='footerTable1 w-full'>
                    <tr className='sm:flex hidden items-center justify-between'>
                        <td><img src={require('./images/image 25.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 26.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 27.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 28.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 29.png')} alt="logo" /></td>

                    </tr>
                    <tr className='sm:flex hidden justify-between'>
                        <td><img src={require('./images/image 32.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 33.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 34.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 35.png')} alt="logo" /></td>
                        <td><img src={require('./images/image 36.png')} alt="logo" /></td>
                    </tr>
                    {/* this will be visible when screen size lower than 640px */}
                    <tr className='sm:hidden mx-auto'>
                        <td ><img src={require('./images/image 25.png')} alt="logo" className=' w-16 h-16'/></td>
                        <td ><img src={require('./images/image 26.png')} alt="logo" className=' w-16 h-16'/></td>
                        <td ><img src={require('./images/image 27.png')} alt="logo" className=' w-16 h-16'/></td>

                    </tr>
                    
                    <tr className='sm:hidden  mx-auto'>
                        <td><img src={require('./images/image 28.png')} alt="logo" className=' w-16 h-16'/></td>
                        <td><img src={require('./images/image 29.png')} alt="logo" className=' w-16 h-16'/></td>
                        <td><img src={require('./images/image 32.png')} alt="logo" className=' w-16 h-16'/></td>
                    </tr>
                    <tr className='sm:hidden mx-auto'>
                       
                        <td><img src={require('./images/image 33.png')} alt="logo" className=' w-16 h-16'/></td>
                        <td><img src={require('./images/image 34.png')} alt="logo" className=' w-16 h-16'/></td>
                        <td><img src={require('./images/image 35.png')} alt="logo" className=' w-16 h-16'/></td>
                    </tr>
                    <tr className='sm:hidden mx-auto'>
                        
                        <td><img src={require('./images/image 36.png')} alt="logo" className=' w-16 h-16'/></td>
                    </tr>
                </table>
             </div>
            </div>

           <div className='lowerFooter w-full bg-[#D84727]'>

            <div className='wrapper w-4/5 sm:m-auto sm:grid sm:grid-cols-4 flex flex-col mx-32 '>
                <div className='div1 flex flex-col align-top '>
                    <img src={require('./images/image 30.png')} alt="logo" className='footerLogo my-2 sm:w-1/2 md:w-1/2 w-1/3'/> 
                    <table className='text-white px-1 mt-4 flex flex-col justify-start'>

                        <tr className='font-semibold border-b-4 border-transparent'>Adress</tr>
                        <tr className='text-xs '>Store & Office</tr>
                        <tr className='text-xs border-b-8 border-transparent flex flex-col'><span>Jl. Setrasari Kulon III, No. 10-12,</span> <span>Sukarasa, Sukasari, Bandung,</span> <span>Jawa Barat, Indonesia 40152</span></tr>
                        
                        <tr className='font-semibold border-b-4 border-transparent'>Office Hour</tr>
                        <tr className='text-xs'>Monday - Sunday
                        </tr>
                        <tr className='text-xs'> 10.00 - 18.00 </tr>
                    </table>
                </div>
                <div className='div2 flex flex-col align-top'>
                <Link to="/footer" className='Link text-[#f5f5f5] text-lg font-semibold'>Get in touch</Link>
                <div className='uderlineDiv w-1/4 border-b-2 border-white'></div>
                <div className='w-3/4 grid grid-rows-3 gap-1 text-white mt-4'>
                        <div className='flex space-x-2'>
                        <div className='w-1/2 font-semibold'>Phone</div> 
                        <div className='text-xs'>022-20277564</div> 
                        </div >
                        <div className='flex space-x-2 font-semibold'>
                        <div className='w-1/2'>Service Center</div> 
                        <div className='text-xs '>0811-233-8899</div> 
                        </div>
                        <div className='flex space-x-2 font-semibold'>
                        <div className='w-1/2'>Customer Service</div> 
                        <div className='text-xs'>0811-235-9988</div> 
                        </div>
                        <div className='flex space-x-2 my-2 mb-6 '>
                        <div className='px-1 hover:cursor-pointer'><img src={require('./images/Facebook.png')} alt="socialLinks" className='my-2' /> </div> 
                        <div className='px-1 hover:cursor-pointer'><img src={require('./images/Instagram.png')} alt="socialLinks" className='my-2'/> </div> 
                        <div className='px-1 hover:cursor-pointer'><img src={require('./images/Twitter.png')} alt="socialLinks" className='my-2'/> </div> 
                        <div className='px-1 hover:cursor-pointer'><img src={require('./images/Youtube.png')} alt="socialLinks" className='my-2'/> </div> 
                        </div>
                    </div>
                </div>
                <div className='div3 flex flex-col align-top'><Link to="/footer"className='Link text-[#f5f5f5] text-lg font-semibold '>Useful Link</Link>
                <div className='uderlineDiv w-1/4 border-b-2 border-white'></div>
                    <div className='flex flex-col text-white text-sm py-2'>
                        <div className='my-1 hover:cursor-pointer'>Warranty & Complaints</div>
                        <div className='my-1 hover:cursor-pointer'>Order & Shipping</div>
                        <div className='my-1 hover:cursor-pointer'>Tracking Order</div>
                        <div className='my-1 hover:cursor-pointer'>About Us</div>
                        <div className='my-1 hover:cursor-pointer'>Repair</div>
                        <div className='my-1 hover:cursor-pointer'>Terms</div>
                        <div className='my-1 hover:cursor-pointer'>FAQ</div>
                    </div>
                </div>
                <div className='div4 flex flex-col align-top'>
                    <Link to="/footer" className='Link text-[#f5f5f5] text-lg font-semibold'>Campaign</Link>
                    <div className='uderlineDiv w-1/4 border-b-2 border-[#f5f5f5]'></div>
                    <div className='flex flex-col text-white text-sm my-2'>
                            <div className='my-1 hover:cursor-pointer'>Mengenal Arti Cukup</div>
                            <div className='my-1 hover:cursor-pointer'>Tell Your Difference</div>
                            <div className='my-1 hover:cursor-pointer'>Waykambas</div>
                            <div className='my-1 hover:cursor-pointer'>Rebrand</div>
                            <div className='my-1 hover:cursor-pointer'>Gallery</div>
                            <div className='my-1 hover:cursor-pointer'>Singo</div>
                            <div className='my-1 hover:cursor-pointer'>Rakai</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}
export default Footer;