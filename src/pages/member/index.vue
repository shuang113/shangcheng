<template>
	<div class="member">
		<div class="member-wrapper">
			<scroll class="member-content" ref="scroll">
				<div>
					<div class="m-header">
						<div class="avatar">
							<img src="/static/images/default.jpg">
						</div>
						<div class="m-user">
							<p class="item">会员名</p>
							<p class="item">ID：23889</p>
							<p class="item"><span class="vip">钻石会员</span><span>推荐人：湖南哪哪哪</span></p>
						</div>
					</div>
					<div class="m-menu">
						<ul class="m-menu-item">
							<li @click="routerTo('/member/myorder')">
								<span class="pr"><em class="iconfont icon-daifukuan"></em><i class="num">1</i></span>
								<span>待付款</span>
							</li>
							<li @click="routerTo('/member/myorder')">
								<span class="pr"><em class="iconfont icon-tuoyuankaobei"></em><i class="num">1</i></span>
								<span>待收货</span>
							</li>
							<li @click="routerTo('/member/myorder')">
								<span class="pr"><em class="iconfont icon-daipingjia"></em><i class="num">1</i></span>
								<span>待评价</span>
							</li>
							<li @click="routerTo('/member/myorder')">
								<span class="pr"><em class="iconfont icon-tuikuan"></em><i class="num">5</i></span>
								<span>退款/售后</span>
							</li>
							<li @click="routerTo('/member/myorder')">
								<span class="pr"><em class="iconfont icon-wodedingdan"></em></span>
								<span>我的订单</span>
								<div class="border"></div>
							</li>
						</ul>

						<ul class="m-menu-item bd4px">
							<li @click="routerTo('/member/mycenter/mycart')">
								<span class="pr"><em class="iconfont icon-gouwuche1"></em><i class="num">1</i></span>
								<span>购物车</span>
							</li>
							<li @click="routerTo('/member/mycenter/myfav')">
								<span class="pr"><em class="iconfont icon-wodeshoucang"></em><i class="num">1</i></span>
								<span>我的收藏</span>
							</li>
							<li @click="routerTo('/member/mycenter/log')">
								<span class="pr"><em class="iconfont icon-wodezuji"></em><i class="num">1</i></span>
								<span>我的足迹</span>
							</li>
							<li @click="routerTo('/member/mycenter/coupon')">
								<span class="pr"><em class="iconfont icon-youhuiquan"></em><i class="num">1</i></span>
								<span>优惠券</span>
							</li>
							<li @click="routerTo('/member/mycenter')">
								<span class="pr"><em class="iconfont icon-shankezhongxin"></em></span>
								<span>善客中心</span>
								<div class="border"></div>
							</li>
						</ul>
					</div>
					<div class="m-content">
						<ul class="content-item">
							<li @click="routerTo('/member/myprofile')">
								<span class="pr"><em class="iconfont icon-wodeziliao"></em><i class="num">1</i></span>
								<span>我的资料</span>
								<span class="iconfont icon-jinru"></span>
							</li>
							<li @click="routerTo('/member/supplier')">
								<span class="pr"><em class="iconfont icon-gongyingshang"></em><i class="num">1</i></span>
								<span>供应商申请</span>
								<span class="iconfont icon-jinru"></span>
							</li>
							<li @click="routerTo('/member/myaddress')">
								<span class="pr"><em class="iconfont icon-shouhuodizhi"></em><i class="num">1</i></span>
								<span>收货地址设置</span>
								<span class="iconfont icon-jinru"></span>
							</li>
							<li @click="routerTo('/member/mysystem')">
								<span class="pr"><em class="iconfont icon-xitongshezhi1"></em><i class="num">1</i></span>
								<span>系统设置</span>
								<span class="iconfont icon-jinru"></span>
							</li>
						</ul>
						<div class="m-logout">
							<span>退出登录</span>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<m-footer ref="footer">
			<div @click="footerTo('/index',0)" 
				class="menu-item"
				:class="[selectIndex === 0 ? 'router-link-active':'']">
				<i class="iconfont" :class="[selectIndex === 0 ? 'icon-shouyekaobei':'icon-shouye']"></i><span>首页</span>
			</div>
			<div @click="footerTo('/business',1)" 
				class="menu-item"
				:class="[selectIndex === 1 ? 'router-link-active':'']">
				<i class="iconfont" :class="[selectIndex === 1 ? 'icon-shangjiabianse':'icon-shangjia']"></i><span>联盟商家</span>
			</div>
			<div @click="footerTo('/wealth',2)" 
				class="menu-item"
				:class="[selectIndex === 2 ? 'router-link-active':'']">
				<i class="iconfont" :class="[selectIndex === 2 ? 'icon-caifubianse':'icon-caifu']"></i><span>财富中心</span>
			</div>
			<div @click="footerTo('/member',3)" 
				class="menu-item" 
				:class="[selectIndex === 3 ? 'router-link-active':'']">
				<i class="iconfont" :class="[selectIndex === 3 ? 'icon-huiyuanbianse':'icon-huiyuan']"></i><span>会员中心</span>
			</div>
		</m-footer>
		<!-- 我的订单/善客中心/我的资料 内容 -->
		<transition name="router-slide" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import Scroll from '@/components/common/scroll'
	import MFooter from '@/components/member/footer'
	export default{
		data(){
			return{
				selectIndex:3
			}
		},
		components:{
			MFooter,
			Scroll
		},
		methods:{
			routerTo(url){
				this.$router.push(url)
			},
			footerTo(url,index){
				this.selectIndex = index
				this.$router.replace(url)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.member{
		.static-body;
		z-index:1;
		background-color: @color-gray-l;
		.member-wrapper{
			.static-position(top);
			bottom:1.59rem;
			.member-content{
				.body-height;
			}
		}
	}
	.m-header{
		height:4rem;
		padding:0.8rem @box-margin 0;
		background: url('~@/pages/member/images/bg-head.jpg') no-repeat @color-white;
		background-size: cover;
		font-size:@font-size-medium;
		box-sizing: border-box;
		.avatar{
			float:left;
			width:2rem;
			height:2rem;
			box-sizing: border-box;
			border-radius: 100%;
			border:@1px dashed @color-white;
			overflow: hidden;
			img{
				display: block;
				border:none;
			}
		}
		.m-user{
			margin-left:2.6rem;
			height:2rem;
			color:@color-white;
			display:flex;
			flex-direction:column;
			justify-content:center;
			.item{
				flex:1;
				line-height: 1.5;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.vip{
				background-color:@color-hover;
				padding:0.06rem 0.35rem;
				border-radius: 0.3rem;
				margin-right:0.4rem;
			}
		}
	}
	.m-menu{
		background-color:@color-white;
		margin-bottom:@bottom-margin;
		.m-menu-item{
			display: flex;
			flex-direction:row;
			justify-content:space-around;
			padding:@bottom-margin 0;
			font-size:@font-size-medium;
			li{
				display: flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				padding:0.24rem 0;
				position: relative;
				span:first-child{
					margin-bottom:0.2rem;
				}
				.border{
					position: absolute;
					left:-0.7rem;
					top:0;
					width:1rem;
					height:100%;
					&:before{
						content:'';
						position: absolute;
						top:50%;
						left:0.17rem;
						width:0.16rem;
						height:0.16rem;
						transform:translateY(-50%) rotate(45deg);
						background-color:#fff;
						border-width: @line-height;
						border-style:solid;
						border-color:@color-gray @color-gray transparent transparent;
						z-index: 1;
					}
					&:after{
						content:'';
						position: absolute;
						top:0;
						left:30%;
						width:@line-height;
						height:100%;
						background-color:@color-gray;
					}
				}
			}
		}
		.bd4px{
			border-top:@line-height solid @color-gray;
		}
	}
	.pr{
		em{
			font-size:@font-size-large;
			color:@color-theme;
		}
		.num{
			position: absolute;
			right:0;
			top:0;
			transform:translate(80%,-30%);
			width:0.34rem;
			height:0.34rem;
			text-align: center;
			line-height: 0.34rem;
			color:@color-red;
			border:@line-height solid @color-red;
			border-radius: 100%;
			font-size:@font-size-small;
			background-color:#fff;
		}
	}
	.m-content{
		.content-item{
			display: flex;
			flex-direction:column;
			font-size:@font-size-medium-x;
			li{
				position: relative;
				padding:0 @box-margin;
				height:@input-height;
				line-height: @input-height;
				margin-bottom:@line-height;
				background-color: @color-white;
				.pr{
					margin-right:0.2rem;
					.num{
						transform:translate(80%,-80%);
					}
				}
				&:nth-child(1) .iconfont{
					color:#779ff0;
				}
				&:nth-child(2) .iconfont{
					color:#ff3131;
				}
				&:nth-child(3) .iconfont{
					color:@color-theme;
				}
				&:nth-child(4) .iconfont{
					color:@color-hover;
				}
				&:nth-child(5) .iconfont{
					color:#1ca4f2;
				}
				.iconfont.icon-jinru{
					position: absolute;
					right:@box-margin;
					top:50%;
					transform:translateY(-50%);
					color:@color-gray-b;
					font-size:@font-size-large;
				}
			}
		}
		.m-logout{
			padding:@box-margin*2;
			background-color: @color-white;
			span{
				display: block;
				text-align: center;
				background-color:@color-theme;
				padding:0.3rem 0;
				border-radius: 0.6rem;
				color:@color-white;
				font-size:@font-size-medium-x;
			}
		}

	}
</style>