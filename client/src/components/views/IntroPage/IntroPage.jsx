import React, { useEffect } from 'react';
import { useMemo } from 'react';
import InfoModal from './sections/InfoModal';
import IntroCard from './sections/IntroCard';
import axios from 'axios';
import { useState } from 'react';
import { message } from 'antd';

const IntroPage = () => {

    /* 
        [
            { 
                content : ~~,
                detail : ~~,        
            }    
        ] 
    */ 
    const [introInfos, setIntroInfos] = useState([]);
    

    // 더미데이터
    const cardInfos = useMemo(() => [
        {
            title: 'Wasd Introduce',
            content: 'Lorem ipsum dolor sit amet.',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in minima placeat officia pariatur, rem aut omnis beatae labore expedita quas inventore hic incidunt, quis voluptates ex sunt tempore fugit porro repudiandae vero, quo quam ut! Maiores eius deleniti natus odit accusamus minus sed dolorum, labore earum omnis, quos repudiandae sunt quo ratione reiciendis provident nemo eligendi repellendus excepturi tempora illum asperiores. Impedit quam quae, laudantium nam alias doloremque et, accusantium ullam dolor cumque sequi nisi rerum vitae exercitationem ab eligendi facere perspiciatis suscipit consequatur. Sunt, quae laboriosam! Expedita sunt blanditiis adipisci fugiat repellat, error vel maxime omnis corrupti mollitia?'
        },
        {
            title: 'Wasd vision',
            content: 'Lorem ipsum dolor sit amet.',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in minima placeat officia pariatur, rem aut omnis beatae labore expedita quas inventore hic incidunt, quis voluptates ex sunt tempore fugit porro repudiandae vero, quo quam ut! Maiores eius deleniti natus odit accusamus minus sed dolorum, labore earum omnis, quos repudiandae sunt quo ratione reiciendis provident nemo eligendi repellendus excepturi tempora illum asperiores. Impedit quam quae, laudantium nam alias doloremque et, accusantium ullam dolor cumque sequi nisi rerum vitae exercitationem ab eligendi facere perspiciatis suscipit consequatur. Sunt, quae laboriosam! Expedita sunt blanditiis adipisci fugiat repellat, error vel maxime omnis corrupti mollitia?'
        },
        {
            title: 'Wasd instructor',
            content: 'Lorem ipsum dolor sit amet.',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in minima placeat officia pariatur, rem aut omnis beatae labore expedita quas inventore hic incidunt, quis voluptates ex sunt tempore fugit porro repudiandae vero, quo quam ut! Maiores eius deleniti natus odit accusamus minus sed dolorum, labore earum omnis, quos repudiandae sunt quo ratione reiciendis provident nemo eligendi repellendus excepturi tempora illum asperiores. Impedit quam quae, laudantium nam alias doloremque et, accusantium ullam dolor cumque sequi nisi rerum vitae exercitationem ab eligendi facere perspiciatis suscipit consequatur. Sunt, quae laboriosam! Expedita sunt blanditiis adipisci fugiat repellat, error vel maxime omnis corrupti mollitia?'
        }
    ], []);

    // 서버에서 가져오기
    // useEffect(() => {
    //     (async () => {
    //        try {
    //         const response = await axios.get('server api link..');
    //         const { success, results } = response.data;

    //         if (success) {
    //             console.log('Data fatched was successful!');
    //         } else {
    //             console.log('Data fatched was failed..');
    //         }
    //        } catch (error) {
    //             console.log(error);
    //             message.error(error);
    //        }
    //     })();
    // }, []);

    return (
        <section className='intro_parent'>
            <div className='intro_cards_section'>
                <div className='d-flex row justify-content-center'>                   
                    {
                        cardInfos.map(({ title, content, detail }) => (
                            <div className="col-md-4 mb-4 mb-md-0" key={`intro-${title}`}>
                                <InfoModal 
                                    title={title} 
                                    detail={detail} 
                                    content={<IntroCard title={title} content={content} />}
                                />                                                      
                            </div>
                        ))
                    }                                                  
                </div>                
            </div>
        </section>
    );
};

export default IntroPage;