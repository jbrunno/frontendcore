import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { IconButtonProps } from '../IconButton/IconButton';
import { TooltipProps } from '../Tooltip/Tooltip';
import {
  FileCopyStyled,
  IconButtonStyled,
  TooltipStyled,
} from './CopyToClipboardButton.styles';

export type CopyToClipboardButtonProps = {
  text: string;
  tooltip?: string;
  placement?: TooltipProps['placement'];
  color?: IconButtonProps['color'];
  className?: string;
  size?: IconButtonProps['size'];
  showNotification?: boolean;
  textToast?: string;
};

export function CopyToClipboardButton({
  text,
  tooltip,
  placement = 'right',
  color = 'primary',
  size = 'small',
  className,
  showNotification = false,
  textToast,
}: CopyToClipboardButtonProps) {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    if (showNotification) {
      toast.success(textToast);
    }
  }, [text, showNotification]);

  return (
    <TooltipStyled
      className={className}
      title={tooltip || ''}
      placement={placement}
      arrow
    >
      <IconButtonStyled size={size} onClick={handleCopy} color={color}>
        <FileCopyStyled size={size} />
      </IconButtonStyled>
    </TooltipStyled>
  );
}

export default CopyToClipboardButton;
