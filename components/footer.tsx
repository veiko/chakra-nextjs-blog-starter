import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box
    as="footer"
    bgColor="gray.50"
    borderTop="1px solid"
    borderTopColor="gray.200"
  >
    <Container px={5}>
      <Flex
        alignItems="center"
        direction={{ base: 'column', lg: 'row' }}
        py={28}
      >
        <Heading
          as="h3"
          fontSize={{ base: '4xl', lg: '2.5rem' }}
          letterSpacing="-0.05em"
          lineHeight={1.25}
          mb={{ base: 10, lg: 0 }}
          pr={{ lg: 4 }}
          textAlign={{ base: 'center', lg: 'left' }}
          width={{ lg: '50%' }}
        >
          Statically Generated with Next.js.
        </Heading>
        <Flex
          alignItems="center"
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="center"
          pl={{ lg: 4 }}
          width={{ lg: '50%' }}
        >
          <Link
            bgColor="black"
            border="1px solid black"
            color="white"
            fontWeight="bold"
            href="https://nextjs.org/docs/basic-features/pages"
            mb={{ base: 6, lg: 0 }}
            mx={3}
            px={{ base: 12, lg: 8 }}
            py={3}
            _hover={{ bgColor: 'white', color: 'black' }}
          >
            Read Documentation
          </Link>
          <Link
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            mx={3}
          >
            View on GitHub
          </Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

export default Footer;
