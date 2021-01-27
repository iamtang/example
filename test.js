const request = require('request-promise');
const u = require('./u');
const base64decode = require('./base64decode');
const download = require('./download');
const Iconv = require('iconv-lite');

const urls = [
	"/manhua/419/633593.html",
    "/manhua/419/631630.html",
    "/manhua/419/627945.html",
    "/manhua/419/625132.html",
    "/manhua/419/622778.html",
    "/manhua/419/620838.html",
    "/manhua/419/619276.html",
    "/manhua/419/617822.html",
    "/manhua/419/616532.html",
    "/manhua/419/615399.html",
    "/manhua/419/612338.html",
    "/manhua/419/611110.html",
    "/manhua/419/608570.html",
    "/manhua/419/608569.html",
    "/manhua/419/608568.html",
    "/manhua/419/608567.html",
    "/manhua/419/608566.html",
    "/manhua/419/608565.html",
    "/manhua/419/608564.html",
    "/manhua/419/608560.html",
    "/manhua/419/597319.html",
    "/manhua/419/597318.html",
    "/manhua/419/597317.html",
    "/manhua/419/597316.html",
    "/manhua/419/597315.html",
    "/manhua/419/588936.html",
    "/manhua/419/588159.html",
    "/manhua/419/383459.html",
    "/manhua/419/382439.html",
    "/manhua/419/381499.html",
    "/manhua/419/381145.html",
    "/manhua/419/380204.html",
    "/manhua/419/379669.html",
    "/manhua/419/376901.html",
    "/manhua/419/376900.html",
    "/manhua/419/373107.html",
    "/manhua/419/370449.html",
    "/manhua/419/367527.html",
    "/manhua/419/364991.html",
    "/manhua/419/362513.html",
    "/manhua/419/362511.html",
    "/manhua/419/359473.html",
    "/manhua/419/358974.html",
    "/manhua/419/358703.html",
    "/manhua/419/357101.html",
    "/manhua/419/355239.html",
    "/manhua/419/354731.html",
    "/manhua/419/350648.html",
    "/manhua/419/346398.html",
    "/manhua/419/342742.html",
    "/manhua/419/335968.html",
    "/manhua/419/330151.html",
    "/manhua/419/326621.html",
    "/manhua/419/324446.html",
    "/manhua/419/321485.html",
    "/manhua/419/315979.html",
    "/manhua/419/313905.html",
    "/manhua/419/311300.html",
    "/manhua/419/309590.html",
    "/manhua/419/308400.html",
    "/manhua/419/307413.html",
    "/manhua/419/307254.html",
    "/manhua/419/306400.html",
    "/manhua/419/305164.html",
    "/manhua/419/303667.html",
    "/manhua/419/301926.html",
    "/manhua/419/300299.html",
    "/manhua/419/299940.html",
    "/manhua/419/297934.html",
    "/manhua/419/296618.html",
    "/manhua/419/296226.html",
    "/manhua/419/294382.html",
    "/manhua/419/292823.html",
    "/manhua/419/291453.html",
    "/manhua/419/290000.html",
    "/manhua/419/286719.html",
    "/manhua/419/284130.html",
    "/manhua/419/278231.html",
    "/manhua/419/275184.html",
    "/manhua/419/275183.html",
    "/manhua/419/275182.html",
    "/manhua/419/275181.html",
    "/manhua/419/275180.html",
    "/manhua/419/275179.html",
    "/manhua/419/275178.html",
    "/manhua/419/275177.html",
    "/manhua/419/243170.html",
    "/manhua/419/241891.html",
    "/manhua/419/240187.html",
    "/manhua/419/237690.html",
    "/manhua/419/234635.html",
    "/manhua/419/233247.html",
    "/manhua/419/228040.html",
    "/manhua/419/226874.html",
    "/manhua/419/224362.html",
    "/manhua/419/222821.html",
    "/manhua/419/220814.html",
    "/manhua/419/219203.html",
    "/manhua/419/217628.html",
    "/manhua/419/214429.html",
    "/manhua/419/211738.html",
    "/manhua/419/211168.html",
    "/manhua/419/201743.html",
    "/manhua/419/201742.html",
    "/manhua/419/200294.html",
    "/manhua/419/200293.html",
    "/manhua/419/200291.html",
    "/manhua/419/200289.html",
    "/manhua/419/200288.html",
    "/manhua/419/200287.html",
    "/manhua/419/200286.html",
    "/manhua/419/200285.html",
    "/manhua/419/200284.html",
    "/manhua/419/200283.html",
    "/manhua/419/200282.html",
    "/manhua/419/200280.html",
    "/manhua/419/200279.html",
    "/manhua/419/200278.html",
    "/manhua/419/200277.html",
    "/manhua/419/200276.html",
    "/manhua/419/200275.html",
    "/manhua/419/200274.html",
    "/manhua/419/200273.html",
    "/manhua/419/200272.html",
    "/manhua/419/200271.html",
    "/manhua/419/200269.html",
    "/manhua/419/200268.html",
    "/manhua/419/200267.html",
    "/manhua/419/200265.html",
    "/manhua/419/200264.html",
    "/manhua/419/200263.html",
    "/manhua/419/200262.html",
    "/manhua/419/200261.html",
    "/manhua/419/200259.html",
    "/manhua/419/200258.html",
    "/manhua/419/200257.html",
    "/manhua/419/200256.html",
    "/manhua/419/200255.html",
    "/manhua/419/200254.html",
    "/manhua/419/200253.html",
    "/manhua/419/200252.html",
    "/manhua/419/200251.html",
    "/manhua/419/200250.html",
    "/manhua/419/200249.html",
    "/manhua/419/200248.html",
    "/manhua/419/200247.html",
    "/manhua/419/200246.html",
    "/manhua/419/200245.html",
    "/manhua/419/200244.html",
    "/manhua/419/200243.html",
    "/manhua/419/200242.html",
    "/manhua/419/200241.html",
    "/manhua/419/200240.html",
    "/manhua/419/200238.html",
    "/manhua/419/200237.html",
    "/manhua/419/200236.html",
    "/manhua/419/200235.html",
    "/manhua/419/200234.html",
    "/manhua/419/200233.html",
    "/manhua/419/200232.html",
    "/manhua/419/200231.html",
    "/manhua/419/200230.html",
    "/manhua/419/200228.html",
    "/manhua/419/200227.html",
    "/manhua/419/200226.html",
    "/manhua/419/200225.html",
    "/manhua/419/200224.html",
    "/manhua/419/200222.html",
    "/manhua/419/200221.html",
    "/manhua/419/200220.html",
    "/manhua/419/200219.html",
    "/manhua/419/200218.html",
    "/manhua/419/200217.html",
    "/manhua/419/200216.html",
    "/manhua/419/200215.html",
    "/manhua/419/200214.html",
    "/manhua/419/200213.html",
    "/manhua/419/200212.html",
    "/manhua/419/200210.html",
    "/manhua/419/200209.html",
    "/manhua/419/200208.html",
    "/manhua/419/200207.html",
    "/manhua/419/200206.html",
    "/manhua/419/200205.html",
    "/manhua/419/200204.html",
    "/manhua/419/200203.html",
    "/manhua/419/200202.html",
    "/manhua/419/200201.html",
    "/manhua/419/200200.html",
    "/manhua/419/200199.html",
    "/manhua/419/200198.html",
    "/manhua/419/200197.html",
    "/manhua/419/200196.html",
    "/manhua/419/200195.html",
    "/manhua/419/200194.html",
    "/manhua/419/200193.html",
    "/manhua/419/200192.html",
    "/manhua/419/200191.html",
    "/manhua/419/200190.html",
    "/manhua/419/200189.html",
    "/manhua/419/200188.html",
    "/manhua/419/200187.html",
    "/manhua/419/200186.html",
    "/manhua/419/200185.html",
    "/manhua/419/200184.html",
    "/manhua/419/200183.html",
    "/manhua/419/200182.html",
    "/manhua/419/200181.html",
    "/manhua/419/200180.html",
    "/manhua/419/200179.html",
    "/manhua/419/200178.html",
    "/manhua/419/200177.html",
    "/manhua/419/200176.html",
    "/manhua/419/200175.html",
    "/manhua/419/200174.html",
    "/manhua/419/200173.html",
    "/manhua/419/200172.html",
    "/manhua/419/200171.html",
    "/manhua/419/200170.html",
    "/manhua/419/200169.html",
    "/manhua/419/200168.html",
    "/manhua/419/200167.html",
    "/manhua/419/200166.html",
    "/manhua/419/200165.html",
    "/manhua/419/200164.html",
    "/manhua/419/200163.html",
    "/manhua/419/200162.html",
    "/manhua/419/200161.html",
    "/manhua/419/200160.html",
    "/manhua/419/200159.html",
    "/manhua/419/200158.html",
    "/manhua/419/200157.html",
    "/manhua/419/200156.html",
    "/manhua/419/200155.html",
    "/manhua/419/200154.html",
    "/manhua/419/200153.html",
    "/manhua/419/200152.html",
    "/manhua/419/200151.html",
    "/manhua/419/200150.html",
    "/manhua/419/200149.html",
    "/manhua/419/200148.html",
    "/manhua/419/200147.html",
    "/manhua/419/200146.html",
    "/manhua/419/200145.html",
    "/manhua/419/200144.html",
    "/manhua/419/200143.html",
    "/manhua/419/200142.html",
    "/manhua/419/200141.html",
    "/manhua/419/200140.html",
    "/manhua/419/200139.html",
    "/manhua/419/200138.html",
    "/manhua/419/181896.html",
    "/manhua/419/181895.html",
    "/manhua/419/181894.html",
    "/manhua/419/181893.html",
    "/manhua/419/181892.html",
    "/manhua/419/181891.html",
    "/manhua/419/181890.html",
    "/manhua/419/181889.html",
    "/manhua/419/181888.html",
    "/manhua/419/181887.html",
    "/manhua/419/181886.html",
    "/manhua/419/181885.html",
    "/manhua/419/181884.html",
    "/manhua/419/181883.html",
    "/manhua/419/181882.html",
    "/manhua/419/181881.html",
    "/manhua/419/181880.html",
    "/manhua/419/181879.html",
    "/manhua/419/181878.html",
    "/manhua/419/181877.html",
    "/manhua/419/181876.html",
    "/manhua/419/181875.html",
    "/manhua/419/181874.html",
    "/manhua/419/181873.html",
    "/manhua/419/181872.html",
    "/manhua/419/181871.html",
    "/manhua/419/181870.html",
    "/manhua/419/181869.html",
    "/manhua/419/181868.html",
    "/manhua/419/181867.html",
    "/manhua/419/181866.html",
    "/manhua/419/181865.html",
    "/manhua/419/181864.html",
    "/manhua/419/181863.html",
    "/manhua/419/181862.html",
    "/manhua/419/181861.html",
    "/manhua/419/181860.html",
    "/manhua/419/181859.html",
    "/manhua/419/181858.html",
    "/manhua/419/181857.html",
    "/manhua/419/181856.html",
    "/manhua/419/181855.html",
    "/manhua/419/181854.html",
    "/manhua/419/181853.html",
    "/manhua/419/181852.html",
    "/manhua/419/181851.html",
    "/manhua/419/181850.html",
    "/manhua/419/181849.html",
    "/manhua/419/181848.html",
    "/manhua/419/181847.html",
    "/manhua/419/181846.html",
    "/manhua/419/181845.html",
    "/manhua/419/181844.html",
    "/manhua/419/181843.html",
    "/manhua/419/181842.html",
    "/manhua/419/181841.html",
    "/manhua/419/181840.html",
    "/manhua/419/181839.html",
    "/manhua/419/181838.html",
    "/manhua/419/181837.html",
    "/manhua/419/181836.html",
    "/manhua/419/181835.html",
    "/manhua/419/181834.html",
    "/manhua/419/181833.html",
    "/manhua/419/181832.html",
    "/manhua/419/181831.html",
    "/manhua/419/181830.html",
    "/manhua/419/181829.html",
    "/manhua/419/181828.html",
    "/manhua/419/181827.html",
    "/manhua/419/181826.html",
    "/manhua/419/181825.html",
    "/manhua/419/181824.html",
    "/manhua/419/181823.html",
    "/manhua/419/181822.html",
    "/manhua/419/181821.html",
    "/manhua/419/151700.html",
    "/manhua/419/151699.html",
    "/manhua/419/151698.html",
    "/manhua/419/151697.html",
    "/manhua/419/151696.html",
    "/manhua/419/151695.html",
    "/manhua/419/151694.html",
    "/manhua/419/151693.html",
    "/manhua/419/151692.html",
    "/manhua/419/151691.html",
    "/manhua/419/151690.html",
    "/manhua/419/151689.html",
    "/manhua/419/151688.html",
    "/manhua/419/151687.html",
    "/manhua/419/151686.html",
    "/manhua/419/151685.html",
    "/manhua/419/151684.html",
    "/manhua/419/151683.html",
    "/manhua/419/151682.html",
    "/manhua/419/151681.html",
    "/manhua/419/151680.html",
    "/manhua/419/151679.html",
    "/manhua/419/151678.html",
    "/manhua/419/151677.html",
    "/manhua/419/151676.html",
    "/manhua/419/151675.html",
    "/manhua/419/151674.html",
    "/manhua/419/151673.html",
    "/manhua/419/151672.html",
    "/manhua/419/151671.html",
    "/manhua/419/151670.html",
    "/manhua/419/151669.html",
    "/manhua/419/151668.html",
    "/manhua/419/151667.html",
    "/manhua/419/151666.html",
    "/manhua/419/151665.html",
    "/manhua/419/151664.html",
    "/manhua/419/151663.html",
    "/manhua/419/151662.html",
    "/manhua/419/151661.html",
    "/manhua/419/151660.html",
    "/manhua/419/151659.html",
    "/manhua/419/151658.html",
    "/manhua/419/151657.html",
    "/manhua/419/151656.html",
    "/manhua/419/151655.html",
    "/manhua/419/151654.html",
    "/manhua/419/151653.html",
    "/manhua/419/151652.html",
    "/manhua/419/151651.html",
    "/manhua/419/151650.html",
    "/manhua/419/151649.html",
    "/manhua/419/151648.html",
    "/manhua/419/151647.html",
    "/manhua/419/151646.html",
    "/manhua/419/151645.html",
    "/manhua/419/151644.html",
    "/manhua/419/151643.html",
    "/manhua/419/151642.html",
    "/manhua/419/151641.html",
    "/manhua/419/151640.html",
    "/manhua/419/151639.html",
    "/manhua/419/151638.html",
    "/manhua/419/151637.html",
    "/manhua/419/151636.html",
    "/manhua/419/151635.html",
    "/manhua/419/151634.html",
    "/manhua/419/151633.html",
    "/manhua/419/151632.html",
    "/manhua/419/151631.html",
    "/manhua/419/151630.html",
    "/manhua/419/151629.html",
    "/manhua/419/151628.html",
    "/manhua/419/151627.html",
    "/manhua/419/151626.html",
    "/manhua/419/151625.html",
    "/manhua/419/151624.html",
    "/manhua/419/151623.html",
    "/manhua/419/151622.html",
    "/manhua/419/151621.html",
    "/manhua/419/151620.html",
    "/manhua/419/151619.html",
    "/manhua/419/151618.html",
    "/manhua/419/151617.html",
    "/manhua/419/151616.html",
    "/manhua/419/151615.html",
    "/manhua/419/151614.html",
    "/manhua/419/151613.html",
    "/manhua/419/151612.html",
    "/manhua/419/151611.html",
    "/manhua/419/151610.html",
    "/manhua/419/151609.html",
    "/manhua/419/151608.html",
    "/manhua/419/151607.html",
    "/manhua/419/151606.html",
    "/manhua/419/151605.html",
    "/manhua/419/151604.html",
    "/manhua/419/151603.html",
    "/manhua/419/151602.html",
    "/manhua/419/151601.html",
    "/manhua/419/151600.html",
    "/manhua/419/151599.html",
    "/manhua/419/151598.html",
    "/manhua/419/151597.html",
    "/manhua/419/151596.html",
    "/manhua/419/151595.html",
    "/manhua/419/151594.html",
    "/manhua/419/151593.html",
    "/manhua/419/151592.html",
    "/manhua/419/151591.html",
    "/manhua/419/151590.html",
    "/manhua/419/151589.html",
    "/manhua/419/151588.html",
    "/manhua/419/151587.html",
    "/manhua/419/151586.html",
    "/manhua/419/151585.html",
    "/manhua/419/151584.html",
    "/manhua/419/151583.html",
    "/manhua/419/151582.html",
    "/manhua/419/151581.html",
    "/manhua/419/151580.html",
    "/manhua/419/151579.html",
    "/manhua/419/151578.html",
    "/manhua/419/151577.html",
    "/manhua/419/151576.html",
    "/manhua/419/151575.html",
    "/manhua/419/151574.html",
    "/manhua/419/151573.html",
    "/manhua/419/151572.html",
    "/manhua/419/151571.html",
    "/manhua/419/151570.html",
    "/manhua/419/151569.html",
    "/manhua/419/151568.html",
    "/manhua/419/151567.html",
    "/manhua/419/151566.html",
    "/manhua/419/151565.html",
    "/manhua/419/151564.html",
    "/manhua/419/151563.html",
    "/manhua/419/151562.html",
    "/manhua/419/151561.html",
    "/manhua/419/151560.html",
    "/manhua/419/151559.html",
    "/manhua/419/151558.html",
    "/manhua/419/151557.html",
    "/manhua/419/151556.html",
    "/manhua/419/151555.html",
    "/manhua/419/151554.html",
    "/manhua/419/151553.html",
    "/manhua/419/151552.html",
    "/manhua/419/151551.html",
    "/manhua/419/151550.html",
    "/manhua/419/151549.html",
    "/manhua/419/151548.html",
    "/manhua/419/32614.html",
    "/manhua/419/32613.html",
    "/manhua/419/32612.html",
    "/manhua/419/32611.html",
    "/manhua/419/32610.html",
    "/manhua/419/32609.html",
    "/manhua/419/32608.html",
    "/manhua/419/32607.html",
    "/manhua/419/32606.html",
    "/manhua/419/32605.html",
    "/manhua/419/32604.html",
    "/manhua/419/32603.html",
    "/manhua/419/32602.html",
    "/manhua/419/32601.html",
    "/manhua/419/32600.html",
    "/manhua/419/32599.html",
    "/manhua/419/32598.html",
    "/manhua/419/32597.html",
    "/manhua/419/32596.html",
    "/manhua/419/32595.html",
    "/manhua/419/32594.html",
    "/manhua/419/32593.html",
    "/manhua/419/32592.html",
    "/manhua/419/32591.html",
    "/manhua/419/32590.html",
    "/manhua/419/32589.html",
    "/manhua/419/32588.html",
    "/manhua/419/32587.html",
    "/manhua/419/32586.html",
    "/manhua/419/32585.html",
    "/manhua/419/32584.html",
    "/manhua/419/32583.html",
    "/manhua/419/32582.html",
    "/manhua/419/32581.html",
    "/manhua/419/32580.html",
    "/manhua/419/32579.html",
    "/manhua/419/32578.html",
    "/manhua/419/32577.html",
    "/manhua/419/32576.html",
    "/manhua/419/32575.html",
    "/manhua/419/32574.html",
    "/manhua/419/32573.html",
    "/manhua/419/32572.html",
    "/manhua/419/32571.html",

]



async function run(){
    console.log('===开始执行爬虫===')
    for(const item of urls){
        const [id, title] = item;
        const host = `http://mangabz.com/m${id}`;
        console.log('===发起请求===', host)
        const res = await request({
            url: host,
            timeout: 5000,
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.3 Mobile/15E148 Safari/604.1",
                // "Cookie": "__cfduid=d161af501d346187891291234a938f558f451611040011; ComicHistoryitem_zh=History=265,637466651236912874706,108995,1,0,0,0,1&ViewType=0; mangabzimgpage=108995|1:1; MANGABZ_MACHINEKEY=c5044967-7eb8-4986-a485-55bb123d8f275dc"
                // Referer: host
            }
        }).catch(e => {
            console.log('请求超时1', host)
            urls.push([id, title])
            return null
        });

        console.log('接收请求', host)
        if(res){
            const text = res.split('eval(')[1].split(')\n')[0];
            eval('global.func = ' + text);
            eval(global.func);
            let i = 1;
            let arr = [];
            for(let src of newImgs){
                arr.push({
                    url: src,
                    path: `../死亡笔记/${title}/`,
                    fileName: i
                })
                i++;
            }
            await download(arr, {title, parallel: 5})
            console.log(`${title}:完成`);
        }else{
            console.log('请求超时', host)
        }
    }

    console.log('========全部下载完成========')
}

async function other() {
    let i = 116;
    while(i <= 135){
        let j = 1;
        const url = `https://twocomic.com/view/comic_6698.html?ch=${i}-${j}`;
        const {page} = u(j, url);
        const arr = [];
        while(j <= page){
            const url = `https://twocomic.com/view/comic_6698.html?ch=${i}-${j}`;
            const {img} = u(j, url);
            arr.push({
                url: img,
                path: `../怪怪守护神/第${i}话/`,
                fileName: j.toString()
            })
            j++;
        }
        // console.log(arr, i, page)
        const res = await download(arr, {title: `第${i}话`, parallel: 4})
        console.log(res, '===');
        i++;
    }
}

async function a(){
    console.log('===开始执行爬虫===')
    for(const id of urls){
        const host = `http://m.pufei8.com/${id}`;
        console.log('===发起请求===', host)
       
        const res = await request({
            url: host,
            encoding: null,
            timeout: 5000,
            headers: {
             
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.3 Mobile/15E148 Safari/604.1",
                // "Cookie": "__cfduid=d161af501d346187891291234a938f558f451611040011; ComicHistoryitem_zh=History=265,637466651236912874706,108995,1,0,0,0,1&ViewType=0; mangabzimgpage=108995|1:1; MANGABZ_MACHINEKEY=c5044967-7eb8-4986-a485-55bb123d8f275dc"
                // Referer: host
            }
        }).catch(e => {
            console.log('请求超时', host)
            urls.push(id)
            return null
        });

        console.log('接收请求', host)
        if(res){
            const text = Iconv.decode(res, 'gb2312').toString();

            const cp = text.split('cp="')[1].split('";')[0];
            const title = text.split('<a href="/manhua/419/">一人之下</a>')[1].split('</h1>')[0];
            const newImgs = eval(eval(base64decode(cp).slice(4)));
            let i = 1;
            let arr = [];
            for(let src of newImgs){
                arr.push({
                    url: `http://res.img.youzipi.net/${src}`,
                    path: `../一人之下/${title}/`,
                    fileName: i
                })
                i++;
            }
            await download(arr, {title, parallel: 5})
            console.log(`${title}:完成`);
        }else{
            console.log('请求超时', host)
        }
    }

    console.log('========全部下载完成========')
}

a().then()