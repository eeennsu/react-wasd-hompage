import React              from 'react';
import { Card, Skeleton } from 'antd';

const InfoCard = ({ title, content, isLoading }) => {

    return (              
        <Card 
            className='intro_card' 
            title={title}             
            headStyle={{ fontWeight: '400', fontSize: '40px', borderBottomColor: 'lightgrey', padding: '12px 30px' }}
            bodyStyle={{ padding: '35px', paddingTop: '15px' }}
            >                              
            <div className='content'>
                <Skeleton 
                    active 
                    loading={isLoading} 
                    paragraph={{ rows: Math.floor(Math.random() * 5) + 2 }}
                />
                {content}
            </div>                                
        </Card>              
    );
};

export default InfoCard;