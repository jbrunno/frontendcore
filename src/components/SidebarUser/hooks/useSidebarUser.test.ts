import { useSidebarUser } from './useSidebarUser';

describe('useSidebarUser Hook', () => {
  const {
    data: { avatarText },
  } = useSidebarUser('Adriano Nasc Oliveira');

  it('should return initials', () => {
    expect(avatarText).toBe('AO');
  });
});
