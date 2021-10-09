<template>
	<view>
		<view class="header">
			<view class="pic" v-for="(item,i) in imglist" :key="i">
				<image :src="item" mode="aspectFill"></image>
				<image class="cle" :src="ig" mode="widthFix" @click="clear(i)" ></image>
			</view>
				<view class="tianjia" @click="put">
					<image src="../../../static/image/tianjia.png" mode="widthFix"></image>
				</view>
		</view>
		<button @click="a">保存修改</button>
	</view>
</template>

<script>
	import my from "../../../utils/request.js";
	export default {
		data() {
			return {
				id:4,
				imglist:[],
				i:"",
				ig:"../../../static/image/clear.png",
				img:""
			}
		},
		methods: {
			clear(e){
				console.log(e);
				// this.imglist[e]="";
				// this.i="";
				// this.ig="";
				this.imglist.splice(e,1);
			},
			a(){
				console.log("之不变了",this.img)
				my.save("mobile/mipianadmin/shop_upload_pic_do","mpid="+this.id,this.img,getApp().globalData.key).then(res=>{
					console.log(res)
					if(res.data.code==200){
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
							title:res.data.message,
							icon:"none"
						})
					}
				})
			},
			put(){
				let that=this;
				wx.chooseImage({
					sizeType:['original','compressed'],
					sourceType:['album','camera'],
					success(res) {
						let template=res.tempFilePaths;
						uni.showLoading({
							title:"图片加载中",
							icon:"none"
						})
						wx.getFileSystemManager().readFile({
							filePath:template[0],
							encoding:"base64",
							success:e=>{
								that.i='data:image/png;base64,'+e.data;
								let data='data:image/png;base64,'+e.data
								that.imglist.push(data);
								that.ig="../../../static/image/clear.png";
								my.used("mobile/mipianadmin/upload_pic","sign=0",data,getApp().globalData.key).then(res=>{
									if(res.data.code!=200){
										uni.showToast({
											title:res.data.message,
											icon:"none"
										})
										return;
									}
									that.img=res.data.result;
									// console.log(res,":",that.img)
									// if(that.img==""){
									// 	that.img=res.data.message;
									// }else{
									// 	that.img=that.img+","+res.data.message;
									// }
									uni.hideLoading();
								})
							}
						});
				
					}
				})
			},
			save(){
				
			}
		},
		onLoad(options) {
			this.id=options.id;
		}
	}
</script>

<style lang="less" scoped>
view{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	width: 750rpx;
	// height: 100vh;
	background: #FFFFFF;
	.header{
		width: 750rpx;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-around;
		align-items: flex-start;
		padding: 30rpx 0rpx;
		box-sizing: border-box;
		.pic{
			width: 212rpx;
			height: 212rpx;
			position: relative;
			margin-right: 24rpx;
			box-sizing: border-box;
			image:nth-of-type(1){
				width: 212rpx;
				height: 212rpx;
			}
			.cle{
				width: 48rpx;
				position: absolute;
				right: -15rpx;
				top: -15rpx;
			}
		}
		.tianjia{
			width: 212rpx;
			height: 212rpx;
			background: #F5F6F8;
			border-radius: 8rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			
			image{
				width: 80rpx;
			}
		}
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
