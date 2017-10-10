<template>
	<div class="m-coupon">
		<m-top>
			<span>我的优惠券</span>
		</m-top>
		<div class="coupon-wrapper">
			<scroll class="coupon-content">
				<div>
					<ul class="content-hd">
						<li class="active">未使用（3）</li>
						<li>已使用（5）</li>
						<li>已过期（10）</li>
					</ul>
					<div class="content-bd">
						<div class="bd-items">
							<div class="coupon">
								<span class="value"><i>￥</i>50</span>
								<span>满999元可用</span>
							</div>
							<div class="infor">
								<span class="range"><i>善券</i>仅可以在升级区购买</span>
								<span class="time">有效期：2017.07.15-2017.07.30</span>
								<span class="button">去使用</span>
							</div>
						</div>
						<div class="bd-items">
							<div class="coupon">
								<span class="value"><i>￥</i>50</span>
								<span>满999元可用</span>
							</div>
							<div class="infor">
								<span class="range"><i>善券</i>仅可以在升级区购买</span>
								<span class="time">有效期：2017.07.15-2017.07.30</span>
								<span class="button">去使用</span>
							</div>
						</div>
					</div>
					<div class="content-fd">
						<span>以上是近期获得的优惠券</span>
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
	.m-coupon{
		.static-body;
		background-color: @color-gray-l;
		.coupon-wrapper{
			.static-position(bottom);
			top:@input-height;
			.coupon-content{
				.body-height;
			}
		}
	}

	.content-hd{
		display: flex;
		justify-content:space-around;
		align-items:center;
		height: @input-height;
		background-color: @color-gray-l;
		.active{
			color:@color-theme;
		}
	}
	.content-bd{
		.bd-items{
			background-color: @color-white;
			padding:@box-margin;
			display: flex;
			margin-bottom: @bottom-margin;
			.coupon{
				flex:1;
				min-height: 2.39rem;
				padding-top:0.8rem;
				box-sizing: border-box;
				background:url('~@/pages/member/images/coupon-bg.png') no-repeat;
				background-size: contain;
				color:@color-white;
				display: flex;
				flex-direction:column;
				font-size:@font-size-small;
				text-align:center;
				margin-right: @element-margin;
				.value{
					font-size:@font-size-large;
					i{
						font-size:@font-size-medium;
					}
				}
			}
			.infor{
				flex:3;
				display: flex;
				flex-direction:column;
				.range{
					padding:0.2rem 0;
					border-bottom: @line-height solid @color-gray;
					i{
						padding:0.05rem 0.4rem;
						background-color: @color-theme;
						color:@color-white;
						border-radius: 0.1rem;
						margin-right: @element-margin;
					}
				}
				.time{
					padding:0.15rem 0;
				}
				.button{
					align-self:flex-end;
					padding:0.15rem 0.5rem;
					background-color: @color-theme;
					color:@color-white;
					border-radius: 0.5rem;
				}
			}
		}
	}
	.content-fd{
		padding:1rem 0;
		text-align: center;
		position: relative;
		color:@color-gray-b;
		background-color: @color-gray-l;
		&::before,&::after{
			content:'';
			position: absolute;
			top:50%;
			width:2.6rem;
			height:@line-height*2;
			background-color: @color-gray;
		}
		&::before{
			left:0;
		}
		&::after{
			right:0;
		}
	}
</style>