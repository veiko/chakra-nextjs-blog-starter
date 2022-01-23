import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <Box mb={{ base: 8, md: 16 }}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </Box>
      <Grid
        gridGap={{ md: 16, lg: 8 }}
        marginBottom={{ base: 20, md: 28 }}
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      >
        <div>
          <Text
            as="h3"
            fontSize={{ base: '4xl', lg: '5xl' }}
            mb={4}
            lineHeight={{ md: 1 }}
          >
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <Text _hover={{ textDecoration: 'underline' }}>{title}</Text>
            </Link>
          </Text>
          <Box mb={{ base: 4, md: 0 }} fontSize="lg">
            <DateFormatter dateString={date} />
          </Box>
        </div>
        <div>
          <Text fontSize="lg" lineHeight={1.625} mb={4}>
            {excerpt}
          </Text>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </Grid>
    </section>
  );
};

export default HeroPost;
