import {
  Masonry as MuiMasonry,
  MasonryProps as MuiMasonryProps,
} from '@mui/lab';

export type MasonryProps = MuiMasonryProps;

export function Masonry(props: MasonryProps) {
  return <MuiMasonry {...props} />;
}

export default Masonry;
