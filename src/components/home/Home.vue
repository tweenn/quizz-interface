<template>
	<v-stepper
		v-model="currentStep"
		vertical
	>
		<v-stepper-step
			:complete="currentStep > 1"
			step="1"
		>
			Read the Terms of Service
		</v-stepper-step>

		<v-stepper-content step="1">
			<v-row justify="center" class="pt-3">
				<v-col cols="11">
					<v-card
						color="grey lighten-5"
						class="infinite-scroll mb-8 pa-4"
						height="200"
						outlined
						elevation="5"
					>
						<v-card-text class="pa-0">
							<LoremIpsum />
						</v-card-text>
					</v-card>

					<div class="d-flex flex-row-reverse">
						<v-btn
							color="primary"
							@click="currentStep++"
						>
							I Agree
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-stepper-content>

		<v-stepper-step
			:complete="currentStep > 2"
			step="2"
		>
			Check Information
			<small>Did we guessed it correctly?</small>
		</v-stepper-step>

		<v-stepper-content step="2" class="ml-0">
			<v-row justify="center" class="pt-3">
				<v-col cols="11">
					<v-card
						color="grey lighten-5"
						class="mb-8"
						outlined
						elevation="5"
					>
						<v-card-text class="pb-4">
							<p class="text-left ma-0">
								User Information
							</p>
						</v-card-text>

						<v-row>
							<v-col cols="12" sm="6"
								class="pr-sm-2 pl-sm-8 px-5"
							>
								<v-text-field
									v-model="name"
									label="Name"
									placeholder="João da Silva"
									outlined
									:rules="nameRules"
								/>
							</v-col>
							<v-col cols="12" sm="6"
								class="pr-sm-8 pl-sm-2 px-5"
							>
								<v-text-field
									v-model="email"
									label="Email"
									placeholder="joao@email.com.br"
									outlined
									:rules="emailRules"
								/>
							</v-col>
						</v-row>
					</v-card>

					<div class="d-flex flex-row-reverse">
						<v-btn
							color="success"
							@click="letsPlay"
							:disabled="canWePlay"
						>
							<span>
								Play
							</span>
							<v-icon small class="pl-2">
								fas fa-play
							</v-icon>
						</v-btn>
						<v-btn
							class="mr-4"
							text
							outlined
							color="primary"
							@click="currentStep--"
						>
							Return
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-stepper-content>
	</v-stepper>
</template>

<script>

import LoremIpsum from '@/components/home/LoremIpsum.vue';

export default {
	components: {
		LoremIpsum
	},
	data () {
		return {
			currentStep: 1,

			name: '',
			email: '',

			nameRules: [
				value => !!value || 'Name is required',
				value => value.length >= 4 || 'Name must be bigger than 4 characters'
			],
			emailRules: [
				value => !!value || 'E-mail is required',
				value => /.+@.+/.test(value) || 'E-mail must be valid'
			]
		};
	},
	computed: {
		canWePlay () {
			if ((this.name !== '') && (this.email !== '')) {
				return false;
			}
			return true;
		}
	},
	methods: {
		letsPlay () {
			if ((this.name !== '') && (this.email !== '')) {
				this.$store.commit('name', this.name);
				this.$store.commit('email', this.email);
				this.$store.commit('legals', true);
				this.$router.push({ name: 'Quizz' });
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.infinite-scroll {
		overflow: hidden;
		overflow-y: scroll;
	}
</style>
