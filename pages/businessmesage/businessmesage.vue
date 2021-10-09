<template>
	<view>
		<view class="business" v-for="(item,i) in list" :key="i">
			<view class="top">
				<image :src="item.headimg" mode="widthFix"></image>
				<text>{{item.name}}·{{item.mposition}}</text>
			</view>
			<view class="bom">
				<button @click="del(item.id)">删除</button>
				<button @click="xiugai(item.id)">修改</button>
				<button @click="chakan(item.id)">查看</button>
				<button @click="haoyou(item.id)">好友</button>
				<button @click="xiaoshou(item.id)">销售</button>
			</view>
		</view>
	</view>
</template>

<script>
	import my from "../../utils/request.js";
	export default {
		data() {
			return {
				list:[],
				id1:0,
			}
		},
		methods: {
			del(id){
				console.log(id)
				my.getData("mobile/mipianadmin/del_mp","mpid="+id,getApp().globalData.key).then(res=>{
					if(res.data.success){
						uni.showToast({
							title:"删除成功",
							icon:"none"
						})
						this.getList();
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						})
					}
				})
			},
			xiugai(id){
				uni.navigateTo({
					url:"./xiugai/xiugai?id="+id,
				})
			},
			chakan(id){
					// getApp().globalData.id=id;
					uni.setStorage({
						key:"id",
						data:id
					})
				uni.switchTab({
					url:"../business/business",
				})
			},
			haoyou(id){
				uni.navigateTo({
					url:"haoyou/haoyou?id="+id,
				})
			},
			xiaoshou(id){
				uni.navigateTo({
					url:"xiaoshou/xiaoshou?id="+id,
				})
			},
			getList(){
				console.log("token",getApp().globalData.key);
				my.getData("mobile/mipianadmin/mplist","sign=0",getApp().globalData.key).then(res=>{
					if(res.data.success){
						this.list=res.data.result;
						console.log("名片不能管理",this.list,res)
					}
				})
			},
		},
		onLoad() {
			this.getList();
		},
		onShow() {
			this.getList()
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
