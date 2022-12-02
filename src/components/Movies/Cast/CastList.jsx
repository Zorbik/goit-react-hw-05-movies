import { Box, CastItem } from '../../../components';

export const CastList = ({ cast }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      p={0}
      m={0}
    >
      {cast?.map(actor => (
        <CastItem key={actor.id} item={actor} />
      ))}
    </Box>
  );
};
