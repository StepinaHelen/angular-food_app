import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CardItemComponent } from '../app/shared/modules/card/card-item/card-item.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from 'src/environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonsModule } from 'src/app/shared/modules/button/button.module';
import { ButtonModule } from 'primeng/button';
import { FoodItemWithAmountMock } from 'src/app/shared/testing-moks/testing-mocks';

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
        ButtonsModule,
        ButtonModule,
      ],
    }),
  ],
  argTypes: {
    food: {
      name: 'food',
      type: { name: 'string', required: false },
      defaultValue: FoodItemWithAmountMock,
    },
    role: {
      name: 'role',
      type: { name: 'string', required: false },
      defaultValue: 'client',
      options: ['client', 'admin'],
      control: {
        type: 'radio',
      },
    },
    isCart: {
      name: 'isCart',
      type: { name: 'string', required: false },
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template: Story = (args) => ({ props: args });

export const CardStoryDefault = Template.bind({});
