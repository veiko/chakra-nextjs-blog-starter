import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';
import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <Box mb={5}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </Box>
      <Text as="h3" fontSize="3xl" lineHeight="1.375" mb={3}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Text _hover={{ textDecoration: 'underline' }}>{title}</Text>
        </Link>
      </Text>
      <Box fontSize="lg" mb={4}>
        <DateFormatter dateString={date} />
      </Box>
      <Text fontSize="lg" lineHeight={1.625} mb={4}>
        {excerpt}
      </Text>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
