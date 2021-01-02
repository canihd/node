const fs = require('fs')
const path = require('path')

// 没十几年脑血栓写不出来这种代码

// 样式表的正则
const styleReg = /<style>([\s\S]*)<\/style>/

// script的正则
const scriptReg = /<script>([\s\S]*)<\/script>/

// const url = 

fs.readFile(path.join(__dirname, './素材/index.html'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    // console.log(dataStr);
    st(dataStr)
    JS(dataStr)
    gHTML(dataStr)
})

function st(data) {
    if (styleReg.exec(data)) {
        const r1 = styleReg.exec(data);
        console.log(r1);
        const newCss = r1[0].replace('<style>', '').replace('</style>', '')
        fs.writeFile(path.join(__dirname, './素材/clock/index.css'), newCss, err => {
            if (err) {
                return console.log('写入失败');
            }
            console.log('写入成功');
        })
    }
}

function JS(data) {
    if (scriptReg.exec(data)) {
        const r1 = scriptReg.exec(data);
        // console.log(r1);
        const newCss = r1[0].replace('<script>', '').replace('</script>', '')
        fs.writeFile(path.join(__dirname, './素材/clock/index.js'), newCss, err => {
            if (err) {
                return console.log('写入失败');
            }
            console.log('写入成功');
        })
    }
}

function gHTML(data) {
    if (styleReg.exec(data) === null) {
        return data
    }
    const r1 = styleReg.exec(data);
    const r2 = scriptReg.exec(data);
    console.log(r1, r2);
    data = data.replace(r1[0], '<link rel="stylesheet" href="index.css">').replace(r2[0], '<script src="index.js"></script>')
    const h = gHTML(data)
    console.log(h);
    fs.writeFile(path.join(__dirname, './素材/clock/index.html'), h, err => {
        if (err) {
            return console.log('写入失败');
        }
        console.log('写入成功');
    })
}