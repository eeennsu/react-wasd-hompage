import React, { useEffect, useState } from 'react';
import InfoCard                      from './sections/InfoCard';
import axios                          from 'axios';
import { message, Spin }              from 'antd';
import { ParentDiv }                  from '../../styled/eunsu/StyledComponent';
import { useNavigate }                from 'react-router-dom';
import { CLUB_INFO }                  from '../apiConfig';

const IntroPage = () => {
   
    const [clubInfos, setClubInfos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // 서버에서 가져오기
    useEffect(() => {
        const endPoints = [
            `${CLUB_INFO}/동아리소개`,
            `${CLUB_INFO}/동아리비전`,
            `${CLUB_INFO}/동아리교수`
        ];    

        axios.all(endPoints.map(endPoint => axios.get(endPoint)))
            .then(axios.spread((res1, res2, res3) => {
                const resIntroduce  = res1.data;
                const resVision     = res2.data;
                const resInstructor = res3.data;

                if (resIntroduce.suc && resVision.suc && resInstructor.suc) {
                    console.log('data get success!');
                    
                    const results = [
                        {
                            title: <span>A Club<br/>Introduce</span>,
                            content: resIntroduce.result.info_content
                        },
                        {
                            title: <span>A Club<br/>Vision</span>,
                            content: resVision.result.info_content
                        },
                        {
                            title: <span>A Club<br/>Instructor</span>,
                            content: resInstructor.result.info_content
                        }
                    ];

                    setClubInfos([...results]);
                    setIsLoading(false);
                } else {
                    message.error('data get failed..');
                    navigate('/');
                }
            }))
            .catch((e) => message.error('error...'));
    }, []);

    return (
        <ParentDiv flex justifyCenter alignCenter>
            <section className='intro_parent'>
                <div className='intro_cards_section row'>
                    {
                        isLoading ? 

                        <Spin tip='Loading' size='large'/>

                        :

                        clubInfos.map(({ title, content }) => (                          
                            <div className="col-md-4 mb-4 mb-md-0" key={`info-${title}`}>
                                <InfoCard   
                                        title={title}                                  
                                        content={content}
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