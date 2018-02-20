import { TYPE } from './../triage/questions';
import { ResultPage } from './../result/result';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild(Slides) slides: Slides
  question: object;

  answers = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
    this.question = navParams.get('question');
  }

  ionViewDidLoad() {
  }


  onChoiceClick(choice, question) {
    switch (choice.type) {
      case TYPE.QUESTION: {

        this.answers.push({
          question: question,
          answer: choice.name
        });

        this.slides.slideTo(choice.to);
        break;
      }

      case TYPE.RESULT: {

        this.answers.push({
          question: question,
          answer: choice.name
        });

        this.navCtrl.push(ResultPage, {
          payload: choice.payload,
          answers: this.answers
        });
        break;
      }
    }
  }

  onNextClick(choices, question) {
    let checkedChoices = choices.filter(item => item.checked == true);
    let textChoice = checkedChoices.map(item => item.name).join(" ,");


    this.answers.push({
      question: question.question,
      answer: textChoice
    });


    if (checkedChoices.length >= 2) {
      this.navCtrl.push(ResultPage, {
        payload: question.payload,
        answers: this.answers
      });

    } else {
      this.slides.slideTo(question.to);
    }
  }





}
