<template>
	<view>
		<view class="content">
			<view class="header">
				<view>
					<text>厂家姓名</text>
					<input type="text" placeholder="厂家" v-model="name" />
				</view>
			</view>
			<view class="header">
				<view>
					<text>厂家电话</text>
					<input type="text" placeholder="厂家电话" v-model="phone" />
				</view>
			</view>
			<view class="header">
				<view>
					<text>厂家名称</text>
					<input type="text" placeholder="浏览量" v-model="num1"  />
				</view>
			</view>
			<view class="header">
				<view>
					<text>审核状态</text>
					<radio-group @change="tag">
						<radio value="0" >通过审核</radio>
						<radio value="1" >拒绝通过</radio>
						<radio value="2" >审核中</radio>
					</radio-group>
				</view>
			</view>
			<button @click="save">保存</button>
		</view>
	</view>
</template>

<script>
	import my from "../../../utils/request.js"
	export default {
		data() {
			return {
				name:"",
				phone:"",
				num1:"",
				select:-1,
				id:0,
			}
		},
		methods: {
			tag(e){
				console.log(e.detail);
				if(e.detail=="0"){
					this.select=0;
				}else if(e.detail=="1"){
					this.select=1;
				}else{
					this.select=2;
				}
			},
			save(){
				if(this.select==-1){
					uni.showToast({
						title:"请选择审核状态后保存",
						icon:"none"
					})
				}
				my.sheng("mobile/Mipianadmin/checkFxDo",this.id,this.num1,this.name,this.phone,this.select,getApp().globalData.key).then(res=>{
					console.log(res)
					if(res.data.code==200){
						uni.showToast({
							title:res.data.message,
							icon:"none",
							success() {
								uni.navigateBack({
									
								})
							}
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none",
						})
					}
				})
			}
		},
		onLoad(options) {
			this.id=options.id;
			my.getData("mobile/Mipianadmin/checkFx","fxid="+options.id,getApp().globalData.key).then(res=>{
				this.name=res.data.result.name;
				this.phone=res.data.result.tel;
				this.num1=res.data.result.fxname;
			})
		}
	}
</script>

<style lang="less" scoped>
	view {
		width: 750rpx;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: flex-start;
		background-color: #f5f6f8;
		.content {
			width: 750rpx;
			height: 100vh;
			display: flex;
			flex-wrap: wrap;
			background-color: #FFFFFF;
			justify-content: center;
			align-items: flex-start;

			.header {
				width: 686rpx;
				height: 116rpx;
				background: #FFFFFF;
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				// padding:0rpx 32rpx;
				box-sizing: border-box;
				border-bottom: 2rpx solid #DDDDDD;

				view {
					width: 650rpx;
					height: 110rpx;
					display: flex;
					flex-wrap: nowrap;
					justify-content: flex-start;
					align-items: center;
					background: #FFFFFF;
					padding: 0;

					text {
						width: 136rpx;
						height: 42rpx;
						font-size: 30rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #111111;
						line-height: 42rpx;
						text-align: left;
					}

					input {
						width: 500rpx;
						height: 116rpx;
						margin-left: 14rpx;
					}
					radio-group{
						width: 500rpx;
						height: 116rpx;
						margin-left: 14rpx;
						display: flex;
						flex-wrap: nowrap;
						align-items: center;
						justify-content: space-around;
						font-size: 24rpx;
						
					}
				}

				image {
					width: 32rpx;
				}
			}

			button {
				width: 686rpx;
				height: 96rpx;
				background: #BC4040;
				border-radius: 12rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				margin-top: 80rpx;
			}
		}

	}
</style>
