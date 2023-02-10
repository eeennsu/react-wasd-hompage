import React, { memo, useCallback, useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';



const InfoModal = memo(({ title, content, detail }) => {

    const [centredModal, setCentredModal] = useState(false);
    const toggleShow = () => {
        setCentredModal(prev => !prev);
    };

    return (
        <React.Fragment>
            <div onClick={toggleShow} className='info_content'>
                { content }
            </div>
            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered size='xl'>
                    <MDBModalContent>
                        <MDBModalHeader className='border border-bottom border-1'>
                            <MDBModalTitle>{ title }</MDBModalTitle>
                            <MDBBtn className='btn-close' color='secondary' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p className='px-md-4'>
                                { detail }
                            </p>
                        </MDBModalBody>
                        <MDBModalFooter className='d-flex justify-content-center justify-content-md-end'>
                        <MDBBtn color='primary' onClick={toggleShow} >
                            Close
                        </MDBBtn>           
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </React.Fragment>        
    );
});

export default InfoModal;