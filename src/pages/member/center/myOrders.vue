<template>
	<div class="m-orders">
		<m-top>
			<span>善客订单（20）</span>
		</m-top>
		<ul class="content-hd">
			<li class="active">所有订单</li>
			<li>待付款</li>
			<li>已付款</li>
			<li>已完成</li>
		</ul>
		<div class="orders-wrapper">
			<scroll class="orders-content">
				<div>
					<div class="content-bd">
						<div class="bd-items active">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status success">已完成</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status waiting">待付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status">已付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status">已付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status">已付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status">已付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status">已付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status">已付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
						<div class="bd-items">
							<div class="list">
								<span>凹凸曼(用户等级) 微信号：17050340025</span>
								<span class="status">已付款</span>
							</div>
							<div class="content">
								<img src="" class="bd-img">
								<div class="infor">
									<span>杨梅干红 <i>x5</i></span>
									<span>订单号：132562569845</span>
									<span>时间：2017-03-22 <i class="income">预计佣金：+200</i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<div class="content-fd">
			预计：+200
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
	.m-orders{
		.static-position(top);
		bottom:1.59rem;
		background-color: @color-white;
		.orders-wrapper{
			.static-position(top);
			top:2.38rem;
			bottom:2.59rem;
			.orders-content{
				.body-height;
			}
		}
		.m-top .title-link{
			text-decoration: none;
		}
		.content-hd{
			display: flex;
			padding:0 @box-margin;
			border-bottom:@line-height solid @color-gray;
			li{
				width:25%;
				text-align: center;
				height: @title-height;
				line-height: @title-height;
				&.active{
					color:@color-theme;
					border-bottom:@line-height solid @color-theme;
				}
			}
		}
		.bd-items{
			display: flex;
			flex-direction:column;
			&.active{
				.content{
					display: flex;
				}
			}
			.list{
				padding:@box-margin;
				border-bottom:@line-height solid @color-gray;
				.status{
					position: absolute;
					right:@box-margin;
					&.success{
						color:@color-theme;
					}
					&.waiting{
						color:@color-hover;
					}
				}
			}
			.content{
				display:none;
				align-items:center;
				padding:@box-margin;
				background-color: @color-gray;
				position: relative;
				.bd-img{
					width:1.5rem;
					height:1.5rem;
					margin-right: @element-margin;
				}
				.infor{
					display: flex;
					flex-direction:column;
					line-height: 1.6;
					.income{
						position: absolute;
						right:@box-margin;
					}
				}
			}
		}
		.content-fd{
			.static-position(bottom);
			bottom:1.59rem;
			padding-right:@box-margin;
			left:auto;
			height: @title-height;
			line-height: @title-height;
			text-align: right;
			box-sizing: border-box;
			background-color: @color-theme;
			color:@color-white;
			font-size:@font-size-medium-x;
		}
	}
</style>