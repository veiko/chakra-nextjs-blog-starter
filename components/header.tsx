import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Heading
      as="h2"
      fontSize={{ base: '2xl', lg: '4xl' }}
      letterSpacing={{ base: '-0.025em', md: '-0.05em' }}
      mb={20}
      mt={8}
    >
      <Link href="/">
        <a>Blog</a>
      </Link>
      .
    </Heading>
  );
};

export default Header;
