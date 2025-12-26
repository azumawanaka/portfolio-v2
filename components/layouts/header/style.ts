import styled from '@emotion/styled';

export const StyledHeader = styled.header(({ theme }) => ({
  flex: 1,
  borderRadius: theme.shape.borderRadius,
  background: theme.custom.color.card,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 20,
  padding: theme.spacing(0, 2),
  '& .header-center': {
    flex: 1,
    '& .header-search': {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      '& .MuiInputBase-root': {
        marginLeft: 0,
      },
      '& form': {
        width: '100%',
        boxShadow: 'none',
        padding: 0,
      },
    },
  },
  '& .header-avatar': {
    position: 'relative',
    width: 28,
    height: 28,
    borderRadius: Number(theme.shape.borderRadius) * 10,
  },
}));
