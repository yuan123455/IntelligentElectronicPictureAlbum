<template>
	<view>
		<view class="select">
			<view class="right">
					<image src="../../static/image/av.png" mode="widthFix"></image>
				</view>
			<view class="content">
				<view class="neirong">
					<image src="../../static/image/mingcheng.png" mode="widthFix"></image>
					<text>南康斑斓家具有限欧根纱</text>
				</view>
				<view class="neirong">
					<image src="../../static/image/dizhi.png" mode="widthFix"></image>
					<text>江西省赣州市南康区家具有限公司</text>
				</view>
				<view class="neirong">
					<image src="../../static/image/dianhua.png" mode="widthFix"></image>
					<text>151 0283 8739</text>
				</view>
			</view>
			<view class="bom">
				<button>删除记录</button>
				<button>查看网站</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
	background-color: #f5f6f8;
	.select{
		width: 690rpx;
		height:400rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(32, 3, 3, 0.13);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 30rpx;
		padding: 30rpx;
		box-sizing: border-box;
			.right{
				width: 200rpx;
				height: 200rpx;
				background-color: #FFFFFF;
				image{
					width:120rpx ;
				}
			}
		.content{
			width: 430rpx;
			height: 200rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: start;
			align-items: flex-start;
			background-color: #FFFFFF;
			.neirong{
				width:100% ;
				height: 40rpx;
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				background-color: #FFFFFF;
				
				image{
					width: 40rpx;
				}
				text{
					width:440rpx;
					height: 36rpx;
					font-size: 26rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #555555;
					line-height: 36rpx;
					margin-left:4rpx;
				}
			}
		}
		.bom{
			width: 686rpx;
			height: 100rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			background-color: #FFFFFF;
			button{
				width: 200rpx;
				height: 80rpx;
				background: rgba(77, 98, 107, 0.1);
				border-radius: 4px;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #4D626B;
				line-height: 80rpx;
			}
			button:nth-of-type(2){
				width: 200rpx;
				height: 80rpx;
				background: rgba(188, 64, 64, 0.1);
				border-radius: 8rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #BC4040;
				line-height: 80rpx;
			}
		}
	}
	
}
</style>
