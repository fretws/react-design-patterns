import { useState } from 'react'
import styled from 'styled-components'

// While I prefer to maintain the separation of concerns between structure and styling files, the styling of these components is not the main focus of this learning module.
const ModalBackground = styled.div`
  postition: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export const Modal = ({children}) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => {setShouldShow(true)}}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          {/* Stop propagation so that the user clicking within the body of the modal does not activate the onClick of the Modal Background */}
          <ModalBody onClick={e => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  )
}