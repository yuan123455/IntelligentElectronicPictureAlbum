<template>
	<view>
		<navigator class="header" hover-class="none" :url="'../../createbusiness/createbusiness?a=1&id='+id">
			<text>修改基本信息</text>
			<image src="../../../static/image/youjiantou.png" mode="widthFix"></image>
		</navigator>
		<navigator class="header" hover-class="none" :url="'../jieshao/jieshao?id='+id">
			<text>修改介绍</text>
			<image src="../../../static/image/youjiantou.png" mode="widthFix"></image>
		</navigator>
		<navigator class="header" hover-class="none" :url="'../tupian/tupian?id='+id">
			<text>修改介绍图片</text>
			<image src="../../../static/image/youjiantou.png" mode="widthFix"></image>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
			}
		},
		methods: {
			
		},
		onLoad(options) {
			this.id=options.id;
		}
	}
</script>

<style lang="less" scoped>
view{
	.header{
		width: 750rpx;
		height: 116rpx;
		background: #FFFFFF;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 32rpx;
		text{
			width: 180rpx;
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #111111;
			line-height: 42rpx;
		}
		image{
			width: 32rpx;
		}
	}
}
</style>
