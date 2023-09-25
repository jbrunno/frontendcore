import type { ComponentMeta } from '@storybook/react';
import { SidebarUser, SidebarUserProps } from '../SidebarUser';

export default {
  id: 'SidebarUser',
  title: 'Component API/Sidebar User',
  component: SidebarUser,
} as ComponentMeta<typeof SidebarUser>;

export const Default = (props: SidebarUserProps) => (
  <SidebarUser {...props} user={{ name: 'Adriano Oliveira' }} />
);
