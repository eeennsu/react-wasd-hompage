import React, { memo } from 'react';
import { Card } from 'antd';

const Intro_Card = memo(({ title, content }) => {
    return (
        <Card className='intro_card' title={title} headStyle={{ fontWeight: '400', fontSize: '40px' }}>
            <div className='card_inner'>
                { content }
            </div>            
        </Card>
    );
});

export default Intro_Card;