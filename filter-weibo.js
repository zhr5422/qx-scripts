/*
Quantumult X Script
目的：过滤掉 datas 数组中 type === 1 && adType === '广告' 的元素
*/

let body = $response.body;
// 1) 字符串哨兵：若无“广告”标记，直接返回
  if (!body.includes('"adType":"广告"')) {
    return $done({}); // 不改 body，减少 parse 开销
  }
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
