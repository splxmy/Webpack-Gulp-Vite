const { src, dest, watch } = require("gulp");

const babel = require("gulp-babel");
const terser = require("gulp-terser");

// 编译、转换、丑化、压缩js
const jsTask = () => {
  return src("./src/**/*.js")
    .pipe(babel())
    .pipe(terser({ mangle: { toplevel: true } }))
    .pipe(dest("./dist"));
};

// watch函数监听内容的改变
watch("./src/**/*.js", jsTask);

module.exports = {
  jsTask,
};
