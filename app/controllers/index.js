const axios = require('axios');

const u = require('../../u');


axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
 
//在API文件中
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // If config does not exist or the retry option is not set, reject
    if(!config || !config.retry) return Promise.reject(err);
    
    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;
    
    // Check if we've maxed out the total number of retries
    if(config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }
    
    // Increase the retry count
    config.__retryCount += 1;
    
    // Create new promise to handle exponential backoff
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });
    
    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
        return axios(config);
    });
});

const urls = {
  "158471": "第181話",
"156660": "第180話",
"154242": "第179話",
"153207": "第178話",
"153100": "第177話",
"151498": "第176話",
"150606": "第175話",
"149680": "第174話",
"148798": "第173話",
"147815": "第172話",
"146842": "第171話",
"145851": "第170話",
"144970": "第169話",
"144103": "第168話",
"143276": "第167話",
"141544": "第166話",
"140598": "第165話",
"139739": "第164話",
"138844": "第163話",
"137828": "第162話",
"134540": "第161話",
"133371": "第160話",
"131411": "第159話",
"130420": "第158話",
"129383": "第157話",
"128545": "第156話",
"126828": "第155話",
"125902": "第154話",
"124404": "第153話",
"123035": "第152話",
"121127": "第151話",
"120295": "第150話",
"119393": "第149話",
"116580": "第148話",
"114943": "第147話",
"114134": "第146話",
"113464": "第145話",
"112906": "第144話",
"112431": "第143話",
"110304": "第142話",
"109197": "第141話",
"109196": "第140話",
"109195": "第139話",
"109194": "第138話",
"109193": "第137話",
"109192": "第136話",
"109191": "第135話",
"109190": "第134話",
"109189": "第133話",
"109188": "第132話",
"109187": "第131話",
"109186": "第130話",
"109185": "第129話",
"109184": "第128話",
"109183": "第127話",
"109182": "第126話",
"109181": "第125話",
"109180": "第124話",
"109131": "第123話",
"109130": "第122話",
"109129": "第121話",
"109128": "第120話",
"109127": "第119話",
"109126": "第118話",
"109125": "第117話",
"109124": "第116話",
"109123": "第115話",
"109122": "第114話",
"109121": "第113話",
"109120": "第112話",
"109119": "第111話",
"109118": "第110話",
"109117": "第109話",
"107918": "第108話",
"107917": "第107話",
"107916": "第106話",
"107915": "第105話",
"109101": "第104話",
"109100": "第103話",
"109099": "第102話",
"109098": "第101話",
"109097": "第100話",
"109096": "第99話",
"109095": "第98話",
"109094": "第97話",
"109093": "第96話",
"109092": "第95話",
"109091": "第94話",
"109090": "第93話",
"109089": "第92話",
"109088": "第91話",
"109087": "第90話",
"109086": "第89話",
"109085": "第88話",
"109084": "第87話",
"109083": "第86話",
"109082": "第85話",
"109081": "第84話",
"109080": "第83話",
"109079": "第82話",
"109078": "第81話",
"109077": "第80話",
"109076": "第79話",
"109075": "第78話",
"109074": "第77話",
"109073": "第76話",
"109072": "第75話",
"109071": "第74話",
"109070": "第73話",
"109069": "第72話",
"109068": "第71話",
"109067": "第70話",
"109066": "第69話",
"109065": "第68話",
"109064": "第67話",
"109063": "第66話",
"109062": "第65話",
"109061": "第64話",
"109060": "第63話",
"109059": "第62話",
"109058": "第61話",
"109057": "第60話",
"109053": "第59話",
"109052": "第58話",
"109051": "第57話",
"109049": "第56話",
"109048": "第55話",
"109047": "第54話",
"109046": "第53話",
"109045": "第52話",
"109044": "第51話",
"109043": "第50話",
"109042": "第49話",
"109041": "第48話",
"109040": "第47話",
"109039": "第46話",
"109038": "第45話",
"109037": "第44話",
"109036": "第43話",
"109035": "第42話",
"109034": "第41話",
"109033": "第40話",
"109032": "第38話",
"109031": "第37話",
"109030": "第36話",
"109029": "第35話",
"109028": "第34話",
"109027": "第33話",
"109026": "第32話",
"109025": "第31話",
"109024": "第30話",
"109023": "第29話",
"109022": "第28話",
"109021": "第27話",
"109020": "第26話",
"109019": "第25話",
"109018": "第24話",
"109017": "第23話",
"109016": "第22話",
"109015": "第21話",
"109014": "第20話",
"109013": "第19話",
"109012": "第18話",
"109011": "第17話",
"109010": "第16話",
"109009": "第15話",
"109008": "第14話",
"109007": "第13話",
"109006": "第12話",
"109005": "第11話",
"109004": "第10話",
"109003": "第9話",
"109002": "第8話",
"109001": "第7話",
"109000": "第6話",
"108999": "第5話",
"108998": "第4話",
"108997": "第3話",
"108996": "第2話",
"108995": "第1話",
}

module.exports = (app) => {
  return {
    async index() {
      const { ctx } = this;
      for(const url of urls){
        const host = `http://www.qiman6.com/${url}`;
        await axios({
          url: host,
          method: 'get',
          headers: {
            Referer: host
          }
        }).then(async (res) => {
          const title = res.data.split('<h1 class="chaptername_title">')[1].split('</h1>')[0];
          const text = res.data.split('eval(')[1].split(')\n')[0];
          eval('global.func = ' + text);
          eval(global.func);

          let i = 1;
          let arr = [];
          for(let src of newImgs){
            arr.push({
              url: src,
              path: `../石纪元/${title}/`,
              page: i
            })
            i++;
          }
          // console.log(arr, i, newImgs.length);
          await ctx.service.main.download(arr, title, newImgs.length, 20)
          console.log(`${title}:完成`);
          console.log(url)
        })
      }
      ctx.body = ''
    },

    async other() {
      const { ctx } = this;
      let i = 17;
      while(i <= 180){
        let j = 1;
        const url = `https://twocomic.com/view/comic_14898.html?ch=${i}-${j}`;
        const {page} = u(j, url);
        const p = [];
        const arr = [];
        while(j <= page){
          const url = `https://twocomic.com/view/comic_14898.html?ch=${i}-${j}`;
          const {img} = u(j, url);
          arr.push({
            url: img,
            path: `../石纪元/第${i}话/`,
            page: j
          })
          j++;
        }
        await ctx.service.main.download(arr, i, page, 10)
        i++;
      }
      
      ctx.body = ''
    },


    async a() {
      const { ctx } = this;
      for(const id in urls){
        let status = true;
        let page = 1;
        let arr = [];
        let title = urls[id]

        while(status){
          const host = `http://mangabz.com/m${id}/chapterimage.ashx?cid=${id}&page=${page}&v=${+new Date()}`;
          const res = await axios({
            url: host,
            method: 'get',
            timeout: 1000,
            headers: {
              Referer: `http://mangabz.com/m${id}/`,
              Host: 'mangabz.com',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
              Cookie: '__cfduid=de9e969b83d64cb124211ec73809a03721610724095; frombot=1; MANGABZ_MACHINEKEY=dcda9e04-bb9f-4341-9f99-4dee176e279f; UM_distinctid=1771968bde5aa6-08ea454eac69be-31346d-1aeaa0-1771968bde67ec; CNZZDATA1278095942=1866747683-1611037033-%7C1611037033; CNZZDATA1278515277=570053534-1611035909-%7C1611035909; mangabzcookieenabletest=1; CNZZDATA1278095929=450954999-1611033749-%7C1611039149; mangabzimgcooke=158471%7C18; ComicHistoryitem_zh=History=265,637466651170735519,158471,3,0,0,0,184&ViewType=0; readhistory_time=1-265-158471-3; image_time_cookie=158471|637466651170825604|3; mangabzimgpage=158471|3:1; firsturl=http%3A%2F%2Fmangabz.com%2Fm158471%2F'
            }
          }).catch(e => {console.log(e)})
          console.log(host)
          const imgs = eval(res.data)
          const total = imgs.length;
          const max = imgs[total - 1].match(/(\w+)_\w+.jpg/)[1];
          if(page > max){
            break;
          }

          arr.push(...imgs.map((url) => {
            return {
              url,
              path: `../石纪元/${title}/`,
              page: page++
            }
          }))
        }

        console.log(arr)
        await ctx.service.main.download(arr, title, page - 1, 10)
      }
      ctx.body = '完成'
    },
  };
};
