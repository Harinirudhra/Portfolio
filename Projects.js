import ecommerceImg1 from '../assets/Ecommerce.png'
import ecommerceImg2 from '../assets/foodweb side.jpg'
import ecommerceImg3 from'../assets/blog.jpg'

export default function Projects() {
  return <div className='flex py-20 px-20 justify-center bg-secondary text-white'>
          <div className="w-1/2">
                <div className="flex justify-center">
                <h1 className=' text-4xl text-white font-bold'>Projects</h1>
                </div>
          </div> 
  <section className='flex flex-col items-center'>
           <div className='hover:scale-125  w-1/2  max-w-xs flex '>
           <img src={ecommerceImg1}/>
           </div>
           <div className='flex flex-col items-center'>
           <h1 className=' text-4xl text-white font-bold'>E-commerce website</h1>
           
           </div>
   </section>
   <section className='flex flex-col items-center'>
   <div className='hover:scale-125 w-1/2 flex-col '>
        <img src={ecommerceImg2}/>
      </div>
        <div className='flex flex-col items-center'>
            <h1 className=' text-4xl text-white  font-bold'>E-commerce website</h1>
            
        </div>
   </section>
   <section>
   <div className='hover:scale-125 w-1/2 flex-col '>
        <img src={ecommerceImg3}/>
      </div> 
      <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className=' text-4xl text-white border-b-4  mb-5 w-[190px] font-bold'>E-commerce website</h1>
           
            
        </div>
      </div>

   </section>
   </div>
   
   




  
  
}
