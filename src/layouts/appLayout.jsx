import Navbar from "../components/Navbar";
import './styles/appLayoutStyle.css';

const AppLayout = ({children}) => {
    return (
        <div className="app-wrapper">
            <Navbar/>
            {children}
        </div>
    );
}
 
export default AppLayout;