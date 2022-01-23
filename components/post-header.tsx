import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Author from '../types/author';
import { Box } from '@chakra-ui/react';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Box display={{ base: 'none', md: 'block' }} mb={{ md: 12 }}>
        <Avatar name={author.name} picture={author.picture} />
      </Box>
      <Box mb={{ base: 8, md: 16, sm: 0 }}>
        <CoverImage title={title} src={coverImage} />
      </Box>
      <Box maxW="2xl" mx="auto">
        <Box display={{ base: 'block', md: 'none' }} mb={4}>
          <Avatar name={author.name} picture={author.picture} />
        </Box>
        <Box fontSize="lg" mb={6}>
          <DateFormatter dateString={date} />
        </Box>
      </Box>
    </>
  );
};

export default PostHeader;
