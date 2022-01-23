import { Box } from '@chakra-ui/react';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Box maxW="2xl" mx="auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export default PostBody;
