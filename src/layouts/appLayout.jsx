import Navbar from "../components/Navbar";
import './styles/appLayoutStyle.css';

const AppLayout = ({children}) => {
    return (
        <div className="appLayout">
            <Navbar/>
            {children}
        </div>
    );
}
 
export default AppLayout;