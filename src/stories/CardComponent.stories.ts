import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CardItemComponent } from '../app/shared/modules/card/card-item/card-item.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from 'src/environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';

export default {
  title: 'CardItemComponent',
  component: CardItemComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        MatSnackBarModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        MatDialogModule,
        ButtonModule,
      ],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({ props: args });

export const CardStory = Template.bind({});
export const CardStoryAdmin = Template.bind({});
export const CartStory = Template.bind({});

CartStory.args = {
  food: {
    category: 'Salad',
    img: 'https://images.ctfassets.net/bffxiku554r1/5MAFeA66RfBSky4sFFDt0R/1cc78ac3477e95d2f52b55eb473097cd/GRO-Campaign_Dietary-Requirements_Vegetarian-Hero.jpg?fm=jpg&q=60&w=600&h=338',
    price: '25',
    title: 'Mix of salads',
    amount: 1,
  },
  role: 'client',
  isCart: true,
};

CardStory.args = {
  food: {
    category: 'Salad',
    img: 'https://images.ctfassets.net/bffxiku554r1/5MAFeA66RfBSky4sFFDt0R/1cc78ac3477e95d2f52b55eb473097cd/GRO-Campaign_Dietary-Requirements_Vegetarian-Hero.jpg?fm=jpg&q=60&w=600&h=338',
    price: '25',
    title: 'Mix of salads',
    amount: 1,
  },
  role: 'client',
  isCart: false,
};

CardStoryAdmin.args = {
  food: {
    category: 'Salad',
    img: 'https://images.ctfassets.net/bffxiku554r1/5MAFeA66RfBSky4sFFDt0R/1cc78ac3477e95d2f52b55eb473097cd/GRO-Campaign_Dietary-Requirements_Vegetarian-Hero.jpg?fm=jpg&q=60&w=600&h=338',
    price: '25',
    title: 'Mix of salads',
    amount: 1,
  },
  role: 'admin',
  isCart: false,
};
