import React, { ReactNode, FC } from 'react';
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog';
import { pick, omit } from '@styled-system/props';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, BoxProps, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Icon } from '~components';
import { Close } from '~components/common/Icon/library';

const MotionOverlay = motion.custom(ReachDialogOverlay);
const MotionDialog = motion.custom(ReachDialogContent);

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

const DialogContent = styled(MotionDialog)<BoxProps>`
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
};

export const ModalBase: FC<ModalProps & BoxProps> = ({
  children,
  ariaLabel,
  isOpen,
  close,
}) => {
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
              <CloseButton onClick={close}>
                <Icon icon={<Close />} size={12} color="grey600" />
              </CloseButton>

              {children}
            </ContentWrapper>
          </DialogContent>
        </DialogOverlay>
      )}
    </AnimatePresence>
  );
};

export const Modal: FC<ModalProps & BoxProps> = ({
  children,
  header,
  footer,
  ...props
}) => {
  console.log(typeof header, typeof footer, props);
  return (
    <ModalBase {...omit(props)}>
      {typeof header === 'string' ? (
        <Box
          display="flex"
          mb={4}
          pb={2}
          sx={{
            alignItems: 'center',
            borderBottom: '1px',
            borderColor: 'grey200',
          }}
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
        <Box
          display="flex"
          mt={5}
          sx={{ alignItems: 'center', justifyContent: 'flex-end' }}
        >
          {footer}
        </Box>
      )}
    </ModalBase>
  );
};
