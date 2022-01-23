import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import {
  Alert as AlertComponent,
  AlertDescription,
  Link,
} from '@chakra-ui/react';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <AlertComponent
      bgColor="gray.50"
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      p={0}
      px={5}
    >
      <Container>
        <AlertDescription
          display="block"
          fontSize="sm"
          lineHeight="initial"
          py={2}
          textAlign="center"
        >
          {preview ? (
            <>
              This page is a preview.{' '}
              <Link
                _hover={{ textDecoration: 'underline' }}
                color="teal.300"
                href="/api/exit-preview"
              >
                Click here
              </Link>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <Link
                _hover={{ color: 'blue.600' }}
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                textDecoration="underline"
              >
                available on GitHub
              </Link>
              .
            </>
          )}
        </AlertDescription>
      </Container>
    </AlertComponent>
  );
};

export default Alert;
