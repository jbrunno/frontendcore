const presets = [
  '@babel/preset-env',
  [
    '@babel/preset-react',
    { runtime: 'automatic', jsxImportSource: '@emotion/react' },
  ],
  '@babel/preset-typescript',
];
const plugins = [
  [
    '@emotion',
    {
      importMap: {
        '@mui/material': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/material', 'styled'],
          },
        },
        '@mui/material/styles': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/material/styles', 'styled'],
          },
        },
      },
    },
  ],
];

module.exports = { presets, plugins };
