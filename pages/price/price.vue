<template>
	<view>
		<input type="number" v-model="phone" placeholder="请输入手机号" @blur="ph"/>
		<button @click="map">确定</button>
	</view>
</template>

<script>
	import my from "../../utils/request.js";
	import bmap from "../../utils/bmap-wx.min.js"
	export default {
		data() {
			return {
				id:0,
				phone:"",
				sp:0,
				im:"",
			}
		},
		methods: {
			ph(){
				let tel=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;//11位手机号码正则
					if(this.phone==""){
						uni.showToast({
							title:"请输入手机号后重试",
							icon:"none"
						})
					}else if(!tel.test(this.phone)){
						uni.showToast({
							title:"请输入正确的手机号码",
							icon:"none"
						})
						this.phone="";
					}
			},
			wen(e){
				let sign=my.getRSA("sign=0");
				uni.request({
					url:"https://mp.gzcywx.com/mobile/Mipianadmin/chat_price",
					data:{
						"mid":this.id,
						"cpid":this.sp,
						"cppic":this.im,
						"mobile":this.phone,
						"uname":getApp().globalData.name,
						"location":e,
						"sign":sign
					},
					method:"POST",
					timeout:'3000',
					header: {
						// 'content-type': 'application/json' ,// 默认值
						'content-type': 'application/x-www-form-urlencoded',
						token:getApp().globalData.key,
						// token:"f9efbd56d814a412df4c648ba81e3576"
					},
					fail(res) {
						console.log(res)
					},
					success(res) {
						
						uni.showToast({
							title:res.data.message,
							icon:"none",
						})
					},
				})
			},
			map(){
				if(this.phone==""){
					uni.showToast({
						title:"请先填写手机号码以便厂家联系",
						icon:"none"
					});
					return;
				}
				uni.showLoading({
					title:"信息正在提交，请稍等",
					icon:"none"
				})
				let that=this;
				var map=new bmap.BMapWX({
					ak:"3MZuq60GLl0BQwMLkCoRUgnj71IxuCPG"
				})
				wx.getLocation({
					success(res1) {
						map.regeocoding({
						                    location: res1.latitude + ',' + res1.longitude,
						                    success: function (res) {
												let dizhi=res.originalData.result.sematic_description;
						                        console.log("地址解析出来了",dizhi)
												that.wen(dizhi);
												uni.hideLoading();
											},
						                    fail: function (err) {
						                        wx.showToast({
						                            title: '位置获取失败，无法咨询',
													icon:"none"
						                        })
						                    },
						                });
					}
				})
						
			}
		},
		onLoad(options) {
			this.id=options.id;
			this.sp=options.sp;
			this.im=options.im;
		}
	}
</script>

<style lang="less" scoped>
view{
	width: 750rpx;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	background-color: #f5f6f8;
	align-content: center;
	input{
		width: 600rpx;
		height: 50rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #111111;
		line-height:50rpx;
		margin-top: 30rpx;
	}
	button{
		width: 600rpx;
		height: 96rpx;
		background: #BC4040;
		border-radius: 12rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 96rpx;
		margin-top: 120rpx;
	}
}
</style>
