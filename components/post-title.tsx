import { Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => (
  <Heading
    as="h1"
    fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
    letterSpacing="-0.05em"
    lineHeight={{ base: 1.25, lg: 1 }}
    mb={12}
    textAlign={{ base: 'center', lg: 'left' }}
  >
    {children}
  </Heading>
);

export default PostTitle;
