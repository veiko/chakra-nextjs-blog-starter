import { Container as Component, ContainerProps } from '@chakra-ui/react';

const Container: React.FC<ContainerProps> = ({ children }) => (
  <Component maxW={{ xl: '1536px', base: '1024px' }} px={5}>
    {children}
  </Component>
);

export default Container;
