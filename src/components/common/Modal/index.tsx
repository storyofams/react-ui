import React, { ReactNode } from 'react';
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog';
import { pick, omit } from '@styled-system/props';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { Box } from '~components/common/Box';
import { Flex } from '~components/common/Flex';
import { Icon } from '~components/common/Icon';
import { Close } from '~components/common/Icon/library';
import { Text } from '~components/common/Text';
import type { SystemProps } from '~types/system';

const MotionOverlay = motion(ReachDialogOverlay);
const MotionDialog = motion(ReachDialogContent);

const DialogOverlay = styled(MotionOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(p) => p.theme.zIndices.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(p) => p.theme.space[4]}px;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0.75;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    padding: ${(p) => p.theme.space[4]}px ${(p) => p.theme.space[2]}px 92px;
  }
`;

const DialogContent = styled(MotionDialog)<SystemProps>`
  position: relative;
  flex: 1;
  padding: 0;
  margin: 0;
  max-height: 100%;
  background: transparent;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    max-width: 774px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: color 0.2s;

  &:hover {
    svg {
      color: ${(p) => p.theme.colors.grey800};
    }
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 160px);
  margin: 64px 0;
  padding: ${(p) => p.theme.space[5]}px;
  overflow: hidden;
  background: ${(p) => p.theme.colors.white};
  outline: none;
  border-radius: ${(p) => p.theme.radii.sm};
  box-shadow: ${(p) => p.theme.shadows.sm};
`;

type ModalProps = {
  isOpen: boolean;
  close(any): void;
  ariaLabel?: string;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
} & SystemProps;

export const ModalBase = ({
  children,
  ariaLabel,
  isOpen,
  close,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <DialogOverlay
          onDismiss={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <DialogContent
            aria-label={ariaLabel || 'modal'}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
          >
            <ContentWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              <CloseButton onClick={close} aria-label="Close modal">
                <Icon icon={Close} fontSize={1.75} color="grey600" />
              </CloseButton>

              {children}
            </ContentWrapper>
          </DialogContent>
        </DialogOverlay>
      )}
    </AnimatePresence>
  );
};

export const Modal = ({ children, header, footer, ...props }: ModalProps) => (
  <ModalBase {...omit(props)}>
    {typeof header === 'string' ? (
      <Box
        display="flex"
        mb={4}
        pb={2}
        alignItems="center"
        borderBottom="1px"
        borderColor="grey200"
      >
        <Text fontWeight="bold" fontSize={3}>
          {header}
        </Text>
      </Box>
    ) : (
      header
    )}

    <Box
      flex={1}
      pr={1.5}
      width="100%"
      overflowY="auto"
      fontSize={2}
      {...pick(props)}
    >
      {children}
    </Box>

    {footer && (
      <Flex alignItems="center" justifyContent="flex-end" mt={5}>
        {footer}
      </Flex>
    )}
  </ModalBase>
);
