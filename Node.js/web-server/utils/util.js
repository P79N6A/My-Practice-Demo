const response = (ctx, status = 200, body, headers = { 'Content-Type': 'application/json' }) => {
  ctx.status = status;
  ctx.set(headers);
  ctx.body = body;
};

// 二次封装 reponse：200 状态
const responseWith200 = (ctx, msg = '操作成功', data = {}) => {
  response(ctx, 200, {
    success: true,
    msg,
    code: 200,
    ...data
  });
}

// 二次封装 response：400 状态
const responseWith400 = (ctx, msg = '参数错误') => {
  response(ctx, 400, {
    success: false,
    msg,
    code: 400,
  });
}

// 封装 403 状态
const responseWith403 = (ctx, msg = '错误') => {
  response(ctx, 403, {
    success: false,
    msg,
    code: 403,
  });
}

// 封装 404 状态
const responseWith404 = (ctx, msg = '错误') => {
  response(ctx, 404, {
    success: false,
    msg,
    code: 404,
  });
}

// 判断是否是数字
const isNumber = (num) => {
  console.log(`类型：${typeof num}`);
  return typeof num === 'number' && !Number.isNaN(num);
}

const isArray = (arr) => {
  return Array.isArray(arr);
}


module.exports = {
  response,
  responseWith200,
  responseWith400,
  responseWith403,
  responseWith404,
  isNumber,
  isArray,
}