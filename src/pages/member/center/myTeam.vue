<template>
	<div class="m-team">
		<m-top>
			<span>我的团队(10)</span>
		</m-top>
		<div class="team-wrapper">
			<scroll class="team-content">
				<div>
					<div class="content-hd">
						<div class="items active">一级（30）</div>
						<div class="items">二级（10）</div>
					</div>
					<div class="content-bd">
						<div class="bd-menu">
							<span>成员信息</span>
							<span class="tips">他的佣金/成员</span>
						</div>
						<div class="list-items">
							<div class="bd-items">
								<img src="" class="bd-img">
								<div class="bd-infor">
									<span class="name">凹凸慢慢<i class="vip">黄金善客</i></span>
									<span>2017-07-11 16:34</span>
								</div>
								<div class="tips-items">
									<span>佣金：2000</span>
									<span>12个成员</span>
								</div>
							</div>
						</div>
						<div class="list-items">
							<div class="bd-items">
								<img src="" class="bd-img">
								<div class="bd-infor">
									<span class="name">凹凸慢慢<i class="vip">黄金善客</i></span>
									<span>2017-07-11 16:34</span>
								</div>
								<div class="tips-items">
									<span>佣金：20000000</span>
									<span>12个成员</span>
								</div>
							</div>
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
	.m-team{
		.static-position(top);
		bottom:1.59rem;
		background-color: @color-white;
		.team-wrapper{
			.static-position(top);
			top:@input-height;
			bottom:1.59rem;
			.team-content{
				.body-height;
			}
		}
	}
	.content-hd{
		display: flex;
		justify-content:center;
		align-items:center;
		height: @input-height;
		.items{
			box-sizing: border-box;
			padding:@bottom-margin/2 @box-margin;
			border-bottom:@line-height*2 solid @color-gray;
			&.active{
				color:@color-theme;
				border-color:@color-theme;
			}
		}
	}
	.content-bd{
		.bd-menu{
			padding:@bottom-margin;
			position: relative;
			border-bottom:@line-height solid @color-gray;
			.tips{
				position: absolute;
				right:@box-margin;
			}
		}
		.list-items{
			border-bottom:@line-height solid @color-gray;
			.bd-items{
				display: flex;
				align-items:center;
				padding:@bottom-margin;
				margin:0.1rem 0;
				background-color: @color-gray-l;
				.bd-img{
					flex:0 0 1.17rem;
					width:1.17rem;
					height:1.17rem;
					margin-right: @element-margin;
				}
				.bd-infor{
					flex:1.5;
					display: flex;
					flex-direction:column;
					.vip{
						padding:0.03rem 0.4rem;
						background-color: @color-theme;
						border-radius: 0.5rem;
						color:@color-white;
						margin-left:@element-margin;
						font-size:@font-size-small;
					}
				}
				.tips-items{
					flex:1;
					display: flex;
					flex-direction:column;
					align-items:flex-end;
				}
			}
		}
	}
</style>