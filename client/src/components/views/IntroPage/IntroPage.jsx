import React, { useEffect, useState } from 'react';
import InfoCard                      from './sections/InfoCard';
import axios                          from 'axios';
import { message, Spin }              from 'antd';
import { ParentDiv }                  from '../../styled/eunsu/StyledComponent';
import { useNavigate }                from 'react-router-dom';
import { CLUB_INFO }                  from '../apiConfig';

// 서버 경롷
const endPoints = [
    `${CLUB_INFO}/동아리소개`,
    `${CLUB_INFO}/동아리비전`,
    `${CLUB_INFO}/동아리교수`
];

// 카드 제목
const titles = [        
    'Introduce',
    'Vision',
    'Instructor'        
];

const IntroPage = () => {
   
    const [clubInfos, setClubInfos] = useState(Array.from({ length: titles.length }));
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();  

    // 최초 접속시 서버에서 가져오기
    useEffect(() => {       
        axios.all(endPoints.map(endPoint => axios.get(endPoint)))
            .then(axios.spread((res1, res2, res3) => {
                const resIntroduce  = res1.data;
                const resVision     = res2.data;
                const resInstructor = res3.data;

                if (resIntroduce.suc && resVision.suc && resInstructor.suc) {
                    console.log('data get success!');                   

                    const results = [
                        resIntroduce.result.info_content,
                        resVision.result.info_content,
                        resInstructor.result.info_content
                    ];

                    setClubInfos([...results]);                  
                    setIsLoading(false);                    
                } else {
                    message.error('data get failed..');
                    navigate('/');
                }
            }))
            .catch((e) => {
                message.error('server error...')
                console.log(e);              
            });
    }, []);

    return (
        <ParentDiv flex justifyCenter alignCenter>
            <section className='intro_parent'>
                <div className='intro_cards_section row'>
                    {
                        clubInfos.map((info, i) => (
                            <div className="col-md-4 mb-4 mb-md-0" key={`info-${titles[i]}}`}>
                                <InfoCard   
                                    title={titles[i]}                                  
                                    content={info}
                                    isLoading={isLoading}                              
                                />                                                                                      
                            </div>
                        ))
                    }
                </div>
            </section>
        </ParentDiv>    
    );
};

export default IntroPage;