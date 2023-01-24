import React, { memo } from 'react';

const Container_Content = memo(({ title, sentence, content }) => {

    return (
        <div className="border border-4 mb-4 rounded-7 shadow-3-strong" style={{ cursor: 'pointer' }}>
            <div className="px-2 px-md-4 pt-md-3">
                <h4 className='px-3 pt-3 text-center text-md-start'>
                    { title }
                </h4>
                <div className='p-md-4 p-2 pb-md-3'>                   
                    {
                        sentence && 
                        <p className='fs-6'>
                            { sentence }
                        </p>  
                    }        
                    { 
                        content 
                    }                             
                </div>
            </div>
        </div>
    );
});

export default Container_Content;