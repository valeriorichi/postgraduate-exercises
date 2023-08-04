module.exports = /^(http(s){0,1}:\/\/){0,1}(www\.){0,1}\w+\.\w{2,3}/; // /REGEX_HERE/

const webAddressRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;

const isWebAddress = (str) => webAddressRegex.test(str);


const address1 = "https://www.example.com";
const address2 = "http://subdomain.example.co.uk/page?param=value";
console.log(isWebAddress(address1));
console.log(isWebAddress(address2));