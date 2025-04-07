import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the header logo', () => {
    const logo = fixture.nativeElement.querySelector('.header-logo img');
    expect(logo).toBeTruthy();
  });
  it('should display the main title', () => {
    const title = fixture.nativeElement.querySelector('.header-title');
    expect(title.textContent).toBe('Pomodoro Time Management');
  });
  it('should display the subtitle', () => {
    const subtitle = fixture.nativeElement.querySelector('.header-subtitle');
    expect(subtitle.textContent.trim()).toBe(
      'Get a clear overview of your achievements in one place'
    );
  });
  it('should call loginPage() when LOG IN button is clicked', () => {
    spyOn(component, 'loginPage');
    const loginButton = fixture.nativeElement.querySelector('.btn-login');
    loginButton.click();
    expect(component.loginPage).toHaveBeenCalled();
  });
  it('should call registerPage() when SIGN UP button is clicked', () => {
    spyOn(component, 'registerPage');
    const signupButton = fixture.nativeElement.querySelector('.btn-signup');
    signupButton.click();
    expect(component.registerPage).toHaveBeenCalled();
  });
  it('should display the main image', () => {
    const image = fixture.nativeElement.querySelector('.how-it-works-img img');
    expect(image.src).toContain('pomodoro.jpg');
  });
  it('should display the "How it Works" title', () => {
    const title = fixture.nativeElement.querySelector('.how-it-works-title');
    expect(title.textContent).toBe('How it Works');
  });
  it('should display the description for "How it Helps"', () => {
    const description = fixture.nativeElement.querySelector(
      '.how-it-helps-description'
    );
    expect(description.textContent).toContain(
      'This application boosts your efficiency'
    );
  });
});
