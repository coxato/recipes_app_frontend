import React, { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom'; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Spin, Tag, Space } from 'antd';
// requests
import recipesRequests from '../requests/recipes';
// style
import "./styles/detail.css";


const DetailView = () => {
    const [recipeData, setRecipeData] = useState({});
    const [loading, setLoading] = useState(true);
    const { state: routeState } = useLocation();
    const { id } = useParams();

    useEffect(() => {
        if(routeState.name){
            setRecipeData(routeState);
            setLoading(false);
        }else{
            recipesRequests.getRecipeById(id)
                .then( r => {
                    setRecipeData(r);
                    setLoading(false);
                }) 
        }
    }, []);

    return (
        <div className="detail-page-wrapper">
            <Link to="/"><ArrowLeftOutlined/> Search another recipe</Link>

            {
                loading ? <Spin spinning size="large" /> : (
                    <div className="detail-container box-shaddow-light">
                        <div className="detail-left">
                            <div className="detail-img-wrapper">
                                <img src={recipeData.image} alt="recipe image" />
                            </div>
                        </div>
                        <div className="detail-right">
                            <h1>{recipeData.name}</h1>
                            <p>{recipeData.description}</p>
                            <h3>Ingredients used:</h3>

                            <Space>
                            {
                                recipeData.ingredients?.map( (ing, idx) => (
                                    <Tag key={idx}>{ing}</Tag>
                                ))
                            }
                            </Space>
                        </div>
                    </div>
                )
            }

        </div>
    );
}
 
export default DetailView;