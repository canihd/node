const fs = require('fs');

fs.readFile('素材/成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败');
    }
    // console.log('读取文件成功' + dataStr);
    let oldStr = dataStr.split(' ');
    const newStr = [];
    oldStr.forEach((item, index) => {
        // newStr.push(item.replace('=', '：'))
        // item = item.replace('=', '：')
        newStr[index] = item.replace('=', '：');
    });
    /* === const newStr = oldStr.map(item => item.replace('=','：'))   map返回一个新数组*/
    oldStr = oldStr.join('\r\n')
    console.log(newStr.join('\r\n'));
    // fs.writeFile('素材/成绩ok.txt', oldStr, function(err) {
    //     if (err) {
    //         return console.log('读取文件失败');
    //     }
    //     console.log(err);
    //     // console.log(err);小红=99 小白=100 小黄=70 小黑=66 小绿=88
    // })
})