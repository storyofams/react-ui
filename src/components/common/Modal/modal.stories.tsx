import React, { useState } from 'react';

import { Button, Box, Text, Modal } from '~components';

export default {
  component: Modal,
  title: 'Components/Modal',
};

// Header and renderFooter() are both equally valid props
const Header = () => (
  <Box width="100%" pb={1} mb={2} color={'pink' as any}>
    <Text fontSize={3} fontWeight="bold">
      My custom header
    </Text>
  </Box>
);

const Footer = ({ close, children }) => (
  <>
    <Button variant="secondary" mr={2} onClick={close}>
      Cancel
    </Button>
    {children}
  </>
);

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onOk = () => {
    closeModal();
  };

  const renderFooter = () => (
    <Footer close={closeModal}>
      <Button variant="primary" onClick={onOk}>
        Confirm action
      </Button>
    </Footer>
  );

  return (
    <>
      <Box>
        <Button variant="primary" onClick={openModal}>
          Open modal
        </Button>
      </Box>

      <Modal
        isOpen={isOpen}
        close={closeModal}
        header="Awesome Modal Title"
        footer={renderFooter()}
      >
        <Text>Are you sure you want to delete your account?</Text>
      </Modal>
    </>
  );
};

export const LongText = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onOk = () => {
    alert(`I hope I'm doing something more useful in the future.`);
    closeModal();
  };

  const renderFooter = () => (
    <Footer close={closeModal}>
      <Button variant="primary" onClick={onOk}>
        I agree
      </Button>
    </Footer>
  );

  return (
    <div>
      <Box>
        <Button variant="primary" onClick={openModal}>
          Open modal
        </Button>
      </Box>

      <Modal
        isOpen={isOpen}
        close={closeModal}
        header={<Header />}
        footer={renderFooter()}
      >
        Very long content
        {[...Object(Array(10)).keys()].map((i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
      </Modal>
    </div>
  );
};
