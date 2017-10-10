<template>
	<div class="m-order">
		<m-top>
			<span>我的订单</span>
			<span class="title-link">全部</span>
		</m-top>
		<ul class="m-tab">
			<li class="active">待付款</li>
			<li>待发货</li>
			<li>待收货</li>
			<li>待评价</li>
			<li>退款</li>
		</ul>
		<div class="order-wrapper">
			<scroll class="order-content" ref="scroll">
				<div>
					<slider>
						<div v-for="item in banners">
							<a :href="item.linkUrl">
								<img class="needsclick" :src="item.picUrl" @load="loadImage">
							</a>
						</div>
					</slider>
					
					<div class="content-items">
						<div class="content-hd">
							<span class="hd-title">自营区升级专用<i class="iconfont icon-jinru"></i></span>
							<span class="state">交易成功</span>
						</div>
						<div class="content-bd">
							<div class="bd-item">
								<img src="" class="bd-img">
								<div class="bd-infor">
									<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
									<p class="sku">口味：草莓香草味 192g</p>
								</div>
								<div class="bd-price">
									<span class="newPr">￥666.00</span>
									<del class="oldPr">￥1999.00</del>
									<span class="num">x 1</span>
									<span class="status" v-if="false">退款中</span>
								</div>
							</div>
						</div>
						<div class="content-fd">
							<div class="fd-item total">
								<span>共8件商品</span>
								<span>合计：￥800 (含运费￥0.00)</span>
							</div>
							<div class="fd-item reason" v-if="false">
								退款原因：商品不足
							</div>
							<div class="fd-item control" v-if="false">
								<span class="button">取消订单</span>
								<span class="button active">追加评论</span>
							</div>
							<div class="fd-item control" v-if="true">
								<span class="button" @click="isDelOrder = !isDelOrder">删除订单</span>
								<span class="button" @click="routerTo('/member/myorder/myrefund')">申请退款</span>
								<span class="button active" @click="routerTo('/member/myorder/myrating')">追加评论</span>
							</div>
						</div>
					</div>
					<div class="content-items">
						<div class="content-hd">
							<span class="hd-title">自营区升级专用<i class="iconfont icon-jinru"></i></span><span class="state">交易成功</span>
						</div>
						<div class="content-bd">
							<div class="bd-item">
								<img src="" class="bd-img">
								<div class="bd-infor">
									<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
									<p class="sku">口味：草莓香草味 192g</p>
								</div>
								<div class="bd-price">
									<span class="newPr">￥666.00</span>
									<del class="oldPr">￥1999.00</del>
									<span class="num">x 1</span>
								</div>
							</div>
						</div>
						<div class="content-fd">
							<div class="fd-item total">
								<span>共8件商品</span>
								<span>合计：￥800 (含运费￥0.00)</span>
							</div>
							<div class="fd-item control">
								<span class="button" @click="routerTo('/member/myorder/myfms')">查看物流</span>
								<span class="button active" @click="routerTo('/member/myorder/myreceipt')">确认收货</span>
							</div>
						</div>
					</div>
					<div class="content-items">
						<div class="content-hd">
							<span class="hd-title">自营区升级专用<i class="iconfont icon-jinru"></i></span><span class="state">交易成功</span>
						</div>
						<div class="content-bd">
							<div class="bd-item">
								<img src="" class="bd-img">
								<div class="bd-infor">
									<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
									<p class="sku">口味：草莓香草味 192g</p>
								</div>
								<div class="bd-price">
									<span class="newPr">￥666.00</span>
									<del class="oldPr">￥1999.00</del>
									<span class="num">x 1</span>
								</div>
							</div>
							<div class="bd-item">
								<img src="" class="bd-img">
								<div class="bd-infor">
									<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
									<p class="sku">口味：草莓香草味 192g</p>
								</div>
								<div class="bd-price">
									<span class="newPr">￥666.00</span>
									<del class="oldPr">￥1999.00</del>
									<span class="num">x 1</span>
								</div>
							</div>
						</div>
						<div class="content-fd">
							<div class="fd-item total">
								<span>共8件商品</span>
								<span>合计：￥800 (含运费￥0.00)</span>
							</div>
							<div class="fd-item control">
								<span class="button">修改地址</span>
								<span class="button active" @click="isCancelOrder = !isCancelOrder">取消订单</span>
								<span class="button active">付款</span>
							</div>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<transition name="popup-slide">
			<popup v-show="isDelOrder">
				<div class="popup-center">
					<h3 class="center-tips">确定删除此订单?</h3>
					<div class="center-control">
						<span class="button" @click="cancelDelTo">取消</span>
						<span class="button" @click="submitDelTo">确定</span>
					</div>
				</div>
			</popup>
		</transition>
		<transition name="popup-slide">
			<popup v-show="isCancelOrder">
				<div class="popup-center">
					<h3 class="bottom-title">请选择取消订单的理由</h3>
					<div class="bottom-items">
						<i class="iconfont icon-dui active"></i>
						<span>我不想买了</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>信息填写错误，重新拍</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>卖家缺货</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>同城见面交易</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>其他原因</span>
					</div>
					<div class="center-control">
						<span class="button" @click="cancelOrderTo">取消</span>
						<span class="button" @click="submitOrderTo">确定</span>
					</div>
				</div>
			</popup>
		</transition>
		<transition name="router-slide">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import Scroll from '@/components/common/scroll'
	import Slider from '@/components/common/slider'
	import Popup from '@/components/common/popup'
	import MTop from '@/components/member/top'

	export default{
		data(){
			return{
				banners:[
					{
						'linkUrl':'#',
						'picUrl':'/static/images/banner.jpg'
					},
					{
						'linkUrl':'#',
						'picUrl':'/static/images/banner.jpg'
					}
				],
				//删除订单
				isDelOrder:false,
				// 取消订单
				isCancelOrder:false
			}
		},
		components:{
			Scroll,
			Slider,
			Popup,
			MTop
		},
		methods:{
			loadImage(){
				if(!this.imgLoaded){
					this.$refs.scroll.refresh()
					this.imgLoaded=true
				}
			},
			routerTo(url){
				this.$router.push(url)
			},
			cancelDelTo(){
				this.isDelOrder = !this.isDelOrder
			},
			//参数为订单id
			submitDelTo(id){
				this.isDelOrder = !this.isDelOrder
			},
			cancelOrderTo(id){
				this.isCancelOrder = !this.isCancelOrder
			},
			submitOrderTo(id){
				this.isCancelOrder = !this.isCancelOrder
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-order{
		.static-body;
		background-color: @color-gray-l;
		.m-tab{
			height: @title-height;
			display: flex;
			align-items:center;
			background-color: @color-white;
			font-size:@font-size-medium;
			li{
				flex:1;
				text-align: center;
				height: @title-height;
				line-height: @title-height;
				border-bottom:@line-height*2 solid @color-white;
				box-sizing: border-box;
				&.active{
					color:@color-theme;
					border-color:@color-theme;
				}
			}
		}
		.order-wrapper{
			.static-position(bottom);
			top:@input-height + @title-height;
			background-color: @color-gray-l;
			.order-content{
				.body-height;
			}
			.content-items{
				background-color: @color-white;
				margin-bottom: @bottom-margin;
			}
			.content-hd{
				margin:0 @box-margin/2;
				height:@title-height;
				line-height: @title-height;
				position: relative;
				.hd-title{
					vertical-align: middle;
					.iconfont{
						font-size: @font-size-medium;
					}
				}
				.state{
					position: absolute;
					right:0;
					top:0;
					height: 100%;
					color:@color-theme;
				}
			}
			.content-bd{
				.bd-item{
					.products-profile;
					.bd-price{
						display: flex;
						flex-direction:column;
						text-align: right;
						.oldPr,.num{
							color:@color-gray-b;
						}
						.status{
							color:@color-theme;
						}
					}
				}
			}
			.content-fd{
				.fd-item{
					height: @title-height;
					line-height: @title-height;
					padding-right:@box-margin;
					border-bottom:@line-height solid @color-gray;
				}
				.reason{
					text-align: right;
				}
				.total{
					text-align:right;
				}
				.control{
					height: @input-height;
					line-height: @input-height;
					text-align: right;
					.button{
						display: inline-block;
						width:@title-height*2;
						height:@title-height*0.7;
						line-height:@title-height*0.7;
						text-align: center;
						border:@line-height solid @color-text;
						border-radius: @title-height/2;
						font-size:@font-size-small;
						margin-left:@box-margin/2;
						&.active{
							border-color:@color-theme;
							background-color:@color-theme;
							color:@color-white;
						}
					}
				}
			}
		}
	    .router-slide-enter-active, .router-slide-leave-active {
	        transition: all .4s;
	    }
	    .router-slide-enter, .router-slide-leave-active {
	        transform: translate3d(100%, 0, 0);
	        opacity: 0;
	    }
	}
</style>