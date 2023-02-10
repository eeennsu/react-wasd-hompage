import React, { memo, useState, useEffect } from 'react';
import { Card, Skeleton, Switch } from 'antd';

const IntroCard = memo(({ title, content }) => {

    const [isLoading, setIsLoading] = useState(true);

    const onSwitched = (checked) => {
        setIsLoading(!checked);
    }

    return (
        <>
            <Switch checked={!isLoading} onChange={onSwitched}/>
            <Card 
                className='intro_card' 
                title={title} 
                bordered={false}
                headStyle={{ fontWeight: '400', fontSize: '40px', borderBottom: 'none', padding: '6px 30px' }}
                bodyStyle={{ padding: '35px' }}
                >
                <Skeleton loading={isLoading} active>                    
                    <div>
                        { content }
                    </div>                
                </Skeleton>                            
            </Card>
        </>        
    );
});

export default IntroCard;