<template>
	<div class="m-address">
		<m-top>
			<span>收货地址修改</span>
		</m-top>
		<scroll class="list-address">
			<div class="addr-item">
				<div class="name">
					<span>我的名字是大王</span>
					<span class="tel">13698521478</span>
				</div>
				<div class="addr">湖南省长沙市万家丽路万家丽广场1501室</div>
				<div class="control">
					<div class="cancel"><i class="iconfont icon-quxiao"></i>取消</div>
					<div class="edit" @click="routerTo('/member/myaddress/edit')"><i class="iconfont icon-bianji"></i>编辑</div>
				</div>
			</div>
			<div class="addr-item">
				<div class="name">
					<span>大小王</span>
					<span>13698521478</span>
				</div>
				<div class="addr">湖南省长沙市万家丽路万家丽广场1501室</div>
				<div class="control">
					<div class="cancel"><i class="iconfont icon-quxiao"></i>取消</div>
					<div class="edit"><i class="iconfont icon-bianji"></i>编辑</div>
				</div>
			</div>
		</scroll>
		<transition name="router-slide">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import Scroll from '@/components/common/scroll'
	import MTop from '@/components/member/top'
	
	export default{
		components:{
			Scroll,
			MTop
		},
		methods:{
			routerTo(url){
				this.$router.push(url)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';

	.m-address{
		.static-body;
		background-color: @color-gray-l;
		.list-address{
			.body-height;
			.addr-item{
				background-color: @color-white;
				border-bottom:@bottom-margin solid @color-gray;
				.name{
					position: relative;
					padding:@box-margin @box-margin @box-margin/2;
					.tel{
						position: absolute;
						right:@box-margin;
						top:50%;
						transform:translateY(-50%)
					}
				}
				.addr{
					padding:@box-margin/2 @box-margin @box-margin;
					border-bottom:@1px solid @color-gray;
				}
				.control{
					display: flex;
					justify-content:flex-end;
					padding:@box-margin/2 @box-margin;
					.cancel{
						margin-right: @box-margin;
					}
					.iconfont{
						margin-right: @box-margin/4;
						font-size:@font-size-medium-x;
					}
				}
			}
		}
	}
</style>