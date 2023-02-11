import React    from 'react';
import { Card } from 'antd';

const InfoCard = ({ title, content }) => {

    return (              
        <Card 
            className='intro_card' 
            title={title} 
            bordered={false}
            headStyle={{ fontWeight: '400', fontSize: '40px', borderBottom: 'none', padding: '12px 30px' }}
            bodyStyle={{ padding: '35px', paddingTop: '15px' }}
            >                              
            <div>
                {content}
            </div>                                
        </Card>              
    );
};

export default InfoCard;