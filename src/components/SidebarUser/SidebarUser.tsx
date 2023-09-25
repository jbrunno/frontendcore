import { ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import {
  AvatarStyled,
  LinkStyled,
  SidebarUserContentStyled,
} from './SidebarUser.styles';
import Typography from '../Typography/Typography';
import { useSidebarUser } from './hooks/useSidebarUser';

export type SidebarUserProps = {
  isExpanded?: boolean;
  user: Record<string, unknown>;
  handleLogOut: () => void;
};

export function SidebarUser({
  isExpanded = false,
  user,
  handleLogOut,
}: SidebarUserProps) {
  const name = user.name as string;
  const {
    data: { avatarText },
  } = useSidebarUser(name);

  return (
    <SidebarUserContentStyled isExpanded={isExpanded}>
      <AvatarStyled>{avatarText}</AvatarStyled>
      {isExpanded && (
        <>
          <Typography variant="body2">{name}</Typography>
          <LinkStyled onClick={handleLogOut} color="textSecondary">
            <Typography variant="caption">Sair</Typography>
            <ExitToAppIcon fontSize="small" />
          </LinkStyled>
        </>
      )}
    </SidebarUserContentStyled>
  );
}

export default SidebarUser;
