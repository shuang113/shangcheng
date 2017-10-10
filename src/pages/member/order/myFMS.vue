<template>
	<div class="m-fms">
		<m-top>
			<span>物流详情</span>
		</m-top>
		<div class="fms-wrapper">
			<scroll class="fms-content" ref="scroll">
				<div>
					<div class="content-bd">
						<div class="bd-items">
							<img src="/static/images/default.jpg" class="bd-img">
							<div class="bd-infor">
								<p>物流状态：运送中</p>
								<p>承运快递：申通快递</p>
								<p>运单编号：88856329754</p>
							</div>
						</div>
						<div class="bd-items courier">
							<i class="iconfont icon-kuaidiyuan"></i>
							<div>
								<p>派送员</p>
								<p>快递小哥哥 13852693258</p>
							</div>
						</div>
						<div class="bd-items">
							<ul class="news">
								<li class="active">
									<p>已签收，签收是本人</p>
									<p class="time">2017-07-01 18:01:23</p>
								</li>
								<li>
									<p>【湖南长沙南区二部】的派件员（赵拉斯）正在派件</p>
									<p class="time">2017-07-01   18：01：23</p>
								</li>
								<li>
									<p>【湖南长沙南区二部】已收入</p>
									<p class="time">2017-07-01   18：01：23</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="content-fd">
						<div class="fd-title"><i class="iconfont icon-aixin"></i>猜你还喜欢</div>
						<ul class="fd-list">
							<li>
								<img src="/static/images/default.jpg" class="fd-img"  @load="loadImage">
								<h4>哪哪哪瑶皇玉液</h4>
								<div class="price">
									<span class="newPr">￥666</span>
									<del class="oldPr">￥999</del>
								</div>
							</li>
							<li>
								<img src="/static/images/default.jpg" class="fd-img"  @load="loadImage">
								<h4>潇湘红杨梅干红</h4>
								<div class="price">
									<span class="newPr">￥666</span>
									<del class="oldPr">￥999</del>
								</div>
							</li>
							<li>
								<img src="/static/images/default.jpg" class="fd-img"  @load="loadImage">
								<h4>哪哪哪瑶皇玉液</h4>
								<div class="price">
									<span class="newPr">￥666</span>
									<del class="oldPr">￥999</del>
								</div>
							</li>
							<li>
								<img src="/static/images/default.jpg" class="fd-img"  @load="loadImage">
								<h4>潇湘红杨梅干红</h4>
								<div class="price">
									<span class="newPr">￥666</span>
									<del class="oldPr">￥999</del>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</scroll>
		</div>
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	export default{
		data(){
			return{
				imgLoaded:false
			}
		},
		components:{
			MTop,
			Scroll
		},
		methods:{
			loadImage(){
				if(!this.imgLoaded){
					this.$refs.scroll.refresh()
					this.imgLoaded=true
				}
			}

		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-fms{
		.static-body;
		background-color: @color-gray-l;
		.fms-wrapper{
			.static-position(bottom);
			top:@input-height;
			.fms-content{
				.body-height;
			}
		}
	}
	.bd-items{
		display: flex;
		align-items:center;
		margin-top:@bottom-margin;
		background-color: @color-white;
		padding:@box-margin;
		.bd-img{
			width:1.8rem;
			height:1.8rem;
			margin-right: @element-margin;
		}
		.bd-infor{
			line-height: 1.6;
		}
		&.courier{
			.iconfont{
				color:@color-theme;
				margin-right: @element-margin;
				font-size:@font-size-large;
			}
		}
		.news{
			:last-child{
				border-left:@line-height solid @color-white;
			}
			li{
				position: relative;
				padding-bottom:@box-margin;
				padding-left:@element-margin;
				border-left:@line-height*2 solid @color-gray-b;
				&.active{
					color:@color-theme;
					&::after{
						background-color:@color-theme;
					}
				}
				&:after{
					content:'';
					position: absolute;
					top:-0.001rem;
					left:-0.19rem;
					width:0.32rem;
					height:0.32rem;
					background-color: @color-gray-b;
					border-radius: 100%;
					overflow: hidden;
				}
				.time{
					font-size:@font-size-small;
				}
			}
		}
	}
	.content-fd{
		.fd-title{
			height:@input-height;
			line-height: @input-height;
			text-align: center;
			position: relative;
			margin:0 @box-margin;
			&::before,&::after{
				content:'';
				position: absolute;
				top:50%;
				width:2.98rem;
				height:@line-height*2;
				background-color: @color-gray-b;
			}
			&::before{
				left:0;
			}
			&::after{
				right:0;
			}
			.iconfont{
				color:@color-hover;
				margin-right: @element-margin;
				font-size:@font-size-medium-x;
			}
		}
		.fd-list{
			background-color: @color-white;
			display: flex;
			flex-wrap:wrap;
			li{
				width:50%;
				text-align: center;
				padding:@box-margin;
				box-sizing: border-box;
				border-bottom:@line-height solid @color-gray;
				.fd-img{
					width:100%;
				}
				.price{
					color:@color-gray-b;
					.newPr{
						color:@color-hover;
					}
				}
			}
		}
	}
</style>