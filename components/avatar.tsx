import { Avatar as AvatarComponent, Box, Flex } from '@chakra-ui/react';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <Flex alignItems="center">
      <AvatarComponent alt={name} mr={4} src={picture} />
      <Box fontSize="xl" fontWeight="bold">
        {name}
      </Box>
    </Flex>
  );
};

export default Avatar;
