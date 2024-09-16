import React from "react";
import Portal from "./Portal";
import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/constants/colors";

const CenterModal = ({
  toggleModal,
  children,
  borderRadius,
  bgcolor,
  width,
  height,
  isOpen,
  showClose,
}) => {
  return (
    <Portal>
      <Background
        onClick={(e) => {
          e.stopPropagation();
          toggleModal();
        }}
        $isOpen={isOpen}
      >
        <MainContainer
          $bgcolor={bgcolor}
          $borderRadius={borderRadius}
          $width={width}
          $height={height}
          onClick={(e) => e.stopPropagation()}
          $isOpen={isOpen}
        >
          <>
            {showClose && (
              <CloseButton onClick={toggleModal}>
                <Image
                  src="/circle-times.svg"
                  alt="cancel button"
                  height="30"
                  width="30"
                />
              </CloseButton>
            )}
            {children}
          </>
        </MainContainer>
      </Background>
    </Portal>
  );
};

export default React.memo(CenterModal);

const Background = styled.div`
  background-color: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  /* transition: all 0.3s ease-in-out; */
  /* transition-delay: ${({ $isOpen }) => ($isOpen ? "0s" : "0.3s")}; */
`;

const MainContainer = styled.div`
  cursor: auto;
  background-color: ${({ theme, $bgcolor }) => $bgcolor ?? colors.white};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "5"}px;
  width: ${({ $width }) => ($width ? $width : 420)}px;
  /* height: ${({ $height }) => $height ?? "100%"}; */
  /* transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")}); */
  /* transition: transform 0.3s ease-in-out; */
  overflow-y: scroll;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border: none;
`;
