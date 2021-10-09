<template>
	<view>
		<button  open-type="share">添加销售</button>
		<view class="business" v-for="(item,i) in list" :key="i">
			<view class="top">
				<image :src="item.headimg" mode="widthFix"></image>
				<text>{{item.name}}·{{item.mposition}}</text>
			</view>
			<view class="bom">
				<button @click="del(item.id)">删除</button>
				<button @click="chakan(item.id)">查看</button>
			</view>
		</view>
	</view>
</template>

<script>
	import my from "../../../utils/request.js";
	export default {
		data() {
			return {
				list:[],
				id:0,
			}
		},
		methods: {
			del(id){
				let param="mpid="+this.id+"&seller_id="+id;
				let that=this;
				console.log(id)
				my.getData("mobile/mipianadmin/del_seller",param,getApp().globalData.key).then(res=>{
					uni.showToast({
						title:res.data.message,
						icon:"none",
						success() {
							that.getList(that.id);
						}
					})
				})
			},
			xiugai(){
				uni.redirectTo({
					url:"./xiugai/xiugai"
				})
			},
			chakan(id){
				uni.setStorage({
					key:"id",
					data:id
				})
				uni.switchTab({
				url:"../business/business?id="+id,
				})
			},
			getList(id){
				my.getData("mobile/mipianadmin/my_seller","mpid="+id,getApp().globalData.key).then(res=>{
					console.log(res)
					if(res.data.result.length>0){
						this.list=res.data.result;
					}else{
						uni.showToast({
							title:"暂无销售",
							icon:"none"
						})
					}
				})
			},
			toc(){
				// uni.redirectTo({
				// 	url:"../../createbusiness/createbusiness?x=0&id="+this.id,
				// })
			}
		},
		onLoad(options) {
			this.id=options.id;
			this.getList(options.id);
			
		},
		onShareAppMessage(res) {
			console.log(this.id)
			return {
				title:"快易销智能电子画册!",
				path:"pages/createbusiness/createbusiness?x=0&friend="+this.id,
			}
		},
	}
</script>

<style lang="less" scoped>
view{
	width: 750rpx;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	background: #F5F6F8;
	.business{
		width: 686rpx;
		height: 236rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 30rpx;
		.top{
			width: 100%;
			height: 118rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			background: #FFFFFF;
			padding-left: 34rpx;
			image{
				width: 80rpx;
			}
			text{
				width: 196rpx;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #111111;
				line-height: 42rpx;
				margin-left: 32rpx;
			}
		}
		.bom{
			width: 100%;
			height: 118rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			align-items: center;
			background: #FFFFFF;
			button:nth-of-type(1),button:nth-of-type(4){
				width: 110rpx;
				height: 64rpx;
				background: rgba(77, 98, 107, 0.1);
				border-radius: 8rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #4D626B;
				margin: 0;
			}
			button:nth-of-type(2),button:nth-of-type(5){
				width: 110rpx;
				margin: 0;
				height: 64rpx;
				background: rgba(215, 167, 97, 0.1);
				border-radius: 8rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #D7A761;
			}
			button:nth-of-type(3){
				width: 110rpx;
				margin: 0;
				background: rgba(188, 64, 64, 0.1);
				border-radius: 8rpx;
				text-align: center;
				line-height: 64rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #BC4040;
			}
		}
	}
}
</style>
