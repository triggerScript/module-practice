import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './common';

const prodConfig: webpack.Configuration = merge(commonConfig, {
    mode: 'production'
});

export default prodConfig;