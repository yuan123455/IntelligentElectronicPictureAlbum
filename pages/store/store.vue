<template>
	<view class="store">
		<view class="header">
			<text>{{goods.mname}}</text>
		</view>
		<swiper indicator-dots="true" indicator-color="#FFF" autoplay circular>
			<swiper-item v-for="(item,i) in banner" :key="i">
				<image :src="item.imgurl" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<view class="classify">
			<view @click="togongshi">
				<image src="../../static/image/changjia.png" mode="widthFix"></image>
				<text>厂家介绍</text>
			</view>
			<view @click="toxiance">
				<image src="../../static/image/xiangce.png" mode="widthFix"></image>
				<text>简版相册</text>
			</view>
			<view @click="tomine">
				<image src="../../static/image/houtai.png" mode="widthFix"></image>
				<text>系统后台</text>
			</view>
			<view>
				<image src="../../static/image/video.png" mode="widthFix"></image>
				<text>VR视屏</text>
			</view>
			<view @click="tohuace">
				<image src="../../static/image/huace.png" mode="widthFix"></image>
				<text>领取纸画册</text>
			</view>
			<view @click="tofenxiao">
				<image src="../../static/image/fenxiao.png" mode="widthFix"></image>
				<text>一键分销</text>
			</view>
		</view>
		<view class="footer" v-for="(item,i) in list" :key="i">
			<!-- <view class="biaoti" >
					<view></view>
					<text>{{item.itemname}}</text>
					<view></view>
					:style="'width:'+item.pic_width+'rpx;'+'height:'+item.pic_height+'rpx'"
			</view> -->
			<view class="content" :style="'width:'+(item.pic_width>0?item.pic_width:'750')+'rpx;'">
				<image :src="item.itempic" mode="widthFix"></image>
				<text class="ti" @click="toprice(item.itemid,item.itempic)">询问厂家价格</text>
			</view>
		</view>
		<view class="b">
			——没有更多了——
		</view>
		<view class="fenlei" @click="tag11">
			<image src="../../static/image/classify.png" mode="widthFix"></image>
			<text>分类</text>
		</view>
		<view class="fenlei1" @click="tofenxiao">
			<image src="../../static/image/yijianfenxiao.png" mode="widthFix"></image>
			<text>一键分销</text>
		</view>
		<view class="fenlei2" @click="call">
			<image src="../../static/image/phone.png" mode="widthFix"></image>
			<text>电话咨询</text>
		</view>
			<view class="caidan" v-if="flag">
				<view @click="todetial(item.mid,item.mcid,item.catename)"  v-for="(item,i) in menu" :key="i">
					<text>{{item.catename}}</text>
				</view>
			</view>
			<view class="cai" v-if="flag" @click="tag2"></view>
		<!-- <view class="zhe" v-if="changjia"> -->
			<view class="a" v-if="changjia" @click="notshow">
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
		<!-- </view> -->
		<view class="hua" v-if="hua" >
			<view class="title">
				<text>填写信息可免费收到厂家{{goods.mname}}邮寄的纸画册，</text>
				<text>厂家电话为{{goods.mmobile}} 、{{goods.mtel}}</text>
			</view>
			<view class="content">
				<view class="header">
					<view>
						<text>姓名</text>
						<input type="text" placeholder="请填写姓名"  v-model="name"/>
					</view>
				</view>
				<view class="header">
					<view>
						<text>电话</text>
						<input type="text" placeholder="请填写电话"  v-model="phone"/>
					</view>
				</view>
				<view class="header">
					<view>
						<text>所在地区</text>
						<picker mode="region" @change="chang" >
						  <view class="picker" >
									<input type="text" placeholder="请选择地区" disabled="true" v-model="val"/>
						  </view>
						</picker>
						<!-- <input type="text" placeholder="请选择地区"  disabled="true" @click.stop="xuan" /> -->
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<view class="header">
					<view>
						<text>详细地址</text>
						<input type="text" placeholder="请填写详细地址" v-model="add" />
					</view>
				</view>
				<button @click="save">确定</button>
				<button v-on:click.stop="notshow">下次再填</button>
			</view>	
				
		</view>
		<view class="xiao" v-if="xiao" >
			<view class="title">
				<text>填写信息可免费加入我们成为鼎森百福，请诚信填</text>
			</view>
			<view class="content">
				<view class="header">
					<view>
						<text>姓名</text>
						<input type="text" placeholder="请填写姓名" v-model="name"/>
					</view>
				</view>
				<view class="header">
					<view>
						<text>店铺名称</text>
						<input type="text" placeholder="请填写申请店铺名称"  v-model="dianpu"/>
					</view>
				</view>
				<view class="header">
					<view>
						<text>电话</text>
						<input type="text" placeholder="请填写电话"  v-model="phone"/>
					</view>
				</view>
				<view class="header">
					<view>
						<text>所在地区</text>
						<picker mode="region" @change="chang" >
						  <view class="picker" >
									<input type="text" placeholder="请选择地区" disabled="true" v-model="val"/>
						  </view>
						</picker>
						<!-- <input type="text" placeholder="请选择地区"  disabled="true" @click.stop="xuan" /> -->
					</view>
					<image src="../../static/image/youjiantou.png" mode="widthFix"></image>
				</view>
				<view class="header">
					<view>
						<text>详细地址</text>
						<input type="text" placeholder="请填写详细地址" v-model="add" />
					</view>
				</view>
				<button @click="save1">确定</button>
				<button @click.stop="close1">取消</button>
			</view>	
		</view>
	</view>
</template>
 
<script>
	import my from "../../utils/request.js";
	import bmap from "../../utils/bmap-wx.min.js"
	export default {
		data() {
			return {
				 flag:false,
				 banner:[],//lunbotu
				 menu:[],//分类
				 shopid:[],//商品分类id
				 id:0,
				pag:2,
				list:[],
				phone1:"",
				changjia:false,
				gs:{},
				name:"",
				phone:"",
				add:"",
				val:"",
				dianpu:"",
				goods:{},
				hua:false,
				xiao:false,
				styles:"",
			}
		},
		methods: {
			save1(){
				if(this.name==""||this.dianpu==""||this.phone==""||this.add==""||this.val==""){
					uni.showToast({
						title:"信息需要填写完整才能加入",
						icon:"none"
					});
					return;
				}
				//保存销售信息
				my.fenxiao("mobile/Mipianadmin/fenxiao_add","mid="+this.id,this.dianpu,this.name,this.phone,this.add,this.val,getApp().globalData.key).then(res=>{
					console.log(res);
					if(res.data.success){
						uni.showToast({
							title:"申请已送达",
							icon:"none",
							
						})
						this.xiao=false;
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						})
					}
				})
			},
			tag1(){
				this.xiao=false;
			},
			close1(){
				this.xiao=false;
			},
			xuan(){
				this.flag=false;
			},
			//画册
			chang(e){
				this.val="";
				var a=e.detail.value;
				for (let i in a) {
						this.val=this.val+a[i];
				}
				console.log(this.val)
			},
			clo(e){
				console.log(e)
			},
			save(){
				let that=this;
				if(this.name==""||this.phone==""||this.add==""||this.val==""){
					uni.showToast({
						title:"信息需要填写完整才能寄出",
						icon:"none"
					});
					return;
				}
				my.huace("mobile/Mipianadmin/getphoto_add","mid="+this.id,this.name,this.phone,this.add,this.val,getApp().globalData.key).then(res=>{
					console.log("画册领取",res)
					if(res.data.success){
						uni.showToast({
							title:"申请成功，商家将尽快发出",
							icon:"none",
							success() {
								that.hua=false;
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
			
			notshow(){
				this.changjia=false;
				this.hua=false;
			},
			gongshi(){
				my.getData("mobile/Minishop/shopinfo","mid="+this.id,getApp().globalData.key).then(res=>{
					this.gs=res.data.result.info;
				})
			},
			tohuace(){
				// uni.navigateTo({
				// 	url:"../huace/huace"
				// })''
				this.hua=true;
			},
			tag11(){
				this.flag=true;
			},
			tag2(){
				this.flag=false;
			},
			togongshi(){
				// uni.navigateTo({
				// 	url:"../gongshi/gongshi"
				// })
				this.changjia=true;
			},
			tomine(){
				uni.switchTab({
					url:"../mine/mine"
				})
			},
			tofenxiao(){
				this.xiao=true;
				// uni.navigateTo({
				// 	url:"../fenxiao/fenxiao"
				// })
			},
			call(){
				wx.makePhoneCall({
					phoneNumber:this.phone1,
				})
			},
			toprice(sp,im){
				uni.navigateTo({
					url:"../price/price?id="+this.id+"&sp="+sp+"&im="+im,
				})
			},
			toxiance(){
				uni.navigateTo({
					url:"../jianbanxiance/jianbanxiance?id="+this.id
				})
			},
			todetial(mc,mi,name){
				uni.navigateTo({
					url:"../detail/detail?dp="+mc+"&fl="+mi+"&name="+name,
				})
			},
			getBanner(){
				my.getData("mobile/Minishop/shopinfo","mid="+this.id,getApp().globalData.key).then(res=>{
					this.banner=res.data.result.banners;
					this.menu=res.data.result.menu;
					this.shopid=res.data.result.mcid;
					this.phone1=res.data.result.info.mtel;
					this.goods=res.data.result.info;
					console.log("公式",res)
				})
			},
			getList(){
				my.load("mobile/Minishop","mid="+this.id,"1").then(res=>{
						this.list=res.data.result.list;
						
						console.log(this.list,"ad发大水")
				})
			},
			loadmore(){
				my.load("mobile/Minishop","mid="+this.id,this.pag).then(res=>{
						// this.list=res.data.result.list;
						if(res.data.result.list>0){
							this.list=[...this.list,...res.data.result.list]
							this.pag++;
						}else{
							uni.showToast({
								title:"没有更多商品了",
								icon:"none"
							})
						}
				})
			}
		},
		onLoad(options) {
			// let a=JSON.parse(decodeURIComponent(options.q));
			//二维码解析
			if(options.q){
				let a=decodeURIComponent(options.q).split("?")[1];
				let mpid="";
				this.id=a.split("=")[1];
			}else{
				this.id=2146;
			}
			// let p=decodeURIComponent(options.q)
			// let mpid=p.slice("?");
			// token=mpid.split("=")[1];
			uni.getStorage({
				key:"token",
				success(res) {
					let a=JSON.parse(res.data);
					getApp().globalData.key=a.key;
				}
			});
			//获取扫码id并替换
			
			this.getBanner()
			this.getList();
			this.gongshi();
			
			// my.getData("mobile/Mipianadmin/add_webhistory",)
		},
		onReachBottom() {
			this.loadmore();
		},
		onReady() {
			var map=new bmap.BMapWX({
				ak:"3MZuq60GLl0BQwMLkCoRUgnj71IxuCPG"
			})
			var that=this;
			if(getApp().globalData.key==""){
				return ;
			}
			wx.getLocation({
				type:"wgs84",
				success(res1) {
					map.regeocoding({
					                    location: res1.latitude + ',' + res1.longitude,
					                    success: function (res) {
											let dizhi=res.originalData.result.sematic_description
					                        console.log("地址解析出来了",dizhi)
											let rsa=my.getRSA("mid="+that.id);
											uni.request({
												url:"https://mp.gzcywx.com/mobile/Mipianadmin/add_webhistory",
												data:{
													sign:rsa,
													location:dizhi
												},
												method:"POST",
												timeout:'3000',
												header: {
													// 'content-type': 'application/json' ,// 默认值
													'content-type': 'application/x-www-form-urlencoded',
													token:getApp().globalData.key,
												},
												success(r) {
													if(!r.data.success){
														uni.showToast({
															title:r.data.message,
															icon:"none"
															
														})
													}else{
														console.log("记录添加成功",r)
													}
												},
											})
										},
					                    fail: function () {
					                        wx.showToast({
					                            title: '请检查位置服务是否开启',
												icon:"none"
					                        })
					                    },
					                });
				}
			})
		
		},
		onShow() {
			console.log(getApp().globalData.mpid)
			if(getApp().globalData.mpid!=-1){
				this.id=getApp().globalData.mpid;
				this.getBanner(this.id)
				this.getList(this.id);
				this.gongshi(this.id);
			}
		},
		onHide() {
			getApp().globalData.mpid=-1
		}
		
	}
</script>

<style lang="less" scoped>
.store{
	width: 750rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	.header{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		text{
			width: 346rpx;
			height: 80rpx;
			color: #FBE0B0;
			font-weight: 500;
			font-size: 40rpx;
			text-align: center;
			line-height: 80rpx;
		}
	}
	swiper{
		width: 750rpx;
		height: 440rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
		swiper-item{
			width: 750rpx;
			height: 440rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0;
			padding: 0;
			image{
				width: 100%;
				margin: 0;
				padding: 0;
			}
		}
		
	}
	.classify{
		width: 750rpx;
		height:496rpx ;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		background-color: #F5F6F8;
		view{
			width: 224rpx;
			height: 208rpx;
			background: #BC4040;
			border-radius: 8rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			image{
				width: 72rpx;
				height: 72rpx;
				margin: 32rpx 0rpx 0rpx 0rpx;
			}
			text{
				width: 224rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 40rpx;
				text-align: center;
				margin: 0;
			}
		}
		view:nth-of-type(2){
			background-color: #D7A761;
		}
		:nth-child(3){
			background-color: #6F9C97;
		}
		:nth-child(4){
			background-color: #8B7D7D;
		}
		:nth-child(5){
			background-color: #D48966;
		}
		:nth-child(6){
			background-color: #A3705C;
		}
	}
	.footer{
		width: 750rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		background-color: #F5F6F8;
		margin-top: 10rpx;
		box-sizing: border-box;
		.biaoti{
			width: 750rpx;
			height: 120rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			view{
				width: 100rpx;
				height: 6rpx;
				background: linear-gradient(90deg, #F0E5E5 0%, #BC4040 100%);
			}
			view:nth-of-type(2){
				background: linear-gradient(90deg, #BC4040 0%, #F0E5E5 100%);
			}
			text{
				// width: 136rpx;
				height: 48rpx;
				font-size: 34rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #BC4040;
				line-height: 48rpx;
				margin: 0rpx 38rpx;
			}
		}
		.content{
			width: 710rpx;
			// height: 560rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: flex-start;
			align-content: flex-start;
			image{
				width: 100%;
				margin: 0;
			}
			.ti{
				width: 240rpx;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #BC4040;
				line-height: 42rpx;
				text-align: center;
			}
		}
	}
	.b{
		width: 750rpx;
		height: 114rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #CCCCCC;
		line-height: 114rpx;
		text-align: center;
		background-color: #F5F6F8;
	}
	.fenlei{
		width: 120rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(26, 28, 29, 0.2);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		padding: 15rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 295rpx;
		right: 25rpx;
		image{
			width: 56rpx;
			margin: 0;
		}
		text{
			width:70rpx;
			height: 28rpx;
			font-size: 20rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #4D626B;
			line-height: 28rpx;
			text-align: center;
		}
	}
	.fenlei1{
		width: 120rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(26, 28, 29, 0.2);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		padding: 15rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 160rpx;
		right: 25rpx;
		image{
			width: 56rpx;
			margin: 0;
		}
		text{
			width:80rpx;
			height: 28rpx;
			font-size: 20rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #4D626B;
			line-height: 28rpx;
			text-align: center;
		}
	}
	.fenlei2{
		width: 120rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(26, 28, 29, 0.2);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		padding: 15rpx;
		box-sizing: border-box;
		position: fixed;
		bottom:30rpx;
		right: 25rpx;
		image{
			width: 56rpx;
			margin: 0;
		}
		text{
			width:80rpx;
			height: 28rpx;
			font-size: 20rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #4D626B;
			line-height: 28rpx;
			text-align: center;
		}
	}
	// .con{
	// 	width: 750rpx;
	// 	height: 100vh;
	// 	display: flex;
	// 	flex-wrap: nowrap;
	// 	justify-content: center;
	// 	position: fixed;
	// 	background-color: #FFFFFF;
	// 	top: 0;
	// 	left: 0;
	// 	opacity: 0.8;
		.caidan{
			width: 375rpx;
			height: 100vh;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: flex-start;
			align-content: flex-start;
			background-color: #FFF;
			position: fixed;
			left: 0;
			top: 0;
			view{
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				align-content: flex-start;
				opacity:1;
					margin-top: 10rpx;
				// z-index: 99;
				text{
					width: 100%;
					height:80rpx;
					text-align: center;
					font-size:28rpx;
					line-height: 80rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		.cai{
			width: 375rpx;
			height: 100vh;
			background-color: #000;
			opacity: 0.6;
			position: fixed;
			right: 0;
			top: 0;
		}
		.a{
			width: 750rpx;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			align-content: flex-start;
			flex-wrap: wrap;
			background-color: #f5f6f8;
			opacity:1;
			position: fixed;
			top: 0;
			left: 0;
			.header{
				width: 686rpx;
				height: 500rpx;
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
		.hua{
			width: 750rpx;
			height: 100vh;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-content: flex-start;
			background-color: #f5f6f8;
			position: fixed;
			top: 0;
			left: 0;
			.title{
				width: 750rpx;
				height: 184rpx;
				background: #FFFFFF;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				padding-top: 45rpx;
				box-sizing: border-box;
				text{
					width: 686rpx;
					height: 52rpx;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #D7A761;
					line-height: 52rpx;
				}
			}
			.content{
				width: 750rpx;
				height: 820rpx;
				display: flex;
				flex-wrap: wrap;
				background-color: #FFFFFF;
				justify-content: space-around;
				align-items: flex-start;
				.header{
					width: 686rpx;
					height: 116rpx;
					background: #FFFFFF;
					display: flex;
					flex-wrap: nowrap;
					justify-content: flex-start;
					align-items: center;
					// padding:0rpx 32rpx;
					box-sizing: border-box;
					border-top: 2rpx solid #DDDDDD;
					view{
						width: 650rpx;
						height: 110rpx;
						display: flex;
						flex-wrap: nowrap;
						justify-content: flex-start;
						align-items: center;
						background: #FFFFFF;
						padding: 0;
						text{
							width: 136rpx;
							height: 42rpx;
							font-size: 30rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #111111;
							line-height: 42rpx;
							text-align: left;
						}
						input{
							width:500rpx;
							height: 116rpx;
							margin-left: 14rpx;
						}
						.picker{
							width:500rpx;
							margin-left: 14rpx;
							color: #999999;
						}
					}
					image{
						width: 32rpx;
					}
				}
				button{
					width: 286rpx;
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
		.xiao{
			width: 750rpx;
			height: 100vh;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-content: flex-start;
			background-color: #f5f6f8;
			position: fixed;
			top: 0;
			left: 0;
			.title{
				width: 750rpx;
				height: 184rpx;
				background: #FFFFFF;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				padding-top: 45rpx;
				box-sizing: border-box;
				text{
					width: 686rpx;
					height: 52rpx;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #D7A761;
					line-height: 52rpx;
				}
			}
			.content{
				width: 750rpx;
				height: 820rpx;
				display: flex;
				flex-wrap: wrap;
				background-color: #FFFFFF;
				justify-content: space-around;
				align-items: flex-start;
				.header{
					width: 686rpx;
					height: 116rpx;
					background: #FFFFFF;
					display: flex;
					flex-wrap: nowrap;
					justify-content: flex-start;
					align-items: center;
					// padding:0rpx 32rpx;
					box-sizing: border-box;
					border-top: 2rpx solid #DDDDDD;
					view{
						width: 650rpx;
						height: 110rpx;
						display: flex;
						flex-wrap: nowrap;
						justify-content: flex-start;
						align-items: center;
						background: #FFFFFF;
						padding: 0;
						text{
							width: 136rpx;
							height: 42rpx;
							font-size: 30rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #111111;
							line-height: 42rpx;
							text-align: left;
						}
						input{
							width:500rpx;
							height: 116rpx;
							margin-left: 14rpx;
						}
						.picker{
							width:500rpx;
							margin-left: 14rpx;
							color: #999999;
						}
					}
					image{
						width: 32rpx;
					}
				}
				button{
					width: 286rpx;
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

}
</style>
