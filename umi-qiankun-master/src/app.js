export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export const qiankun = fetch('/config').then(() => ({
  // 注册子应用信息
  apps: [
    {
      name: 'app1', // 唯一 id
      entry: '//localhost:8001', // html entry
      base: '/app1', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
      history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
    },
  ],
  jsSandbox: true, // 是否启用 js 沙箱，默认为 false
  prefetch: true, // 是否启用 prefetch 特性，默认为 true
  lifeCycles: {
    // see https://github.com/umijs/qiankun#registermicroapps
    afterMount: props => {
      // console.log(props);
    },
  },
  // ...even more options qiankun start() supported, see https://github.com/umijs/qiankun#start
}));
