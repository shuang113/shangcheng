<template>
	<div class="m-submit-order">
		<m-top>
			<span>确认订单</span>
		</m-top>
		<div class="submit-order-wrapper">
			<scroll class="submit-order-content">
				<div>
					<div class="content-hd">
						<p class="hd-name">收货人：女王大人<span class="tel">13856269535</span></p>
						<p class="hd-address">
							<i class="iconfont icon-dizhi"></i>
							<span class="addr">收货地址：收货地址：湖南省长沙市万家丽路万家丽购物广场16楼</span>
							<i class="iconfont icon-jinru"></i>
						</p>
					</div>
					<div class="line-bg"></div>
					<div class="content-bd">
						<div class="bd-items">自营区升级专用</div>
						<div class="bd-items products-profile bd-profile">
							<img src="" class="bd-img">
							<div class="bd-infor">
								<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
								<p class="sku">口味：草莓香草味 192g</p>
								<p class="pr">
									<span>￥2000.00</span>
									<span class="num">x1</span>
								</p>
							</div>
						</div>
						<div class="bd-items border-bottom">
							<span>购买数量</span>
							<div class="number">
								<div class="reduce"><i class="iconfont icon-jianhao"></i></div>
								<input type="text" placeholder="1" value="1">
								<div class="reduce"><i class="iconfont icon-jiahao"></i></div>
							</div>
						</div>
						<div class="bd-items border-bottom">
							<span>购买方式</span>
							<div class="fms">快递：
								<div class="cost">免邮<i class="iconfont icon-sanjiao"></i></div>
							</div>
						</div>
						<div class="bd-items border-bottom">
							<span>买家留言：</span>
							<input type="text" placeholder="选填，对本次交易说明">
						</div>
						<div class="bd-items border-bottom bd-items-fd">
							<div>共计1件商品 小计：<span class="price">￥2000.00</span></div>
						</div>
					</div>
					<div class="content-fd">
						<div class="fd-items active">
							<i class="iconfont icon-dui"></i>
							<span>使用善券</span>
						</div>
						<div class="fd-items">
							<i class="iconfont icon-dui"></i>
							<span>使用认购券</span>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<div class="submit-fd">
			<span class="total">合计：￥2000.00</span>
			<span class="button" @click="payTo">提交订单</span>
		</div>
		<transition name="popup-slide">
			<popup v-show="isPay" class="pay-popup-wrapper">
				<div class="popup-bottom">
					<div class="bottom-title pr">
						确认付款
						<i class="iconfont icon-cuo" @click="isPay = !isPay"></i>
					</div>
					<div class="price">￥666.00</div>
					<div class="pay-items">
						<span>我的用户名：</span>
						<span class="cont">女王大人</span>
					</div>
					<div class="pay-items">
						<span>付款方式：</span>
						<span class="cont" @click="payContTo">微信<i class="iconfont icon-jinru"></i></span>
					</div>
					<div class="bottom-submit" @click="payEndTo">
						<span>立即付款</span>
					</div>
				</div>
			</popup>
		</transition>
		<transition name="popup-slide">
			<popup v-show="isPayCont" class="paycont-popup-wrapper">
				<div class="popup-bottom">
					<div class="bottom-title pr">
						选择付款方式
						<i class="iconfont icon-fanhui" @click="payBack"></i>
					</div>
					<div class="bottom-items active">
						<i class="iconfont icon-dui"></i>
						<span class="items"><i class="iconfont icon-zhifubao1"></i>支付宝</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span class="items"><i class="iconfont icon-weixin"></i>微信支付</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span class="items"><i class="iconfont icon-yinxingqia"></i>银行卡支付</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span class="items"><i class="iconfont icon-yuebao"></i>余额支付</span>
					</div>
					<div class="bottom-items"></div>
				</div>
			</popup>
		</transition>
		<transition name="router-link">
			<div class="pay-success" v-show="isPayEnd">
				<m-top>
					<span>付款成功</span>
				</m-top>
				<div class="pay-success-wrapper">
					<scroll class="pay-success-content">
						<div>
							<div class="content-bd">
								<i class="iconfont icon-dui1"></i>
								<span class="tips">恭喜您，付款成功！</span>
								<span class="again">我再逛逛</span>
							</div>
						</div>
					</scroll>
				</div>
			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	import Popup from '@/components/common/popup'
	export default{
		data(){
			return{
				//提交订单
				isPay:false,
				// 支付方式
				isPayCont:false,
				// 付款成功
				isPayEnd:false
			}
		},
		components:{
			MTop,
			Scroll,
			Popup
		},
		methods:{
			payTo(){
				this.isPay = !this.isPay
			},
			// 选择付款方式
			payContTo(){
				this.isPayCont = !this.isPayCont
				this.isPay = !this.isPay
			},
			//确定付款方式/返回
			payBack(){
				this.isPay = !this.isPay
				this.isPayCont = !this.isPayCont
			},
			payEndTo(){
				this.isPay = !this.isPay
				this.isPayEnd = !this.isPayEnd
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-submit-order{
		.static-body;
		bottom:1.0081rem;
		background-color: @color-gray-l;
		.submit-order-wrapper{
			.static-position(bottom);
			top:@input-height;
			bottom:1.0081rem;
			.submit-order-content{
				.body-height;
			}
		}
	}
	.content-hd{
		padding:@box-margin;
		background-color: @color-gray-l;
		.hd-name{
			text-indent:0.85rem;
			line-height: 2;
			position: relative;
			.tel{
				position: absolute;
				right:0.85rem;
			}
		}
		.hd-address{
			display: flex;
			align-items:center;
			.iconfont{
				font-size:@font-size-large;
				color:@color-text;
			}
			.addr{
				margin:0 @element-margin;
				line-height: 1.4;
			}
		}
	}
	.line-bg{
		height: 0.21rem;
		background-image: url('~@/pages/member/images/line-bg.png');
		background-repeat: repeat-x;
		background-size: contain;
		margin-bottom: @bottom-margin;
	}
	.content-bd{
		background-color: @color-white;
		margin-bottom:@bottom-margin;
		.bd-items{
			padding:@box-margin;
		}
		.bd-profile{
			.title{
				-webkit-line-clamp:2;
			}
			.num{
				position: absolute;
				right:0;
			}
		}
		.border-bottom{
			display: flex;
			align-items:center;
			border-bottom:@line-height solid @color-gray;
			.number{
				position: absolute;
				right:@box-margin;
				display: flex;
				justify-content:center;
				input{
					width:0.8rem;
					text-align: center;
				}
				.iconfont{
					font-size:@font-size-medium;
					padding:0.08rem;
					background-color: @color-gray;
				}
			}
			.fms{
				position: absolute;
				right:@box-margin;
				display: flex;
				align-items:center;
				.cost{
					display: flex;
					align-items:center;
					.iconfont{
						color:@color-theme;
					}
				}
			}
		}
		.bd-items-fd{
			display: flex;
			justify-content:flex-end;
			.price{
				color:@color-hover;
			}
		}
	}
	.content-fd{
		background-color: @color-white;
		.fd-items{
			height: @input-height;
			line-height: @input-height;
			padding:0 @box-margin;
			position: relative;
			border-bottom:@line-height solid @color-gray;
			&.active{
				.iconfont{
					background-color: @color-theme;
					border:1px solid @color-theme;
				}
			}
			.iconfont{
				position: absolute;
				top:50%;
				right:@box-margin;
				width:0.45rem;
				height:0.45rem;
				line-height: 0.45rem;
				text-align: center;
				font-size: @font-size-medium;
				border-radius: 100%;
				border:1px solid @color-gray-b;
				transform:translateY(-50%);
				color:@color-white;
				background-color: @color-white;
			}
		}
	}
	.submit-fd{
		.static-position(bottom);
		height:@title-height + @1px;
		display: flex;
		align-items:center;
		justify-content:flex-end;
		border-top:@1px solid @color-gray;
		background-color: @color-white;
		.total{
			color:@color-hover;
			margin-right: @box-margin;
		}
		.button{
			height: @title-height;
			line-height: @title-height;
			background-color: @color-theme;
			color:@color-white;
			width:3rem;
			text-align: center;
		}
	}

	.pay-popup-wrapper{
		.bottom-title{
			.iconfont{
				position: absolute;
				right:@box-margin;
				color:@color-gray-b;
			}
		}
		.price{
			padding:@box-margin;
			text-align: center;
			font-size:@font-size-large;
			color:@color-text;
		}
		.pay-items{
			padding:@box-margin;
			border-bottom:@line-height solid @color-gray;
			position: relative;
			.cont{
				position: absolute;
				right:@box-margin;
				.iconfont{
					font-size:@font-size-medium-x;
				}
			}
		}
		.bottom-submit{
			margin:@box-margin;
			box-sizing: border-box;
			border-radius:@input-height/2;
		}

	}
	.paycont-popup-wrapper{
		.bottom-title{
			.iconfont{
				position: absolute;
				left:@box-margin;
				color:@color-text;
			}
		}
		.bottom-items{
			.items{
				.iconfont{
					font-size:@font-size-large;
					margin-right: @box-margin;
				}
			}
			&:nth-child(2) .items .iconfont{
				color:#19a0e5;
			}
			&:nth-child(3) .items .iconfont{
				color:#45c45d;
			}
			&:nth-child(4) .items .iconfont{
				color:#19a0e5;
			}
			&:nth-child(5) .items .iconfont{
				color:#f64c4c;
			}
		}

	}

	.pay-success{
		.static-body;
		background-color: @color-white;
		.pay-success-wrapper{
			.static-position(bottom);
			top:@input-height;
			.pay-success-content{
				.body-height;
				display: flex;
				flex-direction:column;
				justify-content:center;
			}
			.content-bd{
				display: flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				.iconfont{
					font-size:2.38rem;
					color:@color-theme;
				}
				.tips{
					font-size:@font-size-medium-x;
					margin:@box-margin 0;
				}
				.again{
					padding:@bottom-margin/2 @box-margin;
					background-color: @color-theme;
					color:@color-white;
					border-radius: @bottom-margin/4;
				}
			}
		}
	}

</style>