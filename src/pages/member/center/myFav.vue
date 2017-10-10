<template>
	<div class="m-fav">
		<m-top>
			<span>我的收藏</span>
		</m-top>
		<div class="fav-wrapper">
			<scroll class="fav-content">
				<div>
					<div class="content-hd">
						<div class="items active">收藏商品</div>
						<div class="items">收藏店铺</div>
					</div>
					<div class="content-bd">
						<div class="bd-items">
							<img src="" class="bd-img">
							<div class="bd-infor">
								<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
								<p class="sku">口味：草莓香草味 192g</p>
								<p class="pr">
									<span class="price">￥2000.00</span>
									<span class="button cancel" v-if="isFav" @click="isFav = !isFav">取消收藏</span>
									<span class="button addfav" v-if="!isFav" @click="isFav = !isFav">加入收藏</span>
								</p>
							</div>
						</div>
						<div class="bd-items">
							<img src="" class="bd-img">
							<div class="bd-infor">
								<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
								<p class="sku">口味：草莓香草味 192g</p>
								<p class="pr">
									<span class="price">￥2000.00</span>
									<span class="button cancel">取消收藏</span>
								</p>
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
		data(){
			return{
				isFav:false
			}
		},
		components:{
			MTop,
			Scroll
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-fav{
		.static-position(top);
		bottom:1.59rem;
		background-color: @color-white;
		.fav-wrapper{
			.static-position(bottom);
			top:@input-height;
			.fav-content{
				.body-height;
			}
		}
	}
	.content-hd{
		display: flex;
		justify-content:center;
		align-items:center;
		height: @input-height;
		border-bottom:@box-margin solid @color-gray;
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
		.bd-items{
			.products-profile;
			background-color: @color-white;
			border-bottom:@line-height solid @color-gray;
			.price{
				display: inline-block;
				color:@color-hover;
				height:@title-height*0.7;
				line-height:@title-height*0.7; 
			}
			.button{
				position: absolute;
				right:0;
				width:@title-height*2;
				height:@title-height*0.7;
				line-height:@title-height*0.6;
				text-align: center;
				border:@line-height solid @color-theme;
				color:@color-theme;
				border-radius: @title-height/2;
				font-size:@font-size-small;
				box-sizing: border-box;
			}
		}
	}
</style>