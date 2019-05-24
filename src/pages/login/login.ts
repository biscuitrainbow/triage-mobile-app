import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams } from 'ionic-angular';
import { Loading } from 'ionic-angular/components/loading/loading';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { RegisterPage } from './../register/register';
import { TabPage } from './../tab/tab';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	private formLogin: FormGroup;
	private loader: Loading;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public formBuilder: FormBuilder,
		public firebaseAuth: AngularFireAuth,
		public loadingCtrl: LoadingController,
		public toastCtrl: ToastController
	) {
		this.formLogin = formBuilder.group({
			email: [ '' ],
			password: [ '' ],
		});
	}

	login() {
		let email = this.formLogin.controls.email.value;
		let password = this.formLogin.controls.password.value;

		this.showLoading('Logging in...');
		this.firebaseAuth.auth
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				this.hideLoading();
			})
			.catch((error) => {
				this.showToast(error.message);
				this.hideLoading();
			});
	}

	loginWithAnonymously() {
		this.showLoading('Logging in...');
		this.firebaseAuth.auth
			.signInAnonymously()
			.then((user) => {
				this.hideLoading();
			})
			.catch((error) => {
				this.showToast(error.message);
				this.hideLoading();
			});
	}

	showTabPage() {
		this.navCtrl.push(TabPage);
	}

	showRegister() {
		this.navCtrl.push(RegisterPage);
	}

	showToast(message: string) {
		this.toastCtrl
			.create({
				message: message,
				duration: 3000,
			})
			.present();
	}

	showLoading(message: string) {
		this.loader = this.loadingCtrl.create({
			content: message,
		});

		this.loader.present();
	}

	hideLoading() {
		this.loader.dismiss();
	}
}
