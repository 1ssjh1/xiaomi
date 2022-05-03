const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    output: {
        // filename: "script/[name].js",
        clean: true,
        // path: path.join(__dirname, "./dist"),
        // assetModuleFilename: `images/[name][ext]`
    },
    devtool: "cheap-module-source-map",
    devServer: {
        hot: true,
        static: "./dist",
    },

    entry: {
        main: {
            import: ["./src/leftnav.js", "./src/slider.js", "./src/index.js"],
            dependOn: ["load"],
            filename: "main/[name].js"
        },

        main2: {
            import: ["./src/login&register.js"],
            dependOn: ["load"],
            filename: "main2/[name].js"
        },

        load: {
            import: ["./src/withenav.js"],
            filename: "common/load.js"
        }

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "login&register",
            template: "./login&register.html",
            filename: "login&register.html",
            inject: "head",
            //配置哪些 项
            chunks: ["main2", "load"],
            //多个 页面 后 你需要每个 都设置指定 名字

        }),
        new HtmlWebpackPlugin({
            title: "index",
            template: "./index.html",
            filename: "index.html",
            inject: "head",
            chunks: ["main", "load"]
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/transform-runtime"]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                // generator: {
                //     filename: 'css/[name].[ext]'
                // }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    // 输出到 font 目录中，占位符 [name] 保留原始文件名，
                    // [hash] 防止出现相同文件名无法区分，[ext] 拿到后缀名
                    filename: 'font/[name].[hash:6][ext]'
                }
            }, {
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]"
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }

        ]

    },
    resolve: {
        // 别名
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
        // ,
        // extensions: ['*', '.js', '.vue']
    },

    // externals: {
    //     fs: "commonjs fs",
    //     path: "commonjs path"
    // },
    // target: 'web'
    // target: "electron-renderer"
}