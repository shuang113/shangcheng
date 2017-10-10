<template>
	<div class="m-detail-page">
		<m-top>
			<span>商品详情</span>
			<div class="right">
				<i class="iconfont icon-shoucang"></i>
				<i class="iconfont icon-fenxiang"></i>
			</div>
		</m-top>
		<ul class="hd-tab">
			<li class="active">商品介绍</li>
			<li>图文详情</li>
			<li>商品评价</li>
			<li>相关推荐</li>
		</ul>
		<div class="detail-page-wrapper">
			<scroll class="detail-page-content" ref="scroll">
				<div>
					<div class="content-items">
						<slider>
							<div v-for="item in banners">
								<a :href="item.linkUrl">
									<img class="needsclick" :src="item.picUrl">
								</a>
							</div>
						</slider>
						<div class="content-hd">
							<h3 class="title">靖州杨梅干红</h3>
							<p class="desc">千年时光，天地养生</p>
							<div class="price">￥988</div>
						</div>
						<!-- 秒杀 -->
						<div class="bars seckill">
							<div class="title">秒杀抢购</div>
							<div class="right">
								<span>本场结束剩余</span>
								<div class="time">
									<span class="hour">00</span>
									<span class="min">26</span>
									<span class="second">30</span>
								</div>
							</div>
						</div>
					</div>
					<!-- 优惠券 -->
					<div class="content-items coupon">
						<div class="bars">
							<span>店铺优惠券</span>
							<span class="title">领取优惠券</span>
							<span class="tips">满200减50，满300减100</span>
							<span class="right"><i class="iconfont icon-jinru"></i></span>
						</div>
					</div>
					<!-- 服务说明/参数/选择规格 -->
					<div class="content-items infor">
						<div class="bars service">
							<div class="title">服务说明</div>
							<div class="right">
								<i class="iconfont icon-dui1"></i>
								<span>无忧退货</span>
								<i class="iconfont icon-dui1"></i>
								<span>免费包邮</span>
								<i class="iconfont icon-jinru"></i>
							</div>
						</div>
						<div class="bars parameter">
							<div class="title">商品参数</div>
							<div class="right">查看<i class="iconfont icon-jinru"></i></div>
						</div>
						<div class="bars sku">
							<div class="title">选择规格</div>
							<div class="right">年份/净含量<i class="iconfont icon-jinru"></i></div>
						</div>
					</div>
					<!-- 详情 -->
					<div class="content-items detail">
						<h3 class="header">图文详情</h3>
						<p>杨梅干红是哪哪哪的主打产品系列之一，我们拥有其自主知识产权“杨梅酒及酿造方法”和国内首创的“杨梅果醋及生产工艺”两项技术均获得国家发明专利。产自于湖南安化靖州八万亩杨梅林。</p>
						<img src="/static/images/default.jpg">
					</div>
					<!-- 评价 -->
					<div class="content-items rating">
						<h3 class="header">商品评价（122）</h3>
						<div class="rate-items">
							<div class="user">
								<img src="/static/images/default.jpg" class="avatar">
								<span>女王大大</span>
							</div>
							<div class="message">
								<p>正宗黑茶，值得拥有；正宗黑茶，值得拥有；正宗黑茶，值得拥有；正宗黑茶，值得拥有；正宗黑茶，值得拥有……</p>
							</div>
							<div class="time">
								<span>2017-09-05</span>
								<span>年份：82</span>
								<span>净含量：500ml</span>
							</div>
						</div>
						<div class="more">
							<span class="button">查看全部评价</span>
						</div>
					</div>
					<!-- 相关推荐 -->
					<div class="content-items recommend">
						<h3 class="header">相关推荐</h3>
						<scroll class="recommend-content" ref="recommend" :scrollX="true">
							<ul class="recommend-list" ref="list">
								<li>
									<img src="/static/images/default.jpg" class="rec-img" @load="loadImage">
									<h4 class="title">靖州杨梅干红</h4>
									<p class="desc">千年时光，天地养生</p>
									<p class="price">￥988</p>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="rec-img" @load="loadImage">
									<h4 class="title">靖州杨梅干红</h4>
									<p class="desc">千年时光，天地养生</p>
									<p class="price">￥988</p>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="rec-img" @load="loadImage">
									<h4 class="title">靖州杨梅干红</h4>
									<p class="desc">千年时光，天地养生</p>
									<p class="price">￥988</p>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="rec-img" @load="loadImage">
									<h4 class="title">靖州杨梅干红</h4>
									<p class="desc">千年时光，天地养生</p>
									<p class="price">￥988</p>
								</li>
							</ul>
						</scroll>
					</div>
					<!-- 商家信息 -->
					<div class="content-items shop">
						<h3 class="header">商家信息</h3>
						<div class="bars">
							<img src="/static/images/default.jpg" class="logo">
							<div>
								<p>安化正宗黑茶旗舰店</p>
								<p>哪哪哪自营店</p>
							</div>
							<div class="right">
								<span>100件商品</span>
								<i class="iconfont icon-jinru"></i>
							</div>
						</div>
					</div>
					<!-- 上拉刷新 -->
					<div class="content-fd">
						<i class="iconfont icon-wangshangla"></i>
						上拉查看图文详情
					</div>
				</div>
			</scroll>
		</div>
		<div class="detail-footer">
			<div class="link-group">
				<div class="link">
					<i class="iconfont icon-kefu"></i>
					客服
				</div>
				<div class="link">
					<i class="iconfont icon-gouwuche3"></i>
					购物车
				</div>
				<div class="link">
					<i class="iconfont icon-wodeshoucang3"></i>
					收藏
				</div>
			</div>
			<div class="button-group">
				<div class="button addcart">加入购物车</div>
				<div class="button gobuy">立即购买</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	import Slider from '@/components/common/slider'
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
				]
			}
		},
		components:{
			MTop,
			Scroll,
			Slider
		},
		methods:{
			_scrollWidth(){
				let aUl =this.$refs.list
				let child = aUl.children
				let scrollWith = child[0].offsetWidth * child.length
				aUl.style.width = scrollWith + 'px'
			},
			loadImage(){
				if(!this.imgLoaded){
					this.$refs.scroll.refresh()
					this.imgLoaded=true
					this._scrollWidth()
					this.$refs.recommend.refresh()
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-detail-page{
		.static-body;
		background-color: @color-white;
		.detail-page-wrapper{
			.static-position(bottom);
			top:@input-height + @title-height;
			bottom:@input-height;
			.detail-page-content{
				.body-height;
			}
		}
	}
	.m-top{
		.right{
			position: absolute;
			right:@box-margin;
			display: flex;
			.iconfont{
				font-size:0.5rem;
				padding:0 0.15rem;
			}
		}
	}


	.hd-tab{
		height: @title-height;
		display: flex;
		align-items:center;
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

	.content-items{
		position: relative;
		border-bottom:@box-margin solid @color-gray;
		.content-hd{
			display: flex;
			flex-direction:column;
			align-items:center;
			padding:@box-margin;
			.title{
				font-size: @font-size-medium-x;
			}
			.desc{
				color:@color-gray-b;
			}
			.price{
				color:@color-theme;
			}
		}
		.header{
			font-size: @font-size-medium-x;
			color:@color-text;
			height: @title-height;
			line-height: @title-height;
			text-align:center;
		}
		.bars{
			height: @input-height;
			display: flex;
			align-items:center;
			border-bottom:@line-height solid @color-gray;
			.title{
				font-size: @font-size-medium-x;
				padding-left: @box-margin;
			}
			.right{
				position: absolute;
				right:@box-margin;
			}
			.countdown{
				display: flex;
			}
			.iconfont{
				font-size:@font-size-medium-x;
			}
		}
	}
	// 秒杀
	.seckill{
		border-top:@line-height solid @color-gray;
		display: flex;
		align-items:center;
		.right{
			display: flex;
		}
	}
	// 优惠券
	.coupon{
		padding-left:@box-margin;
		.title{
			padding:0 @element-margin;
		}
		.tips{
			color:@color-gray-b;
			font-size: @font-size-small;
		}
	}
	// 服务说明
	.service{
		.icon-dui1{
			color:@color-theme;
		}
	}
	// 详情
	.detail{
		padding:@box-margin;
		line-height: 1.6;
		img{
			margin:@element-margin 0;
		}
	}
	// 评价
	.rating{
		padding:@box-margin;
		.rate-items{
			margin-bottom: @box-margin;
			.user{
				display: flex;
				align-items:center;
				margin-bottom: @element-margin;
				.avatar{
					width:1rem;
					height: 1rem;
					border-radius: 100%;
					margin-right: @element-margin;
				}
			}
			.time{
				margin-top: @element-margin;
				color:@color-gray-b;
			}
		}
		.more{
			text-align:center;
			.button{
				display: inline-block;
				padding:0.2rem 0.5rem;
				color:@color-theme;
				border:@line-height solid @color-theme;
				border-radius: 0.5rem;
			}
		}
	}
	// 推荐
	.recommend{
		padding:@box-margin;
		.recommend-wrapper{
			.recommend-content{
				width:100%;
				overflow: hidden;
			}
		}
		.recommend-list{
			margin-top:@box-margin;
			display: flex;
			li{
				flex:0 0 4rem;
				padding:0 0.1rem;
				box-sizing: border-box;
				text-align:center;
				.title{
					font-size: @font-size-medium-x;
				}
				.desc{
					color:@color-gray-b;
				}
				.price{
					color:@color-theme;
				}
			}
		}
	}
	// 商品信息
	.shop{
		padding:@box-margin;
		.bars{
			display: flex;
			align-items:center;
			border-bottom:none;
			.logo{
				width:1rem;
				height: 1rem;
				margin-right: @element-margin;
			}
		}
	}
	.content-fd{
		display: flex;
		justify-content:center;
		padding:@box-margin;
		.iconfont{
			font-size: @font-size-medium-x;
		}
	}

	.detail-footer{
		.static-position(bottom);
		display: flex;
		align-items:center;
		height:@input-height;
		border-top:@line-height solid @color-gray;
		.link-group{
			flex:1;
			display: flex;
			.link{
				flex:1;
				display: flex;
				flex-direction:column;
				align-items:center;
			}
		}
		.button-group{
			flex:1;
			display: flex;
			align-items:center;
			.button{
				flex:1;
				text-align: center;
				color:@color-white;
				line-height: @input-height;
			}
			.addcart{
				background-color:@color-hover;
			}
			.gobuy{
				background-color:@color-theme;
			}
		}
	}
</style>