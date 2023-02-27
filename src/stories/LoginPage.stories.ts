import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { withTests } from '@storybook/addon-jest';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from 'src/environments/environment';

import { ButtonsModule } from 'src/app/shared/modules/button/button.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from '../app/shared/modules/input-form/input-form.module';
import { SocialLinksModule } from '../app/shared/social-links/social-links.module';
import { LogInPageComponent } from '../app/log-in-page/log-in-page.component';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryModule } from 'src/app/shared/modules/icon-registry/icon-registry.module';

export default {
  title: 'LoginPage',
  component: LogInPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [LogInPageComponent],
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        ButtonsModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        InputFormModule,
        SocialLinksModule,
        MatIconModule,
        IconRegistryModule,
      ],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({ props: args });

export const LoginPageStory = Template.bind({});
