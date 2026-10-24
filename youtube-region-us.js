(function () {
  const request = $request;
  if (!request || typeof request.url !== "string") {
    $done({});
    return;
  }

  const prefix = "https://youtubei.googleapis.com/youtubei/v1/";
  if (request.url.indexOf(prefix) !== 0) {
    $done({});
    return;
  }

  const queryAt = request.url.indexOf("?");
  const endpoint = (queryAt < 0 ? request.url.slice(prefix.length) : request.url.slice(prefix.length, queryAt));
  const supported = ["browse", "next", "player", "search", "reel/reel_watch_sequence", "guide", "account/get_setting", "get_watch"];
  if (supported.indexOf(endpoint) < 0) {
    $done({});
    return;
  }

  let url = request.url;
  if (queryAt < 0) {
    url += "?gl=US";
  } else {
    const base = request.url.slice(0, queryAt);
    const params = request.url.slice(queryAt + 1).split("&").filter(function (item) {
      return item.split("=", 1)[0] !== "gl";
    });
    params.push("gl=US");
    url = base + "?" + params.join("&");
  }

  const result = { url: url };
  if (typeof request.body === "string" && request.body.trim().charAt(0) === "{") {
    try {
      const payload = JSON.parse(request.body);
      if (payload.context && payload.context.client && typeof payload.context.client === "object") {
        payload.context.client.gl = "US";
        result.body = JSON.stringify(payload);
      }
    } catch (e) {
      // Keep unsupported request bodies unchanged.
    }
  }

  $done(result);
})();
