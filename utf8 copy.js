const fs = require('fs');
const path = require('path')
    // 获取文件名 包含扩展名
var fullName = path.basename(fpath)
console.log(fullName);
// 获取文件名从后往前截取掉键入的第二个内容
var extName = path.basename(fpath, '.txt')
console.log(extName);
extName = path.extname(fpath)
console.log(extName);
// 使用path.join方法拼接文件路径
fs.readFile(path.join(__dirname, '素材/成绩.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败');
    }
    let oldStr = dataStr.split(' ');
    const newStr = oldStr.map(item => item.replace('=', '：'))
    oldStr = oldStr.join('\r\n')
    console.log(newStr.join('\r\n'));
    fs.writeFile('素材/成绩ok.txt', oldStr, function(err) {
        if (err) {
            return console.log('读取文件失败');
        }
        console.log(err);

    })
})