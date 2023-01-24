import React, { memo, useMemo } from 'react';
import { Avatar }               from 'antd';
import { Comment }              from '@ant-design/compatible';

const MemberCard = memo(({ name, part }) => {
    
    const avatar = useMemo(() => (
        <Avatar src={null} alt/>
    ), [name, part]);

    return (
        <Comment className='col-4 col-md-3' avatar={avatar} author={name} content={part}/>
    );
});

export default MemberCard;