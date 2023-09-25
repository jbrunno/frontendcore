export const useSidebarUser = (name: string) => {
  const initials = name.split(' ').map((letters) => letters[0]);
  const avatarText = [initials[0], ...initials.slice(-1)]
    .join('')
    .toUpperCase();

  return {
    data: { avatarText },
  };
};
