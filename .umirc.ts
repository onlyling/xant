import type WebpackChain from 'webpack-chain';
import { defineConfig } from 'dumi';

const repo = 'xant';

export default defineConfig({
  chainWebpack(memo: WebpackChain) {
    memo.plugins.delete('copy');
  },
  apiParser: {
    propFilter: {
      skipNodeModules: true,
    },
  },
  title: 'Xant',
  mode: 'site',
  outputPath: 'docs-dist',
  hash: true,
  favicon: 'https://avatars.githubusercontent.com/u/9999765?s=460&u=3b72ee9a0bcb877f338132adf0c43e2b2e9f3df7&v=4',
  logo: 'https://avatars.githubusercontent.com/u/9999765?s=460&u=3b72ee9a0bcb877f338132adf0c43e2b2e9f3df7&v=4',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/onlyling/xant',
    },
  ],
  resolve: {
    includes: ['docs', 'components'],
  },
  styles: [
    `
    .__dumi-default-device-status {
      background-color: #fff;
    }
    #root .__dumi-default-mobile-demo-layout {
      min-height: 100vh;
      background-color: #f7f8fa;
    }
    @media only screen and (max-width: 500px) {
      .__dumi-default-mobile-demo-layout {
        padding: 0 !important;
      }
    }`,
  ],
});
