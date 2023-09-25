import { renderHook } from '@test-utils/hook-testing';
import { useRoute } from './useRoute';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('useRoute Hook', () => {
  it('should return route and open function', () => {
    const { result } = renderHook(() => useRoute('/test'));
    expect(result.current).toHaveProperty('route');
    expect(result.current).toHaveProperty('open');
  });

  it('should return route with params', () => {
    const { result } = renderHook(() =>
      useRoute('/test/:id', { params: { id: '1' } }),
    );
    expect(result.current.route).toBe('/test/1');
  });

  it('should return route with query', () => {
    const { result } = renderHook(() =>
      useRoute('/test', { query: { id: '1' } }),
    );
    expect(result.current.route).toBe('/test?id=1');
  });

  it('should return route with params and query', () => {
    const { result } = renderHook(() =>
      useRoute('/test/:id', { params: { id: '1' }, query: { id: '1' } }),
    );
    expect(result.current.route).toBe('/test/1?id=1');
  });
});
