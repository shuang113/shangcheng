<template>
	<div class="m-code">
		<m-top>
			<span>分享二维码</span>
		</m-top>
		<div class="code-wrapper">
			<scroll class="code-content">
				<div>
					<div class="content-hd">
						<h4>可选二维码</h4>
						<ul class="list-items">
							<li class="active">
								<img src="/static/images/default.jpg" class="hd-img">
								<i class="iconfont icon-mark-right-top"></i>
							</li>
							<li>
								<img src="/static/images/default.jpg" class="hd-img">
								<i class="iconfont icon-mark-right-top"></i>
							</li>
							<li>
								<img src="/static/images/default.jpg" class="hd-img">
								<i class="iconfont icon-mark-right-top"></i>
							</li>
						</ul>
					</div>
					<div class="content-bd">
						<div class="bd-items">
							<div class="bd-title">
								<img src="/static/images/default.jpg" class="bd-img">
								<p class="name">
									<span>我是伯乐<strong>女王大人</strong></span>
									<span>我为<em>近善城</em>代言</span>
								</p>
							</div>
							<img src="/static/images/default.jpg" class="bd-code">
							<div class="bd-tips">我的二维码名片</div>
						</div>
						<div class="fd-line">
							<div class="fd-img">&nbsp;</div>
						</div>
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
		components:{
			MTop,
			Scroll
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-code{
		.static-body;
		background-color: @color-gray-l;
		.code-wrapper{
			.static-position(bottom);
			top:@input-height;
			.code-content{
				.body-height;
			}
		}
	}

	.content-hd{
		padding:@bottom-margin;
		background-color: @color-white;
		.list-items{
			margin:0.2rem 0;
			display: flex;
			justify-content:space-around;
			li{
				width:2.4rem;
				height:2.4rem;
				position: relative;
				overflow: hidden;
				.hd-img{
					width: 100%;
				}
				&.active{
					.iconfont{
						display: block;
					}
				}
				.iconfont{
					display: none;
					position: absolute;
					right:-0.03rem;
					top:-0.16rem;
					font-size:@font-size-large;
					color:@color-theme;
				}
			}
		}
	}
	.content-bd{
		width:8rem;
		margin: 0.8rem auto;
		.bd-items{
			display: flex;
			flex-direction:column;
			align-items:center;
			justify-content:center;
			box-shadow: 0 0 0.6rem rgba(0,0,0,0.06);
			background-color: @color-white;
			box-sizing: border-box;
			padding:0.8rem 0;
			.bd-title{
				display: flex;
				align-items:center;
				justify-content:center;
				.bd-img{
					flex:0 0 1rem;
					width:1rem;
					height:1rem;
					border-radius: 50%;
					overflow: hidden;
					margin-right: @element-margin;
				}
				.name{
					display: flex;
					flex-direction:column;
					strong{
						font-weight: 700;
						color:#000;
					}
					em{
						color:@color-theme;
					}
				}
			}
			.bd-code{
				width:5rem;
				height:5rem;
				margin:0.5rem 0;
			}
			.bd-tips{
				margin-top:2rem;
				text-align: center;
				font-size:@font-size-medium-x;
				color:#000;
			}			
		}
		.fd-line{
			overflow: hidden;
			height:1rem;
			width:100%;
			padding:0 0.2rem;
			margin:-3rem -0.2rem 0 -0.2rem;
			.fd-img{
				position: relative;
				height:1rem;
				margin:0 0.435rem;
				background:url('~@/pages/member/images/code-bg.png') no-repeat;
				background-size:contain;
				&::before{
					content:'';
					position: absolute;
					top:0;
					left:-0.87rem;
					width:0.87rem;
					height:0.87rem;
					background-color: @color-gray-l;
					box-shadow: 0 0 0.6rem rgba(0,0,0,0.04) inset;
					border-radius: 100%;
				}
				&::after{
					content:'';
					position: absolute;
					top:0;
					right:-0.87rem;
					width:0.87rem;
					height:0.87rem;
					background-color: @color-gray-l;
					box-shadow: 0 0 0.6rem rgba(0,0,0,0.04) inset;
					border-radius: 100%;
				}
			}
		}
	}

</style>