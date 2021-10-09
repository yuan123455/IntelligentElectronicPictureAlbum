<template>
	<view>
		<view v-if="!islogin">
			<view class="header">
				<image class="first" src="../../static/image/mine-bg.png" mode="widthFix"></image>
				<image class="two" src="../../static/image/av.png" mode="widthFix"></image>
				<button  @click="login" open-type="getUserInfo">请先登录</button>
			</view>
			<view class="blur"></view>
			<view class="content">
				<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/createbusiness.png" mode="widthFix"></image>
						<text>创建我的智能名片</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/mingpianguanli.png" mode="widthFix"></image>
						<text>名片管理</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/gongshi.png" mode="widthFix"></image>
						<text>公司网站</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/youji.png" mode="widthFix"></image>
						<text>我的邮寄</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/youjikehu.png" mode="widthFix"></image>
						<text>邮寄客户列表</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<!-- <view class="header">
					<view class="left">
						<image  src="../../static/image/zhengzailiulan.png" mode="widthFix"></image>
						<text>我正在浏览的公司</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view> -->
				<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/liulanguo.png" mode="widthFix"></image>
						<text>我浏览过的公司</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
			<!-- 	<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/shengqing.png" mode="widthFix"></image>
						<text>我申请看过的公司</text>
					</view>
					<image src="../../static/image/yo ujiantou.png" mode="widthFix"></image>
				</view> -->
				<view class="header" hover-class="none" >
					<view class="left">
						<image  src="../../static/image/mine_fenxiao.png" mode="widthFix"></image>
						<text>我的分销</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
			</view>	
				
		</view>
		<view v-if="islogin">
			<view class="header">
				<image class="first" src="../../static/image/mine-bg.png" mode="widthFix"></image>
				<image class="two" :src="av" mode="widthFix"></image>
				<text>{{name}}</text>
			</view>
			<view class="blur"></view>
			<view class="content">
				<navigator class="header" hover-class="none" url="../createbusiness/createbusiness">
					<view class="left">
						<image  src="../../static/image/createbusiness.png" mode="widthFix"></image>
						<text>创建我的智能名片</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator>
				<navigator class="header" hover-class="none" url="../businessmesage/businessmesage">
					<view class="left">
						<image  src="../../static/image/mingpianguanli.png" mode="widthFix"></image>
						<text>名片管理</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator>
				<view class="header" hover-class="none" @click="toF">
					<view class="left">
						<image  src="../../static/image/gongshi.png" mode="widthFix"></image>
						<text>公司网站</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<navigator class="header" hover-class="none" url="../youji/youji">
					<view class="left">
						<image  src="../../static/image/youji.png" mode="widthFix"></image>
						<text>我的邮寄</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator>
				<navigator class="header" hover-class="none" url="../youjikehu/youjikehu">
					<view class="left">
						<image  src="../../static/image/youjikehu.png" mode="widthFix"></image>
						<text>邮寄客户列表</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator>
				<!-- <navigator class="header">
					<view class="left">
						<image  src="../../static/image/zhengzailiulan.png" mode="widthFix"></image>
						<text>我正在浏览的公司</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator> -->
				<navigator class="header" hover-class="none" url="../liulan/liulan">
					<view class="left">
						<image  src="../../static/image/liulanguo.png" mode="widthFix"></image>
						<text>我浏览过的公司</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator>
				<!-- <navigator class="header" hover-class="none" url="../shengqing/shengqing">
					<view class="left">
						<image  src="../../static/image/shengqing.png" mode="widthFix"></image>
						<text>我申请看过的公司</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator> -->
				<navigator class="header" hover-class="none" url="../mine_fenxiao/mine_fenxiao">
					<view class="left">
						<image  src="../../static/image/mine_fenxiao.png" mode="widthFix"></image>
						<text>我的分销</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator>
				<navigator class="header" hover-class="none" url="../mine_list/mine_list">
					<view class="left">
						<image  src="../../static/image/mine_fenxiao.png" mode="widthFix"></image>
						<text>分销列表</text>
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</navigator>
			</view>	
				
		</view>
		
	</view>
</template>

<script>
	import my from "../../utils/request.js";
	export default {
		data() {
			return {
				islogin:false,
				av:"",
				name:""
			}
		},
		methods: {
			toF(){
				uni.switchTab({
					url:"../store/store"
				})
			},
			getuser(){
					wx.getUserProfile({
						desc:"用户注册",
						success(res) {
							console.log(res)
						},
						fail(err) {
							console.log(err)
						}
					})
			},
			login(){
				let that=this;
				uni.showModal({
					title:"是否进行登录",
					success(res) {
						if(res.confirm){
							wx.getUserProfile({
								desc:"完善会员注册信息",
								success(res) {
									var getUserInfo=res.userInfo;
									console.log("信息huo1",res)
									wx.login({
										success(e) {
											let param =my.getRSA( "code=" + e.code + "&client=mini");
											my.creator("mobile/login/mini", param,getUserInfo.avatarUrl,getUserInfo.nickName).then(res1 => {
												console.log("登录:",res1)
												uni.showModal({
													content:res1.data.result,
													
												})
												if(res1.data.success){
													that.av=res1.data.result.avatar;
													that.name=res1.data.result.name;
													getApp().globalData.key=res1.data.result.key;
													let userInfo={
														avatar: res1.data.result.avatar,
														key: res1.data.result.key,
														name: res1.data.result.name,
														phone: res1.data.result.phone,
														userid: res1.data.result.userid,
														username: res1.data.result.username,
													}
													uni.setStorage({
														key:"token",
														data:JSON.stringify(userInfo),
														success(e) {
															that.islogin=true;
														
														}
													})
												}else{
													uni.showToast({
														title:res1.data.message,
														icon:"none"
													})
													// uni.setStorage({
													// 	key:"token",
													// 	data:"172b8cbf499eda92b7a96c650bdf8eba",
													// 	success(e) {
													// 		that.islogin=true;
													// 		console.log(e)
													// 	}
													// })
												}
												
											})
										}
									})
								},
								fail(err) {
									console.log("信息获取失败",err)
								}
							})
						}
					}
				})
			}
		},
		onLoad() {
			
			
			// my.getData("mobile/mipianadmin/mplist","sign=0",getApp().globalData.key).then(res=>{
			// 	console.log(res)
			// 	if(res.data.code=="300"){
					
			// 	}else{
			// 		uni.getStorage({
			// 			key:"token",
			// 			success(data) {
			// 				let res=JSON.parse(data.data);
			// 				console.log(res)
			// 				that.islogin=true;
			// 				getApp().globalData.key=res.key;
			// 				getApp().globalData.name=res.username;
			// 				that.av=res.avatar;
			// 				that.name=res.username;
			// 			}
			// 		})
			// 	}
			// })
			
		},
		onShow() {
			let that=this;
			uni.getStorage({
				key:"token",
				success(data) {
					let res=JSON.parse(data.data);
					my.getData("mobile/mipianadmin/mplist","sign=0",res.key).then(res=>{
						if(res.data.code=="300"){
							
						}else{
							uni.getStorage({
								key:"token",
								success(data) {
									let res=JSON.parse(data.data);
									console.log(res)
									that.islogin=true;
									getApp().globalData.key=res.key;
									getApp().globalData.name=res.username;
									that.av=res.avatar;
									that.name=res.username;
								}
							})
						}
					})
				},
				fail() {
					
				}
			})
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
		button{
			width:200rpx;
			height: 55rpx;
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
					width: 32rpx;
					margin-right: 32rpx;
				}
		}
		.header:nth-of-type(2){
			margin-top: 0rpx;
		}
		.header:nth-of-type(5){
			margin-top: 0rpx;
		}
		.header:nth-of-type(7){
			border: none;
		}
		.header:nth-of-type(1),.header:nth-of-type(3),.header:nth-of-type(4),.header:nth-of-type(6),.header:nth-of-type(8){
			border: none;
		}
	}
	
}
</style>