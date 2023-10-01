import NetflixFooter from './NetflixFooter';
import './NetflixIndex.css';
import NetflixMain from './NetflixMain';
import { NetflixRegister } from './NetflixRegister';
import Netflixheader from './Netflixheader';
import RegisterComponent from './RegisterComponent';
export default function NetflixIndex(){
    return (
        <div className="container-fluid">
        <div className='box'>
        <header>
        <Netflixheader/>
        </header>
<section className='d-flex justify-content-center align-items-center'>
<main>
<NetflixMain/>
<NetflixRegister/>
</main>
</section>



<footer className='m-2 p-2'>

<NetflixFooter/>
</footer>

<RegisterComponent/>
        </div>

        
        </div>
    
        

    )
}