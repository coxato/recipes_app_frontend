import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './styles/homeInput.css';

const HomeInput = ({ handleChange }) => {
    return (
        <div className="home-input-wrapper">
            <Input
                type="text"
                onChange={handleChange}
                id="home-input"
                className="home-input"
                placeholder="Type ingrediets separated by comma or press Enter" 
                prefix={<SearchOutlined/>}
            />
        </div>
    );
}
 
export default HomeInput;