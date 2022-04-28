const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    output: {
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
            import: ["./src/withenav.js", "./src/leftnav.js", "./src/slider.js", "./src/index.js"],
            // dependOn: ["common"],
            filename: "main/[name].js"
        },

        main2: {
            import: ["./src/login&regiter.js", "./src/withenav.js"],
            // dependOn: ["common"],
            filename: "other/[name].js"
        },

        // common: {
        //     import: ["./src/js/withenav.js"],
        //     filename: "common/load.js"
        // }

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "index",
            template: "./index.html",
            filename: "index.html",
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            title: "多页面应用3",
            template: "./login&register.html",
            filename: "login&register.html",
            inject: "body",
            chunks: ["main2 "],

        }),
        new MiniCssExtractPlugin({
            // filename: "css/[name].css"
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
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    // 输出到 font 目录中，占位符 [name] 保留原始文件名，
                    // [hash] 防止出现相同文件名无法区分，[ext] 拿到后缀名
                    filename: 'font/[name].[hash:6][ext]'
                }
            }, {
                test: /\.(jpg|png|gif|svg)$/i,
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
    }



}