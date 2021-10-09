<template>
	
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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	.header{
		width: 750rpx;
		height: 280rpx;
		background: linear-gradient(180deg, #3C3533 0%, #5C5351 100%);
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		.first{
			position: absolute;
			width: 100%;
		}
		.two{
			width: 112rpx;
			border-radius: 50%;
			margin-left:48rpx ;
		}
		text{
			width:300rpx;
			height: 48rpx;
			font-size: 34rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #FBE0B0;
			line-height: 48rpx;
			margin-left: 32rpx;
		}
	}
	.blur{
		width: 750rpx;
		height: 12rpx;
		background: linear-gradient(90deg, #DFB25F 0%, #FEE495 49%, #D8B460 100%);
		box-shadow: 0rpx -4rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);
	}
	.content{
		width: 750rpx;
		display: flex;
		flex-wrap: wrap;
		background-color: #F5F6F8;
		justify-content: center;
		align-items: flex-start;
		padding-bottom: 32rpx;
		.header{
			width: 686rpx;
			height:116rpx;
			background: #FFFFFF;
			border-radius: 4px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			border-top: 2rpx solid #DDDDDD;
			margin-top: 32rpx;
			box-sizing: border-box;
			.left{
					width:500rpx ;
					height: 116rpx;
					display: flex;
					flex-wrap: nowrap;
					align-items: center;
					justify-content: sta;
					image{
						width: 40rpx;
						box-sizing: border-box;
					}
					text{
						width: 300rpx;
						height: 42rpx;
						font-size: 30rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #111111;
						line-height: 42rpx;
						text-align: left;
						margin-left: 15rpx;
					}
				}
				image{
					width: 64rpx;
				}
		}
		.header:nth-of-type(2){
			margin-top: 0rpx;
		}
		.header:nth-of-type(5){
			margin-top: 0rpx;
		}
		.header:nth-of-type(7){
			margin-top: 0rpx;
		}
		.header:nth-of-type(1),.header:nth-of-type(3),.header:nth-of-type(4),.header:nth-of-type(6),.header:nth-of-type(8){
			border: none;
		}
	}
	
}
</style>

