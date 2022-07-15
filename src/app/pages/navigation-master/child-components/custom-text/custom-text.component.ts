import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss']
})
export class CustomTextComponent {

  divText: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae explicabo sit sunt perspiciatis exercitationem quia, ipsa, culpa, officiis voluptate debitis possimus assumenda repellat nisi? Eos saepe blanditiis culpa ab!`;
  color: string = 'chocolate';
  isButtonDisabled: boolean = false;

  constructor() { }

  changeText() {
    this.color = 'green';
    this.divText = `Customers’ Lifestyles Differ, So Should Their Rewards. Rewarding customer actions with personalized rewards has never been easier!`;
    this.isButtonDisabled = true;
  }
}
