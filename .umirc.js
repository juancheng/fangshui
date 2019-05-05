
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'fangshui',
      dll: true,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  hash: true,
  base: '/',
  publicPath: "./",
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  targets: {
    chrome: 20, firefox: 20, safari: 6, edge: 8, ios: 6
  },
}
