import RSA from "./wx_rsa.js";
var ajaxTime = 0;
//需要加密的请求
let getData = function(URL, param, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	console.log(data)
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
// 获取加密的内容
let getRSA = function(param) {
	let publickey = `-----BEGIN PUBLIC KEY-----
	MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
	b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
	MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
	Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
	3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
	sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
	9wIDAQAB
	-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	return encStr;
};
//一个加密，一个不加密
let creator = function(URL, param, av, name) {
	return new Promise((resolve, reject) => {
		wx.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: param,
				avatar: av,
				nickname: name,
			},
			"method": "POST",
			header: {
				'content-type': 'application/json', // 默认值
			},
			fail(res) {
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
//上传
let used = function(URL, param, img, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				imgsrc: img,
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
//保存
let save = function(URL, param, img, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				imgurl: img,
			},
			method: "POST",
			timeout: '3000',
			header: {
				'content-type': 'application/json', // 默认值
				token: token,
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
let edit = function(URL, param, img, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				introduce: img,
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
//创建名片
let crea = function(URL, param, name, company, phone, address, wx_number, mposition, mail, joinpasswd, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				name: name,
				company: company,
				phone: phone,
				wxnumber: wx_number,
				address: address,
				mposition: mposition,
				mail: mail,
				joinpasswd: joinpasswd,
				bannerimgs:"",
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
//分页
var load = function(URL, param, pag, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	console.log(data)
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				page: pag,
				pagesize: "10"
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
var huace = function(URL, param, name, phone, mposition, mail, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				name: name,
				tel: phone,
				address: mposition,
				ssq: mail,
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
var fenxiao = function(URL, param, fxname, name, phone, address, ssq, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				fxname: fxname,
				name: name,
				tel: phone,
				address: address,
				ssq: ssq,
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
var sheng = function(URL, id, fxname, name, tel, select, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
	MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
	b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
	MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
	Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
	3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
	sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
	9wIDAQAB
	-----END PUBLIC KEY-----`;
	let data = "sign=0";
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				id: id,
				fxname: fxname,
				name: name,
				tel: tel,
				status: select,
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
let xioashou =function(URL, param, name, company, phone, address, wx_number, mposition, mail, joinpasswd, token) {
	let publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqRbKPvfJQ/qQDigokX2Z
b6v6R7XAQhH0CvUjcs6NnE0fsNaJYPzOZIEVlRgT5ItqmimB37qTCwh9txglmPNW
MtjCX6/SkMBq6W4oo3bOJ6Lukjoy3a6jcB1JJ68if8m4SlwQr6lu9TQEJK99OYfU
Y5JvjDXuNhXCqu5LNxswr4rKANSUntaHowtjdnOuRh8uk+U/fIZ0ZoD4hnpC8a41
3D2YbOcJYdijXZjyal1pViUvxv1br+m2+n197DV+AtdG/NIJEEXnjsRaknOA7aoX
sLpfIYiGqMALhNBSfLkUA6ckpLJbj3L/jNa5eCCd7fSvoO3RfzosRarsNW0yQjXC
9wIDAQAB
-----END PUBLIC KEY-----`;
	let data = param;
	var encrypt_rsa = new RSA.RSAKey();
	encrypt_rsa = RSA.KEYUTIL.getKey(publickey);
	let encStr = encrypt_rsa.encrypt(data)
	encStr = RSA.hex2b64(encStr);
	ajaxTime++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://mp.gzcywx.com/" + URL, //仅为示例，并非真实的接口地址
			data: {
				sign: encStr,
				name: name,
				company: company,
				phone: phone,
				wxnumber: wx_number,
				address: address,
				mposition: mposition,
				mail: mail,
				joinpasswd: joinpasswd,
				bannerimgs:"",
			},
			method: "POST",
			timeout: '3000',
			header: {
				// 'content-type': 'application/json' ,// 默认值
				'content-type': 'application/x-www-form-urlencoded',
				token: token,
				// token:"f9efbd56d814a412df4c648ba81e3576"
			},
			fail(res) {
				console.log(res)
				reject(res);
			},
			success(res) {
				resolve(res);
			},
		});
	});
};
	module.exports = {
		getData,
		getRSA,
		creator,
		used,
		save,
		edit,
		crea,
		load,
		huace,
		fenxiao,
		sheng,
		xioashou
	}
