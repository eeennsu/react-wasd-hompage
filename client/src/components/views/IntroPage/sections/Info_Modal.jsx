import React, { memo, useState } from 'react';
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
import { useCallback } from 'react';

const Info_Modal = memo(({ title, showContent, modalContent }) => {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = useCallback(() => {
    console.log('클릭!');
    setCentredModal(state => !state);
  }, [centredModal]);

  return (
    <React.Fragment>
        <div onClick={toggleShow}>
            { showContent }
        </div>
      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal} >
        <MDBModalDialog centered size='lg'>
          <MDBModalContent>
            <MDBModalHeader className=' border border-bottom border-1'>
              <MDBModalTitle>{ title }</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p className='px-md-4'>
                { modalContent }
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

export default Info_Modal;