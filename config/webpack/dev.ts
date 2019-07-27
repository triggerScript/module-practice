import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './common';

const devConfig: webpack.Configuration = merge(commonConfig, {
    mode: 'development',
    watch: true
});

export default devConfig;