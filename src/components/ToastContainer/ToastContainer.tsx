import {
  ToastContainer as LibToastContainer,
  ToastContainerProps as LibToastContainerProps,
} from 'react-toastify';
import {
  NotificationsOutlined,
  InfoOutlined,
  ReportProblemOutlined,
  TaskAltOutlined,
  ErrorOutline,
} from '@mui/icons-material';
import { ToastContainerWrapperStyled } from './ToastContainer.styles';
import 'react-toastify/dist/ReactToastify.css';

export type ToastContainerProps = LibToastContainerProps;

export function ToastContainer(props: ToastContainerProps) {
  return (
    <ToastContainerWrapperStyled>
      <LibToastContainer
        icon={({ type }) => {
          const typesIconMap = {
            default: <NotificationsOutlined />,
            info: <InfoOutlined />,
            success: <TaskAltOutlined />,
            warning: <ReportProblemOutlined />,
            error: <ErrorOutline />,
          };

          return typesIconMap[type];
        }}
        closeButton={false}
        position="bottom-left"
        {...props}
      />
    </ToastContainerWrapperStyled>
  );
}

export default ToastContainer;
