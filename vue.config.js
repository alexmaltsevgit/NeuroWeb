export function chainWebpack(config) {
  config
    .plugin('html')
    .tap(args => {
      args[ 0 ].title = "Vue";
      return args;
    });
}
