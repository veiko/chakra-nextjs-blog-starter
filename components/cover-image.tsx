import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = <Image src={src} alt={`Cover Image for ${title}`} />;
  return (
    <Box mx={{ sm: 0 }}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </Box>
  );
};

export default CoverImage;
