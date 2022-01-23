import PostPreview from './post-preview';
import Post from '../types/post';
import { Grid, Heading } from '@chakra-ui/react';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <Heading
        as="h2"
        fontSize={{ base: '5xl', md: '7xl' }}
        letterSpacing="-0.05em"
        mb={8}
      >
        More Stories
      </Heading>
      <Grid
        gridColumnGap={{ md: 16, lg: 32 }}
        gridRowGap={{ base: 20, md: 32 }}
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        mb={32}
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Grid>
    </section>
  );
};

export default MoreStories;
