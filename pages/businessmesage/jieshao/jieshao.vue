<template>
	<view>
		<textarea placeholder="请填写介绍内容" v-model="t"></textarea>
		<button type="default" @click="save">保存修改</button>
	</view>
</template>

<script>
	import my from "../../../utils/request.js";
	export default {
		data() {
			return {
				t:"",
				id:0,
			}
		},
		methods: {
			save(){
				// let param=my.getRSA("mpid="+this.id);
			my.edit("mobile/mipianadmin/edit_introduce_do","mpid="+this.id,this.t,getApp().globalData.key).then(res=>{
				if(res.data.success){
					uni.showToast({
						title:"修改成功",
						icon:"none",
						success() {
							setTimeout(function(){
								var pages = getCurrentPages();
								var prevPage = pages[pages.length - 2];
								uni.navigateBack({
									url:"../businessmesage"
								})
							},1000);
						}
					})
				}else{
					uni.showToast({
						title:"保存失败,"+res.data.message,
						icon:"none"
					})
				}
			})
			// 	uni.request({
			// 		url:"https://mp.gzcywx.com/mobile/mipianadmin/edit_introduce_do",
			// 		data:{
			// 			sign:param,
			// 			introduce:this.t
			// 		},
			// 		method:"POST",
			// 		timeout:'3000',
			// 		header: {
			// 			'content-type': 'application/json' ,// 默认值
			// 			"token":getApp().globalData.key,
			// 		},
			// 		fail(res) {
			// 			console.log(res)
			// 		},
			// 		success(res) {
			// 			if(res.data.success){
			// 				uni.showToast({
			// 					title:"保存成功",
			// 					icon:"none"
			// 				})
			// 			}else{
			// 				uni.showToast({
			// 					title:res.data.message,
			// 					icon:"none"
			// 				})
			// 			}
			// 		},
			// 	})
			
			}
		},
		onLoad(options) {
			this.id=options.id;
			my.getData("mobile/mipianadmin/edit_introduce","mpid="+this.id,getApp().globalData.key).then(res=>{
			console.log(res)
				if(res.data.success){
					this.t=res.data.result;
				}
			})
		}
	}
</script>

<style lang="less" scoped>
view{
	width: 375px;
	height:100vh;
	background: #F5F6F8;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	textarea{
		width: 750rpx;
		height: 480rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #111;
		line-height: 42rpx;
		padding: 32rpx;
	}
	button{
		width: 686rpx;
		height: 96rpx;
		background: #BC4040;
		border-radius: 12rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 96rpx;
		text-align: center;
	}
}
</style>
