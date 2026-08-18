let body = $response.body;

try {
  const obj = JSON.parse(body);
  const modules = obj?.data?.modules;

  [
    "commonGoodsShelf",
    "nearbyRecommendModule",
    "quickLinksPortal",
    "surroundHouseTab",
    "poiDetailWaterFeed",
    "poiDetailWaterFeedTitle"
  ].forEach(key => {
    if (modules?.[key] !== undefined) {
      modules[key] = {};
    }
  });

  body = JSON.stringify(obj);
} catch (e) {
  console.log("amap_poi.js parse error: " + e);
}

$done({ body });
