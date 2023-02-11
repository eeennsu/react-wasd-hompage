import React, { memo, useMemo } from 'react';
import { Container } from '../../../styled/eunsu/StyledComponent';
import Container_Content from './Container_Contet';
import Info_Modal from './Info_Modal_v1';
import MemberCard from './MemberCard';

const IntroPage = () => {

    const languages = useMemo(() => (        
        <div className="d-flex row justify-content-center justify-content-md-around fs-6 text-center">
            <div className="col-6 col-md-3 text-start">
                <h6>Web (Frontend)</h6>
                <ul>
                    <li>Javascript</li>
                    <li>React.js</li>                                                                       
                </ul>
            </div>  
            <div className="col-6 col-md-3 text-start">
                <h6>App</h6>
                <ul>
                    <li>Java</li>
                    <li>Android Studio</li>
                    <li>Flutter</li>                               
                </ul>
            </div>                             
            <div className="col-6 col-md-3 text-start">
                <h6>Server (Backend)</h6>
                <ul>
                    <li>Express.js</li>
                    <li>MySQL</li>                                       
                </ul> 
            </div>   
            <div className="col-6 col-md-3 text-start">
                <h6>Design</h6>
                <ul>
                    <li>Figma</li>                                        
                </ul> 
            </div>                  
        </div>     
    ), []);

    const assistants = useMemo(() => [
        {
            name: '권용태',
            part: '행정조교 / Web'
        },
        {
            name: '이윤태',
            part: '실습조교 / Server'
        }
    ]);

    const members = useMemo(() => [
        {
            name: '김소연',
            part: 'Web'
        },
        {
            name: '방은수',
            part: 'Web'
        },
        {
            name: '이연우',
            part: 'Design'
        }, 
        {
            name: '임지호',
            part: 'App'
        },      
        {
            name: '하이안',
            part: 'Design'
        },              
    ], []);

    const infosData = useMemo(() => [
        {
            title: '소개',
            sentence: `명지전문대의 프로그래밍 동아리 WASD는 소프트웨어 및 IT 정보기술의 큰 축을 맡고 있는 Web, App, Server, Design의 약자입니다.
                       위와 같은 분야 중 여러분이 흥미를 가지는 한 가지 분야를 선택하여,  멘토링을 통해 코딩 지식을 쌓아가는 동아리입니다.
                       저희 동아리는 매주 하루 주기적인 스터디 모임을 통해 조교님이 수업을 진행해 주십니다.
                       뿐만아니라 자신의 전공 분야의 공부만 하는 것이 아닌, 다른 파트의 팀원과 협업을 통해 프로젝트 혹은 공모전에 참가하여 다양한 커리어를 쌓아갈 수 있습니다.
                       소콘과에서 주로 배우는 vr과 게임 개발에 대해 흥미가 없는 학생이라면, 저희 동아리에 참여해 자신의 적성이 어떤 분야인지 알아볼 기회를 가질 수도 있습니다.
                       인터넷 관련 프로그래밍에 관심이 있다, 해보고 싶다 하시는 분들은 저희 동아리를 찾아와 주세요!`,
            modalContent: ''
        },
        {
            title: '비전',
            sentence: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio expedita culpa nobis odit molestias, harum libero consectetur possimus, debitis quam fuga reprehenderit dolores voluptatum! Iure, sed inventore officia, odit fuga fugiat asperiores earum eligendi doloribus ullam praesentium tenetur expedita reprehenderit reiciendis rem nostrum, magnam neque exercitationem eum voluptate tempore!',
            modalContent: ''
        },
        {
            title: '지도 교수',
            sentence: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio expedita culpa nobis odit molestias, harum libero consectetur possimus, debitis quam fuga reprehenderit dolores voluptatum! Iure, sed inventore officia, odit fuga fugiat asperiores earum eligendi doloribus ullam praesentium tenetur expedita reprehenderit reiciendis rem nostrum, magnam neque exercitationem eum voluptate tempore!',
            modalContent: ''
        },
        {
            title: '구성',
            sentence: `저희 동아리의 구성원들은 1학년 신입생과 기존 동아리 인원으로 구성되어 있습니다.        
                      또한 소콘과의 행정조교님과 실습조교님도 WASD에 참여하고 계셔 동아리의 비전과 발전에 큰 힘을 써주고 있습니다.`,
            modalContent: (
                <div className='' style={{ marginLeft: '45px' }}>                
                    <div className='d-flex row justify-content-around'>
                        { assistants.map((assistant) => <MemberCard name={assistant.name} part={assistant.part} />) }
                    </div>
                    <div className='d-flex row '>
                        { members.map((member) => <MemberCard name={member.name} part={member.part}/>) }
                    </div>
                </div>              
            )
        },   
    ], []);

    return (	
        <section className='info_parent'>     
            <div className='pt-5 pb-4'>
                <div id='intro_img'>
                    <div id='intro_content'>                    
                        <h1 className=' circle'>WASD</h1>
                    </div>
                    <div id="intro_img_cover"></div>
                </div>                
                <div className='mx-auto my-5 intro_contents'>
                    {
                        infosData.map((v) => (  
                            <Info_Modal title={v.title} showContent={<Container_Content title={v.title} content={v?.content} 
                                sentence={v?.sentence} key={`content - ${v.title}`} />} modalContent={v.modalContent || v.sentence}/>                                          
                        ))
                    }                       
                </div>           
            </div>              
        </section>
    );
};

export default IntroPage;