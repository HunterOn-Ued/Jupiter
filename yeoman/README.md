# 脚手架
## 事前准备
```bash
npm install -g yo grunt-cli bower
npm install -g generator-angular
```
## 新建项目
```bash
yo angular
```
## 使用bower管理前端库依赖
```bash
#初始化`bower.json`
bower init

#安装库
bower install `pakageName` --save

#更新库
bower update
bower update `pakagename`

#删除库
bower uninstall 'pakagename' --save

#查看项目依赖库列表
bower list

#安装项目所有的依赖
bower install
```
#Build
##clean task
[https://www.npmjs.org/package/grunt-contrib-clean](https://www.npmjs.org/package/grunt-contrib-clean)
```javascript
//清理文件
clean: {
    dist: {
        files: [{
            dot: true,
            src: ['.tmp', '<%= yeoman.dist %>/*', '!<%= yeoman.dist %>/.git*']
        }]
    },
    server: '.tmp'
}
```
##imagemin task
[https://www.npmjs.org/package/grunt-contrib-imagemin](https://www.npmjs.org/package/grunt-contrib-imagemin)
```javascript
//压缩图片
imagemin: {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: '<%= yeoman.dist %>/images'
        }]
    }
}
```
##htmlmin task
[https://www.npmjs.org/package/grunt-contrib-htmlmin](https://www.npmjs.org/package/grunt-contrib-htmlmin)
```javascript
//压缩图片
htmlmin: {
    dist: {
        options: {
            //删除文档树中文本节点的空白。不会影响重大的空白， \
            //比如在SCRIPT,STYLE,PRE或TEXTAREA等元素内容
            collapseWhitespace: true,
            //删除布尔属性 \
            //<input disabled="disabled"> => <input disabled>
            collapseBooleanAttributes: true,
            //删除<script>和<style>标签内的HTML注释
            removeCommentsFromCDATA: true,
            //一些元素允许省略标签，像</td>
            removeOptionalTags: true
        },
        files: [{
            expand: true,
            cwd: '<%= yeoman.dist %>',
            src: ['*.html', 'views/{,*/}*.html'],
            dest: '<%= yeoman.dist %>'
        }]
    }
}
```
##compass task
[https://www.npmjs.org/package/grunt-compass](https://www.npmjs.org/package/grunt-compass)
```javascript
//编译sass，scss
compass: {
    options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/lib/flatlab/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/lib/flatlab/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
    },
    dist: {
        options: {
            generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
    },
    server: {
        options: {
            debugInfo: true
        }
    }
}
```
##autoprefixer task
[https://www.npmjs.org/package/grunt-autoprefixer](https://www.npmjs.org/package/grunt-autoprefixer)
```javascript
//自动根据指定的浏览器添加／变更css前缀
autoprefixer: {
    options: {
        browsers: ['last 1 version']
    },
    dist: {
        files: [{
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
        }]
    }
}
```
##useminPrepare task
[https://www.npmjs.org/package/grunt-usemin](https://www.npmjs.org/package/grunt-usemin)
```javascript
//根据html中的标识自动合并压缩js和css
useminPrepare: {
    html: '<%= yeoman.app %>/index.html',
    options: {
        dest: '<%= yeoman.dist %>',
        flow: {
            html: {
                steps: {
                    js: ['concat', 'uglifyjs'],
                    css: ['cssmin']
                },
                post: {}
            }
        }
    }
}
```
##ngmin task
[https://www.npmjs.org/package/grunt-ngmin](https://www.npmjs.org/package/grunt-ngmin)
```javascript
//angular js 预编译,修复可能导致压缩后错误的语法
ngmin: {
    dist: {
        files: [{
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: '*.js',
            dest: '.tmp/concat/scripts'
        }]
    }
}
```
##copy task
```javascript
copy: {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: ['*.{ico,png,txt}', '.htaccess', '*.html', 'views/{,*/}*.html', 'images/{,*/}*.{webp}']
        },
        {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= yeoman.dist %>/images',
            src: ['generated/*']
        },
        {
            expand: true,
            cwd: '<%= yeoman.app %>/lib/',
            src: '**',
            dest: '<%= yeoman.dist %>/lib/',
        }]
    },
    styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
    }
}
```
##cdnify task
[https://www.npmjs.org/package/grunt-cdnify](https://www.npmjs.org/package/grunt-cdnify)
```javascript
//根据规则，替换前端资源路径到cdn路径
cdnify: {
    someTarget: {
        options: {
            rewriter: function (url) {
                if (url.indexOf('data:') === 0){
                    return url; // leave data URIs untouched
                }else{
                    return url + '?12345'; // add query string to all other URLs
                }
            }
        },
        files: [{
            expand: true,
            cwd: 'app',
            src: '**/*.{css,html}',
            dest: 'dist'
        }]
    }
}
```
##cssmin task
```javascript
cssmin: {
    options: {
        root: '<%= yeoman.app %>'
    }
}
```
##rev task
[https://www.npmjs.org/package/grunt-rev](https://www.npmjs.org/package/grunt-rev)
```javascript
//为静态资源文件添加版本
rev: {
    dist: {
        files: {
            src: [
                '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                '<%= yeoman.dist %>/scripts/{,*/}*.js',
                '<%= yeoman.dist %>/styles/{,*/}*.css'
            ]
        }
    }
}
```
##usemin task
[https://github.com/yeoman/grunt-usemin](https://github.com/yeoman/grunt-usemin)
```javascript
//替换html和css中版本化的资源文件路径
usemin: {
    html: ['<%= yeoman.dist %>/{,*/}*.html', '<%= yeoman.dist %>/views/{,*/}*.html', ],
    css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
    options: {
        assetsDirs: ['<%= yeoman.dist %>']
    }
}
```
##files
+ `filter` src里的路径通过任意一个有效的 fs.Stats 函数名或者一个函数通过返回true和false决定是否匹配
+ `nonull` 当一个匹配没有找到时，返回包含这个模式的列表自身.当没有任何一个匹配时,返回一个空列表.结合grunt 的--verbore参数，这个选项可以帮助debug文件的路径问题.
+ `dot` 即使模式没有包含开始的`.`,dot匹配文件名时也会开始于`.`
+ `matchBase` 如果设置了, 模式在带有斜杠的文件名中,只会最后一个结尾的文件名,比如, a?b 只会匹配 /xyz/123/acb, 但不会匹配xyz/acb/123
+ `expand` 提供一个动态的 src-dest 文件映射, 细节请看 "Building the files object dynamically"
+ 其他的参数只在某些识别它的库中使用. 更多细节可以参考 node-glob 和 minimatch 文档
