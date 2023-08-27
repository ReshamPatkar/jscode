import { AppBar, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import { useState } from 'react';
 
const Header = () => {
    const [open,setOpen] = useState(false);
    const Agenda = ['Keynotes','Sessions','Analyst Roundtables','Workshops']; 
    return(
         <AppBar style={{marginTop:"60px", backgroundColor:"#E8E8E8", textDecoration:"none"}} elevation={0}>
             <Toolbar style={{justifyContent:"left"}}>
                 <Link to="/home" style={{padding:'0 20px 0 20px', color:'#000', textDecoration:'none', fontFamily:"calibri"}}>Home</Link>
                 <Link to="/home" style={{padding:'0 20px 0 20px', color:'#000', textDecoration:'none', fontFamily:"calibri"}}>Who's Here</Link>
                 <Link to="/home" style={{padding:'0 20px 0 20px', color:'#000', textDecoration:'none', fontFamily:"calibri"}}>Messages</Link>
                 <Link to="/home" style={{padding:'0 20px 0 20px', color:'#000', textDecoration:'none', fontFamily:"calibri"}}>Contact Us</Link>      
                 <div style={{position:"relative"}}><Link onClick={()=>setOpen(!open)} style={{padding:'0 20px 0 20px', color:'#000', textDecoration:'none', fontFamily:"calibri"}}>
                    Agenda<i className="bi bi-chevron-down" style={{fontSize:"0.8rem", paddingLeft:"3px"}}></i></Link>
                 {
                    open && (<div style={{backgroundColor:"#fff", position:"absolute", marginTop:"20px", width:"195px", padding:"4px", boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"}}>
                    <ul style={{color:"black", fontFamily:"calibri", padding:"0 10px 0px 10px", margin:"0"}}>
                        {
                            Agenda.map((menu)=>(
                                <li key={menu} style={{listStyleType:"none", padding:"8px"}}>
                                    {menu}
                                </li>
                            ))
                        }
                    </ul>
                 </div>
                 )}
                 </div>
             </Toolbar>
         </AppBar>
    )
}
export default Header;