import React from 'react';
import InfoCard                       from './sections/InfoCard';
import { message }                    from 'antd';
import { ParentDiv }                  from '../../styled/eunsu/StyledComponent';
import useClubInfo                    from './customHooks/useClubInfo';
import ErrorInfo                      from './sections/ErrorInfo';

// 카드 제목
const titles = [        
    'Introduce',
    'Vision',
    'Instructor'        
];

const IntroPage = () => {

    const fetchData = useClubInfo();
    //최초 접속시 서버에서 가져오기
    // useEffect(() => {       
    //     axios.all(endPoints.map(endPoint => axios.get(endPoint)))
    //         .then(axios.spread((res1, res2, res3) => {
    //             const resIntroduce  = res1.data;
    //             const resVision     = res2.data;
    //             const resInstructor = res3.data;

    //             if (resIntroduce.suc && resVision.suc && resInstructor.suc) {
    //                 console.log('data get success!');                   

    //                 const results = [
    //                     resIntroduce.result.info_content,
    //                     resVision.result.info_content,
    //                     resInstructor.result.info_content
    //                 ];

    //                 setClubInfos([...results]);                  
    //                 setIsLoading(false);                    
    //             } else {
    //                 message.error('data get failed..');
    //             }
    //         }))
    //         .catch((e) => {
    //             message.error('server error...')
    //             console.log(e);              
    //         });
    // }, []);

    return (
        <ParentDiv flex justifyCenter alignCenter >
            {
                fetchData.filter((data) => data.isError).length > 0 ? 
                
                <ErrorInfo />

                :

                <section className='intro_parent'>
                    <div className='intro_cards_section row'>
                        {   
                            fetchData.map(({ data, isLoading }, i) => (
                                <div className="col-md-4 mb-4 mb-md-0 " key={`info-${titles[i]}}`}>
                                    <InfoCard   
                                        title={titles[i]}                                  
                                        data={data}    
                                        isLoading={isLoading}                                                      
                                    />                                                                                      
                                </div>
                            ))
                        }
                    </div>
                </section>
            }         
        </ParentDiv>    
    );
};

export default IntroPage;