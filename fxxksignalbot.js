/*
[mitm]
hostname = www.sweerui.love
[rewrite_local]
https://www.sweerui.love:1123/api/results url script-request-header https://raw.githubusercontent.com/FaiChou/qx/refs/heads/main/fxxksignalbot.js
*/

function generateTimestampUUID() {
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 1000000000).toString(16);
  const timestampHex = timestamp.toString(16).padStart(12, '0');
  return `${timestampHex.substring(0, 8)}-${timestampHex.substring(8, 12)}-${randomPart.substring(0, 4)}-${randomPart.substring(4, 8)}-${randomPart.substring(8, 12) || randomPart.padEnd(12, '0')}`;
}
var modifiedHeaders = $request.headers;
modifiedHeaders['X-Device-Identifier'] = generateTimestampUUID();
$done({ headers: modifiedHeaders });

