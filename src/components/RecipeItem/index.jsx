import { Card, Tag, Image, Space, Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './sytles/recipeItem.css';

const RecipeItem = ({ id, name, description, image, ingredients}) => {
    const isFavorite = false;

    return (
        <Link 
            to={`/recipe/${id}`} 
            style={{ textDecoration: 'none' }}
            state={{ id, name, description, image, ingredients}}
        >
            <Card className='r-card-wrapper'>
                <div className="r-card-inner">
                    <div className="r-item-left">
                        <Image width={150} src={image} />
                    </div>
                    <div className="r-item-right">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <Space>
                            {
                                ingredients.map((ing, idx) => (
                                    <Tag key={idx}>{ing}</Tag>
                                ))
                            }
                        </Space>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
 
export default RecipeItem;