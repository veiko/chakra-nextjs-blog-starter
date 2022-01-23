import { Box } from '@chakra-ui/react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Box minH="100vh">
        <Alert preview={preview} />
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
