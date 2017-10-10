<template>
	<div class="m-log">
		<m-top>
			<span>浏览记录</span>
			<span class="delete"><i class="iconfont icon"></i></span>
		</m-top>
		<div class="log-wrapper">
			<scroll class="log-content">
				<div>
					<div class="content-hd">
						<ul class="hd-item">
							<li>日</li>
							<li>一</li>
							<li>二</li>
							<li>三</li>
							<li>四</li>
							<li>五</li>
							<li>六</li>
						</ul>
						<ul class="hd-item">
							<li>23</li>
							<li class="active">24</li>
							<li>25</li>
							<li>26</li>
							<li>27</li>
							<li>28</li>
							<li>29</li>
						</ul>
					</div>
					<div class="content-bd">
						<div class="bd-items">
							<h4 class="bd-title">7月24日</h4>
							<ul class="list-items">
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
							</ul>
						</div>
						<div class="bd-items">
							<h4 class="bd-title">7月23日</h4>
							<ul class="list-items">
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
							</ul>
						</div>
						<div class="bd-items">
							<h4 class="bd-title">7月22日</h4>
							<ul class="list-items">
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
								<li>
									<img src="/static/images/default.jpg" class="bd-img">
									<div class="title">
										<span class="price">￥666</span>
										<span class="more" @click="isMore = !isMore"><i class="iconfont icon-sangedian1"></i></span>
									</div>
								</li>
							</ul>
						</div>
						<div class="bd-button">点击查看更多浏览记录</div>
					</div>
				</div>
			</scroll>
		</div>
		<transition name="popup-slide">
			<popup v-show="isMore">
				<div class="popup-bottom">
					<div class="more-wrapper">
						<div class="popup-item">
							<i class="iconfont icon-wodeshoucang3"></i>
							<span>收藏</span>
						</div>
						<div class="popup-item">
							<i class="iconfont icon-gouwuche3"></i>
							<span>购物车</span>
						</div>
						<div class="popup-item">
							<i class="iconfont icon-shanchu1"></i>
							<span>删除</span>
						</div>
					</div>
					<div class="more-button" @click="isMore = !isMore">取消</div>
				</div>
			</popup>
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
				isMore:false
			}
		},
		components:{
			MTop,
			Scroll,
			Popup
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-log{
		.static-body;
		background-color: @color-gray-l;
		.log-wrapper{
			.static-position(bottom);
			top:@input-height;
			.log-content{
				.body-height;
			}
		}
	}

	.content-hd{
		padding:0.3rem 0;
		background-color: @color-white;
		.hd-item{
			display: flex;
			padding:0.1rem;
			justify-content:space-around;
			align-items:center;
			.active{
				width:0.6rem;
				height:0.6rem;
				text-align: center;
				line-height: 0.6rem;
				background-color: @color-theme;
				border-radius: 100%;
				color:@color-white;
				overflow: hidden;
			}
		}
	}
	.content-bd{
		.bd-items{
			.bd-title{
				background-color: @color-gray;
				padding:@box-margin;
				.iconfont{
					font-size: @font-size-medium-x;
				}
			}
			.list-items{
				background-color: @color-white;
				padding:@box-margin;
				display: flex;
				flex-wrap:wrap;
				li{
					width:32%;
					box-sizing: border-box;
					margin:0 0.05rem @box-margin;
					.bd-img{
						width:100%;
						border:@1px solid @color-gray-b;
						box-sizing: border-box;
					}
					.title{
						position: relative;
						.price{
							color:@color-hover;
							font-size:@font-size-small;
						}
						.more{
							position: absolute;
							right:0.1rem;
							top:50%;
							transform:translateY(-50%);
							letter-spacing: 0.03rem;
							.iconfont{
								font-size: @font-size-medium-x;
							}
						}
					}
				}
			}
		}

		.bd-button{
			padding:@box-margin;
			text-align: center;
			text-decoration: underline;
			color:@color-gray-b;
		}
	}



	.popup-bottom{
		display: flex;
		flex-direction:column;
		.more-wrapper{
			display: flex;
			justify-content:center;
			padding:@box-margin;
			box-sizing: border-box;
			background-color: @color-gray;
			.popup-item{
				display: flex;
				flex-direction:column;
				align-items:center;
				margin-right: @element-margin;
				color:#909090;
				.iconfont{
					font-size:0.8rem;
					padding:@element-margin @box-margin;
				}
			}
		}
		.more-button{
			height: @input-height;
			line-height: @input-height;
			background-color: @color-theme;
			text-align: center;
			color:@color-white;
			font-size: @font-size-medium-x;
			letter-spacing: 0.05rem;
		}
	}
</style>