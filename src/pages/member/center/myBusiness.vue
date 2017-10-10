<template>
	<div class="m-business">
		<m-top>
			<span>联盟商家申请</span>
		</m-top>
		<div class="business-wrapper">
			<scroll class="business-content" ref="scroll" :data="dataArr">
				<div>
					<div class="content-hd">
						<div class="user">
							<span>女王大人</span>
							<p class="vip">
								<span>银牌会员</span>
								<span>未认证</span>
							</p>
						</div>
						<div class="avatar">
							<img src="/static/images/default.jpg" class="bd-img">
							<i class="iconfont icon-jinru"></i>
						</div>
					</div>
					<!-- 提交申请 -->
					<transition name="router-slide">
						<div class="content-bd" v-if="isApply">
							<div class="margin">
								<div class="bd-items">
									<label class="title">公司名称</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">推荐人姓名</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">推荐人电话</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">店铺名称</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
							</div>
							<div class="margin">
								<div class="bd-items">
									<label class="title">是否三证合一</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">法人代表</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">银行卡号</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">组织机构代码</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
							</div>
							<div class="margin">
								<div class="bd-items">
									<label class="title">手机号码</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">身份证号</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">营业执照号</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">税务登记证号</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
							</div>
							<div class="margin">
								<div class="bd-items">
									<label class="title">经营地址</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">行业分类</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">经营负责人</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">主营业务</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
							</div>
							<div class="margin">
								<div class="bd-items">
									<label class="title">申请备注</label>
									<input type="text" placeholder="请输入公司名称">
								</div>
								<div class="bd-items">
									<label class="title">照片上传资料</label>
									<div class="upload">
										<i class="iconfont icon-xiangji"></i>
										<span>上传照片</span>
									</div>
								</div>
								<div class="tips">上传说明</div>
							</div>
							<div class="submit" v-if="isApply">
								<span class="button" @click="applyTo">提交申请</span>
							</div>
						</div>
					</transition>
					<!-- end -->
					<transition name="router-slide">
						<div class="apply-content" v-show="isSubmitApply">
							<i class="iconfont icon-dui1"></i>
							<span class="tips">恭喜您，提交成功，等待审核！</span>
							<span class="again">我再逛逛</span>
						</div>
					</transition>
					<!-- 审核未通过 -->
						<div class="apply-content" v-if="isApplyFail">
							<img src="../images/audit-no.png" class="icon-img">
							<span class="tips">很遗憾！您的审核未通过</span>
							<div class="fail-reason">
								未通过原因：您的三证合一照片上传不清晰
							</div>
							<span class="again" @click="againTo">请返回重新填写申请</span>
						</div>
					<!-- end -->
					<!-- 审核已经通过 -->
						<div class="apply-content" v-if="isApplySuccess">
							<img src="../images/audit.png" class="icon-img">
							<span class="tips">恭喜您，审核已经通过！</span>
							<span class="again" @click="decorateTo">快去完善商铺资料吧！</span>
						</div>
					<!-- end -->
				</div>
			</scroll>
		</div>
		<!-- 完善商家资料 -->
		<transition name="router-slide">
			<div class="m-decorate" v-show="isDecorate">
				<m-top>
					<span>完善商家资料</span>
				</m-top>
				<div class="decorate-wrapper">
					<scroll class="decorate-content">
						<div>
							<div class="content-bd">
								<div class="margin">
									<div class="bd-items">
										<label class="title">商铺名称</label>
										<input type="text" placeholder="请输入名称">
									</div>
									<div class="bd-items">
										<label class="title">商铺地址</label>
										<input type="text" placeholder="请输入地址">
									</div>
									<div class="bd-items">
										<label class="title">商品营业时间</label>
										<input type="text" placeholder="请输入营业时间">
									</div>
									<div class="bd-items">
										<label class="title">店铺介绍</label>
										<textarea placeholder="请输入商铺介绍"></textarea>
										<span class="num">120字</span>
									</div>
								</div>
								<div class="margin">
									<div class="bd-items">
										<label class="title">店招上传</label>
										<div class="upload">
											<i class="iconfont icon-xiangji"></i>
											<span>上传照片</span>
										</div>
										<span class="limit">限4张</span>
									</div>
									<div class="bd-items">
										<label class="title">店铺上传</label>
										<div class="upload">
											<i class="iconfont icon-xiangji"></i>
											<span>上传照片</span>
										</div>
										<span class="limit">限4张</span>
									</div>
								</div>
								<div class="submit">
									<span class="button">提交</span>
								</div>
							</div>
						</div>
					</scroll>
				</div>
			</div>
		</transition>
		<!-- end -->
	</div>
</template>
<script type="text/javascript">
	import MTop from '@/components/member/top'
	import Scroll from '@/components/common/scroll'
	export default{
		data(){
			return{
				dataArr:[],
				isApply:false,//是否已申请
				isSubmitApply:false,//是否已提交申请
				isApplyFail:true,//是否提交失败
				isApplySuccess:false,//是否提交成功
				isDecorate:false//是否完善资料
			}
		},
		components:{
			MTop,
			Scroll
		},
		methods:{
			applyTo(){
				this.isApply = !this.isApply
				this.isSubmitApply = !this.isSubmitApply

				this.$refs.scroll.scrollTo(0,0)
				this.$refs.scroll.disable()
			},
			againTo(){
				this.isApply = !this.isApply
				this.isApplyFail = !this.isApplyFail

				this.dataArr.push(this.isApply)
			},
			decorateTo(){
				this.isDecorate = !this.isDecorate
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '~@/common/style/variable.less';
	@import '~@/common/style/mixin.less';
	.m-business{
		.static-body;
		background-color: @color-white;
		.business-wrapper{
			.static-position(bottom);
			top:@input-height;
			.business-content{
				.body-height;
			}
		}
	}
	.content-hd{
		padding:@box-margin;
		background-color: @color-white;
		position: relative;
		.user{
			display: flex;
			flex-direction:column;
			.vip{
				margin-top:@element-margin;
				span{
					padding:0.05rem 0.3rem;
					background-color: @color-theme;
					color:@color-white;
					margin-right: @element-margin;
					border-radius: 0.3rem;
				}
			}
		}
		.avatar{
			position: absolute;
			right:0;
			top:50%;
			transform:translateY(-50%);
			display: flex;
			align-items:center;
			.bd-img{
				width:1.5rem;
				height:1.5rem;
				border-radius:100%;
				border:@1px dashed @color-theme;
				overflow: hidden;
			}
		}
	}
	.content-bd{
		.margin{
			border-top:@bottom-margin solid @color-gray;
			.bd-items{
				display: flex;
				padding:@box-margin;
				border-top:@1px solid @color-gray;
				position: relative;
				.title{
					flex:0 0 2.64rem;
				}
				input{
					margin:0.2rem 0;
					text-indent: 0.2rem;
					width:70%;
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
				.num,.limit{
					position: absolute;
					right:@box-margin;
					bottom:@box-margin;
					color:@color-theme;
					font-size:@font-size-small;
				}
			}
			.tips{
				color:@color-theme;
				font-size:@font-size-small;
				padding-left:@box-margin;
				padding-bottom:@box-margin;
			}
		}
	}
	.apply-content{
		display: flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		border-top:@bottom-margin solid @color-gray;
		padding-top:1rem;
		.iconfont{
			font-size:2.38rem;
			color:@color-theme;
		}
		.icon-img{
			width:3rem;
		}
		.tips{
			font-size:@font-size-medium-x;
			margin:@box-margin 0;
		}
		.again{
			padding:@bottom-margin/2 @box-margin;
			background-color: @color-theme;
			color:@color-white;
			border-radius: @bottom-margin/4;
		}
		.fail-reason{
			padding:@box-margin*2 @box-margin;
			border:@line-height solid @color-gray;
			margin-bottom:@box-margin;
		}
	}
	.m-decorate{
		.static-body;
		background-color: @color-white;
		.decorate-wrapper{
			.static-position(bottom);
			top:@input-height;
			.decorate-content{
				.body-height;
			}
		}
	}
	.submit{
		padding:@box-margin @box-margin*2;
		background-color: @color-white;
		box-sizing: border-box;
		.button{
			display: block;
			text-align: center;
			background-color:@color-theme;
			padding:0.3rem 0;
			border-radius: 0.6rem;
			color:@color-white;
			font-size:@font-size-medium-x;
		}
	}
</style>