<template>
	<view class="a">
		<view class="header">
			<image :src="gs.mlogo" mode="widthFix"></image>
		</view>
		<view class="main">
			<text>公司名称：</text>
			<text>{{gs.mname}}</text>
		</view>
		<view class="main">
			<text>口号：</text>
			<text>{{gs.mdes}}</text>
		</view>
		<view class="main">
			<text>联系人：</text>
			<text>{{gs.mboss}}</text>
		</view>
		<view class="main">
			<text>电话：</text>
			<text>{{gs.mtel}}</text>
		</view>
		<view class="main">
			<text>公司地址：</text>
			<text>{{gs.gcaddress}}{{gs.maddress}}</text>
		</view>
	</view>

</template>

<script>
	import my from "../../utils/request.js"
	export default {
		data() {
			return {
				gs:{},
				id:0,
			}
		},
		methods: {
			
		},
		onLoad(options) {
			this.id=7;
			if(options.id){
				this.id=options.id;
			}
			
			my.getData("mobile/Minishop/shopinfo","mid="+this.id,getApp().globalData.key).then(res=>{
				this.gs=res.data.result.info;
			})
		}
	}
</script>

<style lang="less" scoped>
.a{
	width: 750rpx;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	flex-wrap: wrap;
	background-color: #f5f6f8;
	.header{
		width: 686rpx;
		margin: 0rpx;
		margin-top: 32rpx;
		image{
			width: 100%;
		}
	}
	.main{
		width: 686rpx;
		height: 50rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin-top: 32rpx;
		text{
			width: 160rpx;
			height: 42rpx;
			font-size: 15px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #111111;
			line-height: 21px;
		}
		text:last-of-type{
			width: 400rpx;
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #111111;
			line-height: 42rpx;
		}
	}
}
</style>
