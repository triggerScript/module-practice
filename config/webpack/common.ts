import path from 'path';
import webpack from 'webpack';

const rootPath = process.cwd();
const context = path.join(rootPath, "src");
const outputPath = path.join(rootPath, 'dist');

const commonConfig: webpack.Configuration = {
    context,
    entry: path.join(context, 'root.ts'),
    output: {
        filename: 'bundle.js',
        path: outputPath
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}

export default commonConfig;