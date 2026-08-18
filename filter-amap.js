let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (
    obj.data &&
    obj.data.modules &&
    Object.prototype.hasOwnProperty.call(
      obj.data.modules,
      "commonGoodsShelf"
    )
  ) {
    obj.data.modules.commonGoodsShelf = null;
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("amap_poi.js parse error: " + e);
}

$done({ body });
