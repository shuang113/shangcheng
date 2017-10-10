<template>
	<div class="m-apply-refund">
		<m-top>
			<span>申请退款</span>
		</m-top>
		<div class="refund-wrapper">
			<scroll class="refund-content">
				<div>
					<div class="content-hd">
						<img src="" class="bd-img">
						<div class="bd-infor">
							<h3 class="title">黑茶是湖南哪哪哪网络科技有限公司主打产品之一，产自湖南安化，安化黑茶有着“世界茶王”</h3>
							<p class="sku">口味：草莓香草味 192g</p>
						</div>
					</div>
					<div class="content-bd">
						<div class="bd-item">
							<span class="chsbtn" @click="isCate = !isCate">请选择<i class="iconfont icon-jinru"></i></span>
							<p class="title">退款类型：</p>
							<p class="result"></p>
						</div>
						<div class="bd-item">
							<span class="chsbtn" @click="isReason = !isReason">请选择<i class="iconfont icon-jinru"></i></span>
							<p class="title">退款原因：</p>
							<p class="result"></p>
						</div>
						<div class="bd-item">
							<span class="title">退款金额：</span>
							<input type="text" placeholder="￥666.00" class="price">
						</div>
						<div class="bd-item tips">
							<span>最多￥666，含发货邮费￥0.00</span>
						</div>
						<div class="bd-item">
							<label>退款说明：</label>
							<input type="text" placeholder="选填">
						</div>
						<div class="bd-item">
							<label>上传凭证：</label>
							<div class="upload">
								<i class="iconfont icon-xiangji"></i>
								<span>上传凭证</span>
								<span>( 最多4张 )</span>
							</div>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<div class="content-fd">
			<span>提交</span>
		</div>
		<transition name="popup-slide">
			<popup v-show="isCate">
				<div class="popup-bottom">
					<h3 class="bottom-title">退款类型</h3>
					<div class="bottom-items active">
						<i class="iconfont icon-dui"></i>
						<span>退货退款<b>（已收到货，需要退还已收到的货物）</b></span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>仅退款<b>（未收到货，与卖家协商同意前提下申请）</b></span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>换货<b>（对收到的货物不满意，联系卖家协商换货）</b></span>
					</div>
					<div class="bottom-submit" @click="cateTo">
						<span>确定</span>
					</div>
				</div>
			</popup>
		</transition>
		<transition name="popup-slide">
			<popup v-show="isReason">
				<div class="popup-bottom">
					<h3 class="bottom-title">退款原因</h3>
					<div class="bottom-items">
						<i class="iconfont icon-dui active"></i>
						<span>拍错/多拍/不想要</span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>协商一致退款</b></span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>商品不足</b></span>
					</div>
					<div class="bottom-items">
						<i class="iconfont icon-dui"></i>
						<span>其他</b></span>
					</div>
					<div class="bottom-submit" @click="reasonTo">
						<span>确定</span>
					</div>
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
				isCate:false,
				isReason:false
			}
		},
		methods:{
			cateTo(e){
				this.isCate = !this.isCate
			},
			reasonTo(){
				this.isReason = !this.isReason
			}
		},
		components:{
			Scroll,
			MTop,
			Popup
		}

	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';

	.m-apply-refund{
		.static-body;
		background-color: @color-gray-l;
		.refund-wrapper{
			.static-position(bottom);
			top:@input-height;
			bottom:@input-height;
			.refund-content{
				.body-height;
			}
		}
	}
	.content-hd{
		.products-profile;
		background-color:@color-white;
	}
	.content-bd{
		.bd-item{
			background-color: @color-white;
			margin-top:@bottom-margin;
			padding:@box-margin;
			.chsbtn{
				color:@color-gray-b;
				position: absolute;
				right:@box-margin/2;
				.iconfont{
					font-size: @font-size-medium-x;
				}
			}
			.price{
				&::-webkit-input-placeholder{
					color:@color-hover;
					font-weight: 700;
				}
			}
			&.tips{
				background-color: @color-gray;
				color:@color-gray-b;
				padding:@box-margin - @bottom-margin  @box-margin;
			}
			.upload{
				width:2.14rem;
				height: 2.14rem;
				border:@1px*2 dashed @color-gray-b;
				margin-top:0.2rem;
				display: flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				color:@color-gray-b;
				font-size:@font-size-small;
				.iconfont{
					font-size:@font-size-large;
				}
			}
		}
	}
	.content-fd{
		.static-position(bottom);
		height:@input-height;
		line-height: @input-height;
		background-color: @color-theme;
		color:@color-white;
		text-align: center;
		font-size:@font-size-medium-x;
	}

</style>