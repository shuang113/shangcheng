<template>
	<div class="m-cart">
		<m-top>
			<span>购物车</span>
		</m-top>
		<div v-if="!isCart">
			<div class="cart-wrapper">
				<scroll class="cart-content" ref="scroll">
					<div>
						<div class="content-items">
							<div class="content-hd">
								<span class="check-item" :class="{'active':isChecked}">
									<i class="iconfont" 
								:class="[isChecked ===true ? 'icon-dui1' : 'icon-xuanzequan']"
								@click="isChecked = !isChecked"></i>
								</span>
								<span class="hd-title">自营区升级专用<i class="iconfont icon-jinru"></i></span>
								<span class="state" @click="isEdit = !isEdit" v-show="!isEdit">编辑</span>
								<span class="state" @click="isEdit = !isEdit" v-show="isEdit">完成</span>
							</div>
							<div class="content-bd">
								<div class="bd-item" @click="routerTo('/member/mycenter/mycart/detail')">
									<span class="check-item" :class="{'active':isChecked}">
										<i class="iconfont" 
									:class="[isChecked ===true ? 'icon-dui1' : 'icon-xuanzequan']"
									@click="isChecked = !isChecked"></i>
									</span>
									<img src="" class="bd-img">
									<div class="bd-infor">
										<div v-show="!isEdit">
											<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
											<p class="sku">升级区（红酒）</p>
											<div class="bd-price">
												<span class="newPr">￥666.00</span>
												<del class="oldPr">￥1999.00</del>
												<span class="num">x 1</span>
											</div>
										</div>
										<div class="infor-box" v-show="isEdit">
											<div class="number">
												<div class="reduce"><i class="iconfont icon-jianhao"></i></div>
												<input type="text" placeholder="1" value="1">
												<div class="reduce"><i class="iconfont icon-jiahao"></i></div>
											</div>
											<div class="button">
												<span>删除</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="content-items">
							<div class="content-hd">
								<span class="check-item">
									<i class="iconfont icon-xuanzequan"></i>
								</span>
								<span class="hd-title">自营区升级专用<i class="iconfont icon-jinru"></i></span><span class="state">编辑</span>
							</div>
							<div class="content-bd">
								<div class="bd-item">
									<span class="check-item">
										<i class="iconfont icon-xuanzequan"></i>
									</span>
									<img src="" class="bd-img">
									<div class="bd-infor">
										<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
										<p class="sku">升级区（红酒）</p>
										<div class="bd-price">
											<span class="newPr">￥666.00</span>
											<del class="oldPr">￥1999.00</del>
											<span class="num">x 1</span>
										</div>
									</div>
								</div>
								<div class="bd-item">
									<span class="check-item">
										<i class="iconfont icon-xuanzequan"></i>
									</span>
									<img src="" class="bd-img">
									<div class="bd-infor">
										<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
										<p class="sku">升级区（红酒）</p>
										<div class="bd-price">
											<span class="newPr">￥666.00</span>
											<del class="oldPr">￥1999.00</del>
											<span class="num">x 1</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="content-items">
							<div class="content-hd">
								<span class="check-item">
									<i class="iconfont icon-xuanzequan"></i>
								</span>
								<span class="hd-title">自营区升级专用<i class="iconfont icon-jinru"></i></span><span class="state">编辑</span>
							</div>
							<div class="content-bd">
								<div class="bd-item">
									<span class="check-item">
										<i class="iconfont icon-xuanzequan"></i>
									</span>
									<img src="" class="bd-img">
									<div class="bd-infor">
										<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
										<p class="sku">升级区（红酒）</p>
										<div class="bd-price">
											<span class="newPr">￥666.00</span>
											<del class="oldPr">￥1999.00</del>
											<span class="num">x 1</span>
										</div>
									</div>
								</div>
								<div class="bd-item">
									<span class="check-item">
										<i class="iconfont icon-xuanzequan"></i>
									</span>
									<img src="" class="bd-img">
									<div class="bd-infor">
										<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
										<p class="sku">升级区（红酒）</p>
										<div class="bd-price">
											<span class="newPr">￥666.00</span>
											<del class="oldPr">￥1999.00</del>
											<span class="num">x 1</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</scroll>
			</div>
			<div class="content-fd">
				<div class="check-item">
					<i class="iconfont icon-xuanzequan"></i>
					全选
				</div>
				<div class="price">
					<div class="total">合计：<i>￥2000</i><br>(不含运费)</div>
					<div class="button" @click="routerTo('/member/mycenter/mycart/submitorder')">结算 ( 10 ) </div>
				</div>
			</div>
		</div>
		<div class="cart-empty-wrapper" v-if="isCart">
			<div class="cart-empty">
				<img src="../images/cart.png" class="icon-img">
				<span class="tips">购物车空空如也~</span>
				<span class="again">去随便逛逛吧</span>
			</div>
		</div>
		<transition name="router-slide">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	export default{
		data(){
			return{
				isCart:false,
				isChecked:false,
				isEdit:false
			}
		},
		components:{
			MTop,
			Scroll
		},
		methods:{
			routerTo(url){
				this.$router.push(url)
			}
		},
		created(){
			this.$nextTick(() => {
				this.$refs.scroll.refresh()
			})
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-cart{
		.static-position(top);
		bottom:1.59rem;
		background-color: @color-gray-l;
		.cart-wrapper{
			.static-position(bottom);
			top:@input-height;
			bottom:2.97rem;
			.cart-content{
				.body-height;
			}
		}
	}
	.check-item{
		margin-right: @element-margin;
		&.active{
			.iconfont{
				color:@color-theme;
			}
		}
		.iconfont{
			font-size: 0.45rem;
			color:#b5b5b5;
		}
	}
	.content-items{
		background-color: @color-white;
		margin-bottom: @bottom-margin;
		.content-hd{
			display: flex;
			align-items:center;
			padding:0 @box-margin;
			height:@title-height;
			line-height: @title-height;
			position: relative;
			border-bottom:@line-height solid @color-gray;
			.hd-title{
				vertical-align: middle;
				.iconfont{
					font-size: @font-size-medium;
				}
			}
			.state{
				position: absolute;
				right:@box-margin;
				top:0;
				height: 100%;
			}
		}
		.content-bd{
			.bd-item{
				.products-profile;
				background-color: @color-white;
				border-bottom:@line-height solid @color-gray;
				position: relative;
				.bd-infor{
					margin-right: 0;
					.infor-box{
						display: flex;
						justify-content:flex-end;
						align-items:center;
						position: absolute;
						right:0;
						top:0;
						height: 100%;
						.button{
							display: flex;
							align-items:center;
							padding:0 0.3rem;
							height: 100%;
							box-sizing: border-box;
							margin-left:@box-margin*2;
							background-color: @color-theme;
							color:@color-white;
						}
					}
					.title{
						-webkit-line-clamp: 2;
					}
					.number{
						display: flex;
						justify-content:center;
						input{
							width:1.5rem;
							text-align: center;
							font-size: @font-size-medium-x;
						}
						.iconfont{
							font-size:@font-size-medium;
							padding:0.1rem 0.15rem;
							background-color: @color-gray;
						}
					}
				}
				.bd-price{
					display: flex;
					font-size: @font-size-small;
					color:@color-gray-b;
					position: relative;
					.newPr{
						color:@color-hover;
						margin-right: @element-margin;
					}
					.num{
						position: absolute;
						right:0;
					}
				}
			}
		}
	}
	.content-fd{
		.static-position(bottom);
		bottom:1.58rem;
		height:@input-height;
		display: flex;
		align-items:center;
		padding:0 @box-margin;
		box-sizing: border-box;
		border-top:@line-height solid @color-gray;
		background-color: @color-white;
		.price{
			position: absolute;
			right:0;
			display: flex;
			align-items:center;
			.total{
				margin-right:@element-margin;
				i{
					color:@color-hover;
				}
			}
		}
		.button{
			height:@input-height;
			line-height: @input-height;
			background-color: @color-theme;
			color:@color-white;
			width:3rem;
			text-align: center;
		}
	}
	.cart-empty-wrapper{
		.static-position(bottom);
		top:@input-height;
		bottom:1.59rem;
		background-color: @color-white;
		.cart-empty{
			display: flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			transform:translateY(50%);
			.icon-img{
				width:3rem;
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

</style>