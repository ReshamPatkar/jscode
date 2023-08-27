import logoboa from "../logo-boa.png";    
import Header from "./Header";
import display from "../display.png"
import Card from "./Card";

const Home = () => {
    return(
        <div>
            <img src={logoboa} alt="logo" width="250" height="30"/>
            <Header/>
            <div style={{margin:"150px 0 0 50px"}}>
                <h4 style={{color:"#061A68", fontFamily:"calibri", margin:"0"}}>Welcome to</h4>
                <h1 style={{color:"#061A68", fontFamily:"calibri", margin:"0", fontSize:"50px"}}>The Summit!</h1>
                <p style={{fontFamily:"calibri", margin:"0"}}>Realize the power of our people</p><br></br>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <img src={display} alt="logo" width="520" height="300"/>
                    <Card/>
                </div>
            </div>
            
        </div>
    )
}
export default Home;