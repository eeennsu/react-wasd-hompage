import React from 'react';
import { useMemo } from 'react';
import InfoModal from './sections/InfoModal';
import IntroCard from './sections/IntroCard';

const IntroPage = () => {

    const cardInfos = useMemo(() => [
        {
            title: '소개',
            content: 'Lorem ipsum dolor sit amet.',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in minima placeat officia pariatur, rem aut omnis beatae labore expedita quas inventore hic incidunt, quis voluptates ex sunt tempore fugit porro repudiandae vero, quo quam ut! Maiores eius deleniti natus odit accusamus minus sed dolorum, labore earum omnis, quos repudiandae sunt quo ratione reiciendis provident nemo eligendi repellendus excepturi tempora illum asperiores. Impedit quam quae, laudantium nam alias doloremque et, accusantium ullam dolor cumque sequi nisi rerum vitae exercitationem ab eligendi facere perspiciatis suscipit consequatur. Sunt, quae laboriosam! Expedita sunt blanditiis adipisci fugiat repellat, error vel maxime omnis corrupti mollitia?'
        },
        {
            title: '비전',
            content: 'Lorem ipsum dolor sit amet.',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in minima placeat officia pariatur, rem aut omnis beatae labore expedita quas inventore hic incidunt, quis voluptates ex sunt tempore fugit porro repudiandae vero, quo quam ut! Maiores eius deleniti natus odit accusamus minus sed dolorum, labore earum omnis, quos repudiandae sunt quo ratione reiciendis provident nemo eligendi repellendus excepturi tempora illum asperiores. Impedit quam quae, laudantium nam alias doloremque et, accusantium ullam dolor cumque sequi nisi rerum vitae exercitationem ab eligendi facere perspiciatis suscipit consequatur. Sunt, quae laboriosam! Expedita sunt blanditiis adipisci fugiat repellat, error vel maxime omnis corrupti mollitia?'
        },
        {
            title: '지도 교수',
            content: 'Lorem ipsum dolor sit amet.',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in minima placeat officia pariatur, rem aut omnis beatae labore expedita quas inventore hic incidunt, quis voluptates ex sunt tempore fugit porro repudiandae vero, quo quam ut! Maiores eius deleniti natus odit accusamus minus sed dolorum, labore earum omnis, quos repudiandae sunt quo ratione reiciendis provident nemo eligendi repellendus excepturi tempora illum asperiores. Impedit quam quae, laudantium nam alias doloremque et, accusantium ullam dolor cumque sequi nisi rerum vitae exercitationem ab eligendi facere perspiciatis suscipit consequatur. Sunt, quae laboriosam! Expedita sunt blanditiis adipisci fugiat repellat, error vel maxime omnis corrupti mollitia?'
        }
    ], []);

    return (
        <section className='intro_parent'>
            <div className='intro_cards_section'>
                <div className='d-flex row justify-content-center'>                   
                    {
                        cardInfos.map((v) => (
                            <div className="col-md-4" key={`intro-${v.title}`}>
                                <InfoModal title={v.title} detail={v.detail} 
                                    content={<IntroCard title={v.title} content={v.content} />}/>                                                      
                            </div>
                        ))
                    }                                                  
                </div>                
            </div>
        </section>
    );
};

export default IntroPage;