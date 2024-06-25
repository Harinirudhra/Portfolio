import AboutImg from '../assets/aboutme2.png'

export default function About() {
  return <section className='flex bg-primary '>
    <div className='w-1/2'>
        <img src={AboutImg}/>
    </div>
    <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className=' text-4xl text-white border-b-4  mb-5 w-[180px] font-bold'>About me</h1>
            <p className='pb-2 text-white'>Hi,My name is Harini.I am a Frontend developer.I build a wesite with Reactjs</p>
            <p className='pb-4 text-white'>I have also completed three projects using the Reactjs library,html,Css and tailwind Css and javascript</p>
        </div>
    </div>
    

  </section>
    
  
}

