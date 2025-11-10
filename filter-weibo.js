/*
Quantumult X Script
目的：过滤掉 datas 数组中 type === 1 && adType === '广告' 的元素
*/

let body = $response.body;
if (body) {
  try {
    let json = JSON.parse(body);

    // 若 datas 存在且为数组
    if (Array.isArray(json.datas)) {
      json.datas = json.datas.filter(item => !(item.type === 1 && item.adType === '广告'));
    }

    body = JSON.stringify(json);
  } catch (e) {
    console.log('JSON parse error: ' + e);
  }
}

$done({ body });
