import { Heading, Flex, Text, Link } from '@chakra-ui/react';
import { CMS_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <Flex
      alignItems="center"
      as="section"
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ md: 'space-between' }}
      mb={{ base: 16, md: 12 }}
      mt={16}
    >
      <Heading
        as="h1"
        fontSize={{ base: '5xl', md: '8xl' }}
        letterSpacing="-0.3rem"
        pr={{ md: 8 }}
      >
        Blog.
      </Heading>
      <Text
        as="h4"
        fontSize="lg"
        mt={5}
        pl={{ md: 8 }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        A statically generated blog example using{' '}
        <Link
          _hover={{ color: 'blue.600' }}
          href="https://nextjs.org/"
          textDecoration="underline"
        >
          Next.js
        </Link>
        , Chakra, and {CMS_NAME}.
      </Text>
    </Flex>
  );
};

export default Intro;
